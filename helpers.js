var request = require("then-request");

const createTestRun = (testRunName) =>
  request("POST", "https://app.hiptest.com/api/projects/86205/test_runs", {
    headers: {
      accept: "application/vnd.api+json; version=1",
      "access-token": "Toi8ENseYIl4tdWaddLwlg",
      uid: "jur550@gmail.com",
      client: "gXzotQpPxAa7VEIKpHG2GQ"
    },
    json: { data: { attributes: { name: testRunName } } }
  });

const getAllTests = testRunId =>
  request(
    "GET",
    `https://app.hiptest.com/api/projects/86205/test_runs/${testRunId}/test_snapshots`,
    {
      headers: {
        accept: "application/vnd.api+json; version=1",
        "access-token": "Toi8ENseYIl4tdWaddLwlg",
        uid: "jur550@gmail.com",
        client: "gXzotQpPxAa7VEIKpHG2GQ"
      }
    }
  );

  const postTestResult = (testRunId, testSnapshotId, testStatus) =>
  request(
    "Post",
    `https://app.hiptest.com/api/projects/86205/test_runs/${testRunId}/test_snapshots/${testSnapshotId}/test_results`,
    {
      headers: {
        accept: "application/vnd.api+json; version=1",
        "access-token": "Toi8ENseYIl4tdWaddLwlg",
        uid: "jur550@gmail.com",
        client: "gXzotQpPxAa7VEIKpHG2GQ"
      },
      json: {data: {type: "test-results", attributes: {status: testStatus, "status-author": "detox", description: "All was well"}}}

    }
  );

async function createNewTestRun(name) {
  const res = await createTestRun(name);
  const body = JSON.parse(res.getBody().toString("utf8"));
  return body.data.id;
}

async function getTests(testRunId) {
  const res = await getAllTests(testRunId);
  const body = JSON.parse(res.getBody().toString("utf8"));
  return body.data;
}

async function addTestExecResult(testRunId, testSnapshotId, testStatus) {
  const res = await postTestResult(testRunId, testSnapshotId, testStatus);
  const body = JSON.parse(res.getBody().toString("utf8"));
  return body.data;
}

module.exports = {
  createNewTestRun,
  getTests,
  addTestExecResult
};
