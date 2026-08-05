const jwt = require("jsonwebtoken")

const createToken = ({email,fullName}) =>{

    const payLoad = {
        name:fullName.firstName + fullName.lastName,
    email,
    }

    const token = jwt.sign(payLoad, process.env.JWT_SECRET_KEY)
    return token
}

const validateToken = (token) => {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return user
}

module.exports = { createToken, validateToken }