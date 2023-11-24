//   Loader functions
export const usersLoader = async () => {
  const users = await fetch("http://localhost:3000/users");

  return users.json();
};

export const eventsLoader = async () => {
  const events = await fetch("http://localhost:3000/events");

  return events.json();
};

export const categoriesLoader = async () => {
  const categories = await fetch("http://localhost:3000/categories");

  return categories.json();
};
