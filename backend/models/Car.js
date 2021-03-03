const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the model
const CarSchema = new Schema({
  make: { type: String, lowercase: true },
  model: { type: String, lowercase: true },
  year: Number,
  vin: { type: String, unique: true },
  city: { type: String, lowercase: true },
  descShort: String,
  descLong: String,
  price: Number,
  miles: Number,
  image: String
});

// Create the model class
const Car = mongoose.model("Car", CarSchema);

// Export the model class so other files can use it
module.exports = Car;
