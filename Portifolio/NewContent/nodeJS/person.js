// Esse estilo de js modelo, é ultilizado e apenas após é nomeado por ordem
// Exemplo:
// const pessoa = new Person ('Paulo')
// dessa forma vai retornar o primeiro valor
// se não tivesse apenas o name, teria que nomear os "this" em ordem de aparição
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayMyName() {
        return `My name is ${this.name}`
    };

    sayMyAge() {
        return `My name is ${this.age}`
    };
}



// para poder usar esse objeto em outro arquivo tem que exportar ele
module.exports = {
    Person,
};