import axios from "axios";
import {
	checkStarshipCapacities,
	getPlanetWithBiggestPopulation,
	randomPageNumber,
	terrainPlanetsMatched,
} from "../../utils/index.js";

export const getFastestShipService = async (passengers) => {
	const page = randomPageNumber();
	const response = await axios.get(
		`https://swapi.dev/api/starships/?page=${page}`
	);
	const starships = response.data.results;
	const shipsWithCapacity = checkStarshipCapacities(starships, passengers);
	const shipsFiltered = shipsWithCapacity.filter((ship) => {
		return (
			ship.has_passangers_capacity == true &&
			ship.days_can_travel >= 7 &&
			ship.seasons.length > 0
		);
	});

	if (shipsFiltered.length > 1) {
		return Math.max(
			...shipsFiltered.map((ship) => ship.max_atmosphering_speed)
		);
	}
	return shipsFiltered;
};

export const getplanetByTerrainService = async (terrain) => {
	const response = await axios.get(`https://swapi.dev/api/planets/`);
	const planets = response.data.results;
	planets.forEach((planet) => {
		planet.terrain = planet.terrain.split(/\s*,\s*/);
		planet.population = Number(planet.population);
	});
	const match = await terrainPlanetsMatched(planets, terrain);
	const maxPopulation = getPlanetWithBiggestPopulation(planets);
	if (match.length == 1) {
		return match;
	}
	return maxPopulation;
};
