export const GetData = async () => {
	const users = await fetch("http://localhost:3000/users");
	const events = await fetch("http://localhost:3000/events");
	const categories = await fetch("http://localhost:3000/categories");

	return {
		users: await users.json(),
		events: await events.json(),
		categories: await categories.json(),
	};
};
