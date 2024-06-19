const User = require('../model/User')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const {isEmpty} = require("../../utils/authMethods")


async function signUp (req,res,next){
    const {username,email,firstName,lastName,password}= req.body
    const {errorObj} = res.locals
    if(!isEmpty(Object.keys(errorObj)))//grab everything in error obj and check if empty
    {
        return res.status(500).json({message:"error",errorObj})
    }
    try {
        const hash = await bcrypt.hash(password,10)
        const createdUser = new User({
            username,
            email,
            firstName,
            lastName,
            password : hash
        })
        await createdUser.save()
        res.json({message:"User succesfully created", data:createdUser})
    } catch (error) {
        res.status(500).json({message:"failed", error:error.message})
    }
}

async function signin(req,res,next){
    const {user, password} = req.body
    const {errorObj} = res.locals

    if(Object.keys(errorObj).length > 0){
        return res.status(500).json({message:"failure",payload:errorObj})
    }

    try {
        const foundUserByEmail = await User.findOne({email: user})
        const foundUserByUserName = await User.findOne({username : user})
        if(!foundUserByEmail && !foundUserByUserName){
            return res.status(400).json({message:"failed please check username or email and password"})
        } else {
            let comparedPassword
            if(foundUserByEmail){
                comparedPassword = await bcrypt.compare(password, foundUserByEmail.password)
            } else {
                comparedPassword = await bcrypt.compare(password, foundUserByUserName.password)
            }
            if(!comparedPassword){
                return res.json({message:"failed please check username or email and password"})
            } else {
                const jwtToken = jwt.sign(
                    {
                        email: foundUser.email,
                        username: foundUser.username,
                        id:foundUser._id
                    },
                    process.env.PRIVATE_JWT_KEY,
                    {
                        expiresIn: "1d"
                    }
                )
                res.json({
                    message: "loggedIn",
                    payload: jwtToken
                })
            }
        }
    } catch (error) {
        res.json({message:"error",error:error.message})
    }
}

async function getUserById(req,res,){
    const id = req.params.id
    try {
        const foundUser = await User.findById(id)
        if(!foundUser){
            res.status(400).json({message:"no user found"})
        } else {
            res.json({message:"found user", payload:foundUser})
        }
    } catch (error) {
        res.json({message:"error",error:error.message})
    }
}

async function updateUser(req,res){
    try {
        const incomingDate = req.body
        const {id} = res.locals.decodedJwt
        const updatedUser = await User.findByIdAndUpdate(id, incomingDate, {new:true})
        res.json({message: "user updated", payload:updatedUser})
    } catch (error) {
        res.status(500).json({message:failure, error:error.message})
    }
}

module.exports = {
    signUp,
    signin,
    getUserById,
    updateUser
}