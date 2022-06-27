// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const mongoose = require("mongoose");
  const Drone = require("../models/Drone.model");

  mongoose
  .connect("mongodb://0.0.0.0:27017/lab-express-drones") // posible error
  .then((response) => {
    console.log("conectados a la Base de Datos");

    return Drone.insertMany(drones);
  })
  .then((response) => {
    console.log("Peliculas agregadas correctamente");
    // hacer la desconeccion
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });