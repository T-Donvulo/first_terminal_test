var assert = require("assert");
var findItemsOver20 = require("../findItemsOver20");

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

//results look like this now.
var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];


describe("It's function that finds items that over 20", function(){
    it("should find items over 20", function(){
        assert.deepEqual(results,findItemsOver20(itemList))
    });
});