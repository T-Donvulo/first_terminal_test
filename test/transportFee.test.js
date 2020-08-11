var assert = require("assert");
var transportFee = require("../transportFee");

describe("It's transport fee function", function(){

    it("Should tell how much is tranport in the morning", function(){
        assert.equal("free", transportFee("evening"))
    });
    it("Should tell how much transport is in the afternoon", function(){
        assert.equal("R20", transportFee("morning"))
    });
    it("Anytime of the day", function(){
        assert.equal("R10", transportFee("afternoon"))
    });
});