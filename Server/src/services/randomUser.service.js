import axios from "axios";
import { extractFullnames, maxCountLetter } from "../../utils/index.js";

export const getTenRandomUsersOrderByName = async () => {
	const response = await axios.get("https://randomuser.me/api/?results=10");
	const users = response.data.results;
	const sortedUsersABC = users.sort((a, b) =>
		a.name.first.localeCompare(b.name.first)
	);
	return sortedUsersABC;
};

export const getPersonOverAgeReceived = async (age) => {
	const response = await axios.get("https://randomuser.me/api/?results=10");
	const personOverAge = response.data.results.find((person) => {
		return person.dob.age > age;
	});
	return personOverAge;
};

export const getMostUsedLetter = async () => {
	const response = await axios.get("https://randomuser.me/api/?results=5");
	const names = extractFullnames(response.data.results);
	const repetitions = maxCountLetter(names);
	return { names, repetitions };
};
