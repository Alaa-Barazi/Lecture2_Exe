const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];
//Q1
/*const names=data.map((person) =>  person.name);
console.log(names);

//Q2
var myDate = new Date('1-1-1990');
var year = myDate.getFullYear();

const filtered = data.filter((person)=> new Date(person.birthday).getFullYear()<year);
console.log(filtered);
*/
//Q3

const meat=data.map((person) =>  person.favoriteFoods.meats);
const fish=data.map((person) =>  person.favoriteFoods.fish);
const obj=[];
const foods=meat.concat(fish);
//First Try
/*data.forEach((m,meat)=>{
    let index=0, cnt=0;
    let item=m.favoriteFoods.meats[index];
    for(let i=0;i<data.length;i++){
        if(data[i].favoriteFoods.meats[index]==m.favoriteFoods.meats[index])
        cnt++;
    }
   
    obj[item]=cnt;
}
) 

data.forEach((f,fish)=>{
    let index=0, cnt=0;
    let item=f.favoriteFoods.fish[index];
    for(let i=0;i<data.length;i++){
        if(data[i].favoriteFoods.fish[index]==f.favoriteFoods.fish[index])
        cnt++;
    }
   obj[item]=cnt;
}
) */
//Second Try
let countObject = foods.flat().reduce(function (
    count,
    currentValue
) {
    return (
        count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
        count
    );
},
{});
console.log(countObject);
