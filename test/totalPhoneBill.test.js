var assert = require("assert");
var totalPhoneBill = require("../totalPhoneBill");

describe("It is total phone bill function", function(){

    it("it should tell how much calls were made", function(){
        assert.equal("R" +2.75, totalPhoneBill("calls"))
    });
    it("It should tell how many smses were made", function(){
        assert.equal("R"+0.65, totalPhoneBill("sms"))
    });
});