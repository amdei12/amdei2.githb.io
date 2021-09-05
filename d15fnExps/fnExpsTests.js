const assert = require("assert");  //always need this with node
const imports = require("./fnExps.js");  //with node need the name of your file with your functions here
const double = imports.double;  //do this for all of the functions used in the Mocha tests
const myMap = imports.myMap;
const times100 = imports.times100;

describe("get doube the number,",function(){
    if("to calculate",function(){
        assert.strictEqual(double(10), 20);
    });
    if("to calculate",function(){
        assert.strictEqual(double(10), 20);
    });
});
describe("get times 100 the number,",function(){
    if("to calculate",function(){
        assert.strictEqual(times100(10), 1000);
    });
    if("to calculate",function(){
        assert.strictEqual(double(20), 2000);
    });
});
describe("get times 100 the number,",function(){
    if("to calculate",function(){
        assert.strictEqual(Mapcd(10), 1000);
    });
    if("to calculate",function(){
        assert.strictEqual(double(20), 2000);
    });
});

