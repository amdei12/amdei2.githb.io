"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
   let x= arr.map(function(key){

    key.age=2*key*age;
    return key;
    });
    return x;

}

function filterEven(arr){
    let result=arr.filter((key)=>key%2==0?key:null);
    return result;

}

function filterOver10(arr) {
    let num=arr.filter((key)=>key>10?key:null);

}

function findEvenNum(arr){
    let num=arr.filter((key)=>key.age%2==0?key:null);
  return num;
}

function findEvenAge(arr){
 let m=arr.map((key)=>key.age%2==0?age:null);
}

function includesEvenNum(arr){
    let x=arr.filter((key)=>key%2==0?key:null);
    if(x.length==null){
        return false;
    }
    return true;

}

function includesEvenAge(arr){

}