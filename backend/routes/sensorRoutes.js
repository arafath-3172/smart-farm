// smart-farming-backend/routes/sensorRoutes.js
const express = require("express");
const router = express.Router();
const Sensor = require("../models/Sensor");

router.get("/sensors", async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes for sensor details, data, etc.

module.exports = router;
