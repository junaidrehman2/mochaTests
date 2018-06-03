var assert = require("assert");
var request = require("then-request");
const call = require("../helpers");

describe("Array", function() {
  let tests; 
  let testRunId = '163856'; 
  before(async function() {
    // const testRunId = await call.createNewTestRun('sp 4');
     tests = await call.getTests('163856'); 

    tests.forEach(element => {
      console.log(element.attributes.name)
    });
    // console.log(JSON.stringify(tests, undefined, 2))

  });

  afterEach(async function() {
    console.log(this.currentTest.state);
    const currentTestName = this.currentTest.title; 

    const currentHipTest = tests.filter(function(el){
      return el.attributes.name === currentTestName
    });

    if (currentHipTest[0].id){
    const testss = await call.addTestExecResult(testRunId, currentHipTest[0].id, this.currentTest.state)
    console.log(`=======>>>>  ${testss}`)
    }
  });

  it("s2", async function() {
    assert.equal([1, 2, 3].indexOf(4), -5);
  });

  it("s1", async function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should not return -3 when the value is not present", async function() {
    assert.equal([1, 2, 3].indexOf(4), -3);
  });
});
