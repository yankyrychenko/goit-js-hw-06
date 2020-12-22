import users from "./users.js";

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age >= min && age <= max)
    .map(({ name, email }) => ({ name, email }));

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
