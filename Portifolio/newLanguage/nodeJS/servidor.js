const { Person } = require("./person")
require("./mudules/path")
// para declarar a desconstrução do objeto segue a sintaxe
// const name = new type(arguments);
const person = new Person("PH", 17);



console.log(person.sayMyAge());
console.log(person.sayMyName());

