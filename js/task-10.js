import users from './users.js';

const getSortedUniqueSkills = users =>
  users
    .reduce((users, user) => users.concat(...user.skills), [])
    .filter((user, index, users) => users.indexOf(user) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
