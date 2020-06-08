const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const db = {
  user: "kodflix",
  password: "kodflix-mj",
  host: "localhost",
  port: "27017",
  name: "kodflix"
}
const url = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`;

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      client.close();
      const dbo = client.db(db.name);
      resolve(dbo);
    });
  });
}

module.exports = { connect };
