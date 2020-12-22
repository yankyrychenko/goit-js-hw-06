import users from "./users.js";

const getUsersWithEyeColor = (array, color) =>
  array.filter(({ eyeColor }) => color === eyeColor);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
