"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. */

const assert = require("assert");  //always need this with node
const myExports = require("./bank.js");  //with node need the name of your file with your functions here
const makeBank = myExports.makeBank;  //do this for all of the functions used in the Mocha tests


describe("bank tests", function () {

  const bank = makeBank();
  it("tests reduce with sum", function () {
    function sum(acc, number) { return (number + acc);}
    assert.strictEqual(myReduce([1, 2, 3], sum, 0), 7);
    assert.strictEqual(myReduce([1, 2, 3, 4], sum, 0), 10);
});

it("tests reduce with mult", function () {
    function mult(acc, number) { return (number * acc);}
    assert.strictEqual(myReduce([1, 2, 3], sum, 0), 6);
    assert.strictEqual(myReduce([1, 2, 3, 4], mult, 1), 24);
});

}); 


