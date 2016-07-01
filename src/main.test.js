var expect = require("chai").expect;
var tree = require("./main");

describe("tree", function () {
  it("predict instance", function () {

    var instance = {
    	color: "blue",
    	shape: "hexagon"
    };

    expect(tree.predict(instance)).to.be.false;
  });
});
