// const { Router } = require("express");

// Router
const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");
const CarController = require("../controllers/userController");

////// get allcars function
// router.get("/getallcars", async (req, res) => {
//   try {
//     const cars = await Car.find();
//     res.send(cars);
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// });

///go and inplemnet get all cars function
router.get("/getallcars", CarController.getAllCars);

module.exports = router;
