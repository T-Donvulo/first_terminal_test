var assert = require("assert");
var isFromBellvile = require("../isFromBellvile");

describe(' is From Bellvile function', function(){
    it("It should return Bellville registration", function () {
        assert.equal(true, isFromBellvile("CY"));
        
    });
    it("It's not Bellville registration", function () {
        assert.equal(false, isFromBellvile("CA"));
        
    });
});
    
