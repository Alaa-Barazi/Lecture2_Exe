const obj={
    name:'John',
    age:30
}
//Q1
/*const array=new Array(100);
array.fill(obj);
console.log(array);*/

//Q2
/*const arr=Array.from(Array(100).keys())
console.log(arr);*/

//Q3
console.log(Object.values(obj));

//Q4
const arr = [1,2,3,4,5,6,7,8];

const obj1 = Object.assign({}, arr);
console.log(obj1);
//Q5
console.log(Array.isArray(arr));

//Q6
let arr1=[1,2,3,4,5];
const arr2=arr1;
const CopyArr = [...arr1];
console.log(arr1+" "+arr2+" "+CopyArr);