const {isAlpha,isEmail,isAlphanumeric,isStrongPassword} = require("validator")

/**
 * Checks if a given string is empty.
 */
function isEmptyf(str) {
    return str.length === 0
}

/**
 * Checks if a given string meets the criteria of a strong password.
 */
function isStrongPasswordf(password) {
    return isStrongPassword(password)
    // Implementation here
}


function isEmailf(email) {
    return isEmail(email)
}



function isAlphaf(str) {
    return isAlpha(str)
}
function isAlphanumericf(str) {
    // Implementation here
    return isAlphanumeric(str)
}

module.exports = {
    isEmailf,
    isEmptyf,
    isAlphaf,
    isAlphanumericf, 
    isStrongPasswordf
}