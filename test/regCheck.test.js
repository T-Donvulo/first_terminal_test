var assert = require("assert");
var regCheck = require("../regCheck");

describe("regCheck Function", function() {

    it("It should return GP", function() {
        assert.equal(false, regCheck("123456GP", "isGP"));   
    });
    it("It should not return MP", function () {
        assert.equal(false, regCheck("MP", "isMP"))
    });
    it("It should return CY", function() {
        assert.equal(false, regCheck("CY", "Bellville"))        
    })
    it("It should not return ND", function () {
        assert.equal(false, regCheck("ND", "Durban"))        
    })

    
});