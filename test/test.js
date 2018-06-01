var assert = require("assert");
var request = require("then-request");
const call = require("../helpers");

describe("Array", function() {
  before(async function() {});

  afterEach(async function() {
    console.log(this.currentTest.state);
    console.log(typeof this.currentTest.title);
    if (this.currentTest.state != "passed") {
      console.log("hey my tests failed");
      console.log("hey my tests failed");
      // const res = await call.makeApiCall();
      // console.log(res);
    } else {
      console.log("hey my tests passed");
    }
  });

  it("should return -1 when the value is not present", async function() {
    assert.equal([1, 2, 3].indexOf(4), -5);
  });
});
