const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
    flights:{
        type: Object,
        require:true
    },
    createdAt: {
        type: Date,
        expires:"4d",
        default:Date.now
    }
})
module.exports = mongoose.model("flight", flightSchema)