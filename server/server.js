const app = require("./app");
const colors = require("colors");

const PORT = process.env.PORT || 5050;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.massage}`.red);
  server.close(() => process.exit(1));
});
