var assert = require("assert");
var findItemsOver = require("../findItemsOver");


var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = findItemsOver(itemList, 25)

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

describe("It's find items over function", function(){
    it("should say which one is expensive", function(){
        assert.deepEqual(results,findItemsOver(itemList, 25))
    });
});