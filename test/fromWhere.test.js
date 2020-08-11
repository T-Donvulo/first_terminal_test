var assert = require("assert");
var fromWhere = require("../fromWhere");

describe("It's from where function", function(){
    it("Car is from Cape Town", function(){
        assert.equal("Cape Town", fromWhere("CA"))
    });
    it("Car is from Paarl", function(){
        assert.equal("Paarl", fromWhere("CJ"))
    });
    it("Car is from Bellville", function(){
        assert.equal("Bellville", fromWhere("CY"))
    });
    it("Car is from Unknown/ unlisted place", function(){
        assert.equal("Some other place!",fromWhere("CA, CJ, CY"))
    });
});