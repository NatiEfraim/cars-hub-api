// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;
// const dbConnection = require("./db");
// app.get("/", (req, res) => res.send("hello world"));
// app.listen(port, () => console.log(`Node JS server starter on port ${port}`));

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");
const CarsRouter = require("./routes/carsRoute");
//////try see if any error on the connection to datbase
dbConnection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit the process if there is a MongoDB connection error
});

////diffine all route
app.use("/api/cars", CarsRouter);

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Node JS server started on port ${port}`));
