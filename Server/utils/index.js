export const extractFullnames = (arr) => {
	const names = arr.map(
		(fullname) => `${fullname.name.first} ${fullname.name.last}`
	);
	return names;
};

export const maxCountLetter = (names) => {
	const letters = names.join().replaceAll(",", "").replaceAll(" ", "");
	const counts = {};
	let maxCount = 0;
	let maxStr = "";

	for (let letter of letters) {
		counts[letter] = counts[letter] + 1 || 1;
	}
	for (let key in counts) {
		if (counts[key] > maxCount) {
			maxCount = counts[key];
			maxStr = key;
		}
	}
	return { counts, maxStr };
};

export const getApiData = async (resource, page) => {
	let totalResults = [];
	for (let i = 1; i <= page; i++) {
		const url = `https://swapi.dev/api/${resource}/?page=${page}`;
		const response = await axios.get(url);
		const data = await response.data.results;
		totalResults += data;
	}
	return totalResults;
};

export const getTerrainsFromList = async (planetList) => {
	let terrains = [];

	for (let i = 0; i < planetList.length; i++) {
		for (let j = 0; j < planetList[i].terrain.length; j++) {
			terrains.push(planetList[i].terrain[j]);
		}
	}
	return terrains;
};

export const checkStarshipCapacities = (starships, passangers) => {
	starships.forEach((ship) => {
		ship.consumables = ship.consumables.split(" ");
		ship.passengers = Number(ship.passengers.replaceAll(",", ""));
		ship.max_atmosphering_speed = Number(ship.max_atmosphering_speed);
	});
	getShipsPassangersCapacity(starships, passangers);
	getShipsConsumable(starships);
	getShipsSeason(starships);
	return starships;
};

const getShipsPassangersCapacity = (starships, passangers) => {
	return starships.filter(
		(ship) => (ship.has_passangers_capacity = ship.passengers >= passangers)
	);
};

const getShipsConsumable = (starships) => {
	for (let i = 0; i < starships.length; i++) {
		for (let j = 0; j < starships[i].consumables.length; j++) {
			if (
				starships[i].consumables[1] == "day" ||
				starships[i].consumables[1] == "days"
			) {
				starships[i].days_can_travel = starships[i].consumables[0] * 1;
			} else if (
				starships[i].consumables[1] == "week" ||
				starships[i].consumables[1] == "weeks"
			) {
				starships[i].days_can_travel = starships[i].consumables[0] * 7;
			} else if (
				starships[i].consumables[1] == "month" ||
				starships[i].consumables[1] == "months"
			) {
				starships[i].days_can_travel = starships[i].consumables[0] * 30;
			} else if (
				starships[i].consumables[1] == "year" ||
				starships[i].consumables[1] == "years"
			) {
				starships[i].days_can_travel = starships[i].consumables[0] * 365;
			}
		}
	}
	return starships;
};

const getShipsSeason = (starships) => {
	for (let i = 0; i < starships.length; i++) {
		for (let j = 0; j < starships[i].films.length; j++) {
			starships[i].films[j] = Number(starships[i].films[j].replace(/\D/g, ""));
		}
	}
	checkSeason(starships);

	return starships;
};

const checkSeason = (starships) => {
	const seasons = [4, 5, 6];
	for (let i = 0; i < starships.length; i++) {
		for (let j = 0; j < starships[i].films.length; j++) {
			starships[i].seasons = starships[i].films.filter((i) =>
				seasons.includes(i)
			);
		}
	}

	return starships;
};

export const terrainPlanetsMatched = async (planets, terrain) => {
	let planetList = [];
	const terrains = await getTerrainsFromList(planets);
	if (terrains.includes(terrain))
		for (let i = 0; i < planets.length; i++) {
			for (let j = 0; j < planets[i].terrain.length; j++) {
				if (planets[i].terrain[j] == terrain) {
					planetList.push(planets[i]);
				}
			}
		}
	return planetList;
};

export const getPlanetWithBiggestPopulation = (planetList) => {
	let maxPopulation = 0;
	let maxPlanetObj;

	planetList.forEach((element) => {
		if (element.population > maxPopulation) {
			maxPopulation = element.population;
			maxPlanetObj = element;
		}
	});

	return maxPlanetObj;
};
