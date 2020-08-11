var assert = require("assert");
var isWeekday = require("../isWeekday");

describe("Weekday function", function () {

    it("it's weekend", function () {
        assert.equal(false, isWeekday("Sunday"));
    });
    it("it's weekday", function () {
        assert.equal(true, isWeekday("Monday"))

    });
});