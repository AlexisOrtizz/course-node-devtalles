const { getAge, getUUID } = require('../plugins');

const obj = {
  name: 'Alexis',
  birthdate: '2000-12-12',
};

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  };
};

const alexis = buildPerson( obj );
console.log( alexis );