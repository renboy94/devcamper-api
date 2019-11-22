const mongoose = require("mongoose");
const MongoMemoryServer = require("mongodb-memory-server").default;

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let mongoServer;

beforeAll(async done => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  const conn = await mongoose.connect(mongoUri, err => {
    if (err) console.error(err);
  });
  console.log(`Mongo Uri test: ${mongoUri}`);
  done();
});

afterAll(async done => {
  await mongoose.disconnect();
  await mongoServer.stop();
  done();
});
