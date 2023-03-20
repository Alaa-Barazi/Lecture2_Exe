//if else shortcut
//!Ternaries
let message;
let bottle={
    fullOfSode:true
};
if(bottle.fullOfSode){
    message = "The bottle has Soda";
}
else{
    message = "The bottle may not have soda";
}
//Ternaries
let message2=bottle.fullOfSode? "The bottle has Soda" : "The bottle may not have soda";

//! Array Methods
const dogs = [
    {
        id:"dog-1",
        name:"Poodle",
        temperament:[
            "Intelligent",
            "Active",
            "Alert",
            "Faithfull",
            "Trainable",
            "Instinctful"
        ]
    },
    {
        id:"dog-2",
        name:"Bernese Mountain Dog",
        temperament:[
            "Affectionate",
            "Intelligent",
            "Loyal",
            "Faithfull",

        ]
    },
    {
        id:"dog-3",
        name:"Labrador",
        temperament:[
            "Intilligent",
            "Even tempered",
            "Kind",
            "Agile",
            "Outgoing",
            "Trusting",
            "Gentle"
        ]
    }
]
//!find Method
//The find() method returns the first element in the provided array that satisfies the
//provided testing function. If no values satisfy the testing fucnion, undefined is returned
dogs.find((dog)=> dog.name === "Bernese Mountain Dog");

//! Some Method
//The some() method tests whether at least one element in the array passes the test implemented
// by the provided function. It returns true if, in the array, it finds an element for which the provided function
//returns true; otherwise it returns false;
dogs.some((dog) => dog.temperament.includes("Aggresive"));//==>false

//!Every Method
dogs.every((dog)=> dog.temperament.includes("trusting"));//==>false

dogs.every((dog)=> dog.temperament.includes("intelligent"));//==>true


//!Map Method
//creates new array and returns it with the elements we want

dogs.map((dog) =>  dog.name);
// Array that contains names of all dogs in the array;
//The map() Method creates a new array populated with the results of calling
//a provided function on every element in the calling array.

//! Filter Method
const filtered = dogs.filter((dog)=> dog.temperament.includes("Faithfull"));
//The filter() method creates a shallow copy of a portion of a given array, filtered
//down to just the elements from the given array that pass the test implemented by the provided
//function

//!Reduce Method
const reduced = dogs.reduce((acc,dog)=>{
    return [...acc,...dog.temperament]
},[])

console.log(reduced);
/*[
  'Intelligent',  'Active',
  'Alert',        'Faithfull',
  'Trainable',    'Instinctful',
  'Affectionate', 'Intelligent',
  'Loyal',        'Faithfull',
  'Intilligent',  'Even tempered',
  'Kind',         'Agile',
  'Outgoing',     'Trusting',
  'Gentle'
] */