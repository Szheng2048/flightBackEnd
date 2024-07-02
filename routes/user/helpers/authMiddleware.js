const {
    isEmailf,
    isAlphaf,
    isAlphanumericf, 
    isStrongPasswordf
} = require("../../utils/authMethods")

function checkIsEmailFunc(req,res,next){
    const {errorObj} = res.locals
    if(!isEmailf(req.body.email)){
        errorObj.wrongEmailFormat = "Must be a valid email"
    }
    next()
}

function checkIsStrongPasswordFunc(req,res,next){
    const {errorObj} = res.locals
    if(!isStrongPasswordf(req.body.password)){
        errorObj.validPassword = "Password must contain 8 chars, 1 uppercase,1 lowercase, and a nonalphanumeric symbol"
    }
    next()
}

function checkIsValidFirstNameFunc(req,res,next){
    const {errorObj} = res.locals
    if(!isAlphaf(req.body.firstName)){
        errorObj.validFirstName = "First name must only consist of letters"
    }
    next()
}

function checkIsValidLastNameFunc(req,res,next){
    const {errorObj} =res.locals
    if(!isAlphaf(req.body.lastName)){
        errorObj.validLastName = "LastName must consists of letters only"
    }
    next()
}

function checkIsValidUsername(req,res,next){
    const {errorObj} = res.locals
    if(!isAlphanumericf(req.body.username)){
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