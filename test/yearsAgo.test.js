var assert = require("assert");
var yearsAgo = require("../yearsAgo");

describe("It's years ago function", function(){
    it("It should tell how many years ago",function(){
        assert.equal(20 ,yearsAgo(2000))
    });
});