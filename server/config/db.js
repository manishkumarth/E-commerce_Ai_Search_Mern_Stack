

const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Mongo Error:", err);
    throw err;
  }
};

module.exports = connectToDb;
