const mongoose = require("mongoose");
const cars = require("../json/cars.json");
const Car = require("../models/Car");

const url =
  "mongodb+srv://niklas:nodehill@cluster0.yffxj.mongodb.net/carWebshop?retryWrites=true&w=majority";
const params = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(url, params)
  .then(() => {
    console.log("Connected to database");
    cars.forEach((car) => {
      Car.findOne({ vin: car.vin }, (err, matchedCar) => {
        if (err) console.error(err);
        if (matchedCar) {
          console.log(`Car with vin: ${matchedCar.vin} already exists`);
        } else {
          let newCar = new Car(car);
          newCar.save((err) => {
            if (err) {
              console.error("An error occured: ", err);
            } else {
              console.log(`The car with vin: ${car.vin} was added to the DB`);
            }
          });
        }
      });
    });
  })
  .catch((err) =>
    console.error(`An error ocurred connecting to the database. \n${err}`)
  );

setTimeout(() => {
  mongoose.disconnect();
}, 3000);
