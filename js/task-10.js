import users from "./users.js";

const getSortedUniqueSkills = (array) =>
  array
    .reduce((arr, user) => arr.concat(...user.skills), [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
