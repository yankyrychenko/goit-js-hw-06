import users from "./users.js";

const getInactiveUsers = (array) => array.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
