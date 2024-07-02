const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const userRouter = require("./routes/user/userRouter")
const flightRouter = require("./routes/flight/flightRouter")

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/user/", userRouter)
app.use("/flights/",flightRouter)


module.exports = app