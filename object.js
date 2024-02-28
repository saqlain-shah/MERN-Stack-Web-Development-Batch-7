// Object.create()
// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// Object.freeze()
// Object.seal()


const person = {
    name :"saqlain"
}
Object.freeze(person)
person.name = "shah"

console.log(person)