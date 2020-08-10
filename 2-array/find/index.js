export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const year = new Date().getFullYear();
  const person = collection.find(person => {
    return year - person.age >= 2000;
  });
  return person.name;
}
