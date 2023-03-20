//Q1
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers);

//Q2
let obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
const { numbers: { a, b } } = obj;
console.log(a, b);

//Q3

//Q4
/*const propName = "name";
const person = {
    [propName]: "John",
    age : 30
};
// square brackets to make it dynamic when it changes 
const {[propName] :name} = person;
console.log(name);*/

//Q7
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        coordinates: {
            latitude: 37.7749,
            longitude: -122.4194
        }
    },
    getFullName() {
        return `${name} Doe`;
    }
};
const {name,age,address:{street:st,city:ct,state,coordinates:{latitude:lt,longitude:lg}},getFullName}=person;
getFullName();



