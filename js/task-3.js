import users from "./users.js";

const getUsersWithGender = (array, gender) =>
  array.filter((array) => array.gender === gender).map(({ name }) => name);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
