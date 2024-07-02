const express = require("express")
const router = express.Router()

const {
    getFlight
} = require("./controller/flightController")

router.get('/',(req,res)=>{
    res.json({message:"successfully connected to flight router"})
})

router.get("/get-flights",getFlight)

module.exports = router