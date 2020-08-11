var assert = require("assert");
var countAllPaarl = require("../countAllPaarl");

describe("It's count all Paarl function", function(){
    it("Should display Paarl registration number", function(){
        assert.equal(2, countAllPaarl("CJ12345, CA3456, CJ4567"))

    });
});