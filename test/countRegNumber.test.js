var assert = require("assert");
var countRegNumber = require("../countRegNumber");

describe("It should count the registration number", function () {
    it("count registration number", function () {
        assert.equal(4, countRegNumber("CA1234, CJ567, CY12345, CY12345"));   
    })
    
});