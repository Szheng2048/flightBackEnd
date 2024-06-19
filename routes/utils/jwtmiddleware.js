const jwt = require("jsonwebtoken")
async function checkJwtToken(req,res,next){
    try {
        if(req.headers && req.headers.authorization){
            //do logic
            const jwtToken = req.headers.authorization.slice(7)
            const decodedJwt = jwt.verify(jwtToken, process.env.PRIVATE_JWT_KEY)
            res.json({message:"headers", payload: decodedJwt})
        } else {
            res.json({message:"no header found"})
        }
    } catch (error) {
        res.json({message:"failure", error:error.message})
    }
}

module.exports = {checkJwtToken}
