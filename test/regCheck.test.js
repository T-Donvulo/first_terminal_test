var assert = require("assert");
var regCheck = require("../regCheck");

describe("regCheck Function", function() {

    it("It should return GP", function() {
        assert.equal(true, regCheck("123456GP", "GP"));   
    });
    it("It should not return MP", function () {
        assert.equal(true, regCheck("1234455MP", "MP"))
    });
    it("It should return CY", function() {
        assert.equal(true, regCheck("123456CY", "CY"))        
    })
    it("It should not return ND", function () {
        assert.equal(true, regCheck("123456ND", "ND"))        
    })

    
});