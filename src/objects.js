const createPerson = (name, age) => {
  return person = {
    name: name,
    age: age
  }
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)
};

const isOver65 = (person) => {
  return person.age > 65
};

const getAges = (people) => {
  return people.map(obj => obj.age)
};

const findByName = (name, people) => {
  return people.splice(obj => obj.name = name).filter(obj => obj.name === name).reduce((obj, item) => {
    obj[people.name] = name
 })
};

const findHondas = (cars) => {
  const result = cars.filter(car => car.manufacturer === 'Honda');
  return result;
};

const averageAge = (people) => {
  const ages = people.map(obj => obj.age)
  const sumAges = ages.reduce((a, b) => a + b, 0)
  return sumAges / people.length
};

const createTalkingPerson = (name, age) => {
  const user = {
    name: name,
    age: age,
    introduce: () => `Hi Fred, my name is ${name} and I am ${age}!`
}
return user
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
}
