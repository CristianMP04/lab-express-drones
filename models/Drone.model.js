// Iteration #1
const mongoose = require("mongoose");

const dronSchema = new mongoose.Schema({
    name: {
        type: String
    },

    propellers: {
        type: Number
    },

    maxSpeed: {
        type: Number
    }

});

const Drone = mongoose.model("Drone", dronSchema);

module.exports = Drone;