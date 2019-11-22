const mongoose = require("mongoose");
const MongoMemoryServer = require("mongodb-memory-server").default;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

const connectDB = async () => {
  let conn;
  if (process.env.NODE_ENV === "test") {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    conn = await mongoose.connect(mongoUri, options, err => {
      if (err) console.error(err);
    });
  } else {
    conn = await mongoose.connect(process.env.MONGO_URI, options);
  }

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
