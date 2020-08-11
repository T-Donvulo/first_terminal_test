var assert = require("assert");
var countAllFromTown = require("../countAllFromTown");

describe("It's count all from town function", function(){
    it("it should tell if it's from town", function(){
        assert.equal(2, countAllFromTown("CA345678,CA123456, CY345567", "CA"))
    });
});