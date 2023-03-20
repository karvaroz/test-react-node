import {
	getMostUsedLetter,
	getPersonOverAgeReceived,
	getTenRandomUsersOrderByName,
} from "../services/randomUser.service.js";

export const tenRandomUsers = async (req, res) => {
	try {
		const users = await getTenRandomUsersOrderByName();
		return res.status(200).json({
			code: 200,
			msg: "Got 10 random users ordered by name successfully",
			data: users,
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
};

export const personOverAge = async (req, res) => {
	try {
		const age = Number(req.params.age);
		const person = await getPersonOverAgeReceived(age);
		return res.status(200).json({
			code: 200,
			msg: "Got a person over age: " + age,
			data: person,
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
};

export const mostUsedLetter = async (req, res) => {
	try {
		const { names, repetitions } = await getMostUsedLetter();
		return res.status(200).json({
			code: 200,
			msg: "Got most used letter in the name list",
			data: {
				names: names,
				repetitions: repetitions,
			},
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
};
