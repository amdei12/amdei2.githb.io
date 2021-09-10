"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(){
   accumulator=new Accumulator(a, b);
   currentValue =a,
   increment=b,
   report=()=> a;
   }


   
calc = new Calculator();
        calc.setValues(a, b);


/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
   calc = new Calculator(),
        calc.setValues(a, b);
        let sum=()=>this.a+this.b;
        let mut=()=>this.a*this.b;
     }
     