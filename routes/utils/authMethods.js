const {isEmpty,isAlpha,isEmail,isAlphanumeric,isStrongPassword} = require("validator")

/**
 * Checks if a given string is empty.
 */
function isEmpty(str) {
    return isEmpty(str)
}

/**
 * Checks if a given string meets the criteria of a strong password.
 */
function isStrongPassword(password) {
    return isStrongPassword(password)
    // Implementation here
}


function isEmail(email) {
    return isEmail(email)
}



function isAlpha(str) {
    return isAlpha(str)
}
function isAlphanumeric(str) {
    // Implementation here
    return isAlphanumeric(str)
}

module.exports = {
    isEmail,
    isEmpty,
    isAlpha,
    isAlphanumeric, 
    isStrongPassword
}