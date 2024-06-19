const {
    isEmail,
    isAlpha,
    isAlphanumeric, 
    isStrongPassword
} = require("../../utils/authMethods")

function checkIsEmailFunc(req,res,next){
    const {errorObj} = res.locals
    if(!isEmail(req.body.email)){
        errorObj.wrongEmailFormat = "Must be a valid email"
        console.log("hello")
    }
    next()
}

function checkIsStrongPasswordFunc(req,res,next){
    const {errorObj} = res.locals
    if(!isStrongPassword(req.body.password)){
        errorObj.validPassword = "Password must contain 8 chars, 1 uppercase,1 lowercase, and a nonalphanumeric symbol"
    }
    next()
}

function checkIsValidFirstNameFunc(req,res,next){
    const {errorObj} = res.locals
    if(!isAlpha(req.body.firstName)){
        errorObj.validFirstName = "First name must only consist of letters"
    }
    next()
}

function checkIsValidLastNameFunc(req,res,next){
    const {errorObj} =res.locals
    if(!isAlpha(req.body.lastName)){
        errorObj.validLastName = "LastName must consists of letters only"
    }
    next()
}

function checkIsValidUsername(req,res,next){
    const {errorObj} = res.locals
    if(!isAlphanumeric(req.body.username)){
        errorObj.validUsername = "This Username is not valid"
    }
    next()
}

module.exports = {
    checkIsEmailFunc,
    checkIsStrongPasswordFunc,
    checkIsValidFirstNameFunc,
    checkIsValidLastNameFunc,
    checkIsValidUsername
}