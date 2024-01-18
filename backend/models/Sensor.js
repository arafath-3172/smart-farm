// smart-farming-backend/models/Sensor.js
const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  name: String,
  type: String,
  // Add other fields as needed
});

module.exports = mongoose.model("Sensor", sensorSchema);
