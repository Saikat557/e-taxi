const captainModel = require("../models/captain.model")
const bcrypt = require('bcrypt')

const createCaptain = async (name, dob, licenseNumber, phoneNumber, vehicle, password) => {
    const hasCaptainAvailable = await captainModel.findOne({ phoneNumber })

    if (hasCaptainAvailable) {
        throw new Error("The captain is already available")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const captain = await captainModel.create({
        name,
        DOB: dob,
        licenseNumber,
        phoneNumber,
        vehicle,
        password: hashedPassword,
    })

    return captain
}

const findCaptainByPhoneAndMatchPassword = async (phoneNumber, password) => {

    
    const captain = await captainModel.findOne({ phoneNumber }).select("+password")


    if (!captain) {
        throw new Error("phone number or password does not match")
    }

    const isMatch = await bcrypt.compare(password, captain.password)
    

    if (!isMatch) {
        throw new Error("phone number or password does not match")
    }

    return captain
}

module.exports = { createCaptain, findCaptainByPhoneAndMatchPassword }