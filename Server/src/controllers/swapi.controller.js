import {
	getFastestShipService,
	getplanetByTerrainService,
} from "../services/swapi.service.js";

export const fastestShip = async (req, res) => {
	try {
		const passangers = Number(req.params.passangers);
		const starships = await getFastestShipService(passangers);
		return res.status(200).json({
			code: 200,
			msg: "Result: the fastest ship with passengers capacity, can travel for at least a week, and has appeared at least in one of these seasons (4, 5, 6)",
			data: starships,
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
};

export const planetByTerrain = async (req, res) => {
	try {
		const terrain = req.params.terrain;
		const planets = await getplanetByTerrainService(terrain);
		return res.status(200).json({
			code: 200,
			msg: "Got planet by terrain: " + terrain + " and highest population",
			data: planets,
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
};
