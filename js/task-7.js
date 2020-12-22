import users from "./users.js";

const calculateTotalBalance = (array) =>
  array.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users)); // 20916
