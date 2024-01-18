// smart-farming-backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const sensorRoutes = require("./routes/sensorRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/smart-farming-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", sensorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
