var request = require("then-request");

const createTestRun = () =>
  request("POST", "https://app.hiptest.com/api/projects/86205/test_runs", {
    headers: {
      accept: "application/vnd.api+json; version=1",
      "access-token": "Toi8ENseYIl4tdWaddLwlg",
      uid: "jur550@gmail.com",
      client: "gXzotQpPxAa7VEIKpHG2GQ"
    },
    json: { data: { attributes: { name: "Sprint3" } } }
  });

const createTestRun2 = testRunId =>
  request(
    "POST",
    `https://app.hiptest.com/api/projects/86205/test_runs/${testRunId}/test_snapshots`,
    {
      headers: {
        accept: "application/vnd.api+json; version=1",
        "access-token": "Toi8ENseYIl4tdWaddLwlg",
        uid: "jur550@gmail.com",
        client: "gXzotQpPxAa7VEIKpHG2GQ"
      },
      json: { data: { attributes: { name: "Sprint3" } } }
    }
  );

async function createNewTestRun() {
  const res = await createTestRun();
  const body = JSON.parse(res.getBody().toString("utf8"));
  return body;
}

module.exports = {
  createNewTestRun
};
