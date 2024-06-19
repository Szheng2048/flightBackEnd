const express = require('express')
const router = express.Router()
const {checkIsUndefinedFunc} = require("./helpers/checkIsUndefined")
const {checkIsEmptyFunc} = require("./helpers/checkisEmpty")
const {
    checkIsEmailFunc,
    checkIsStrongPasswordFunc,
    checkIsValidFirstNameFunc,
    checkIsValidLastNameFunc,
    checkIsValidUsername
} = require("./helpers/authMiddleware")
const {checkJwtToken} = require("../utils/jwtmiddleware")

const {signUp,signin,getUserById,updateUser} = require("./controller/userController")

router.get("/",(req,res)=>{
    res.json({message:"successfully connected to the user Router"})
})

router.post('/sign-up',
    checkIsUndefinedFunc,
    checkIsEmptyFunc,
    checkIsEmailFunc,
    checkIsStrongPasswordFunc,
    checkIsValidFirstNameFunc,
    checkIsValidLastNameFunc,
    checkIsValidUsername,
    signUp)

router.post("/sign-in",
    checkIsUndefinedFunc,
    checkIsEmptyFunc,
    signin)

router.get("/get-user-by-id/:id",
    checkJwtToken,
    getUserById)

router.put('/update-user', 
    checkJwtToken,
    updateUser)




module.exports = router