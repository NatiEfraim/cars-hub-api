const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
////diffine the sechma of the care table
const carSechma = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    feulType: { type: String, required: true },
    bookedTimeSlots: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
      },
    ],
    rentPerHour: { type: Number, required: true },
  },
  { timestamps: true }
);
const carModel = mongoose.model("cars", carSechma);
module.exports = carModel;
