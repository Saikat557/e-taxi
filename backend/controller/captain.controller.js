const {
  createCaptain,
  findCaptainByPhoneAndMatchPassword,
} = require("../services/captain.service");

const jwt = require("jsonwebtoken")

const { validationResult } = require("express-validator");
const { createToken } = require("../services/jwt.service");

const signupController = async (req, res) => {
  const result = validationResult(req);

  if (result["errors"].length > 0) {
    return res.status(400).json({ error: result["errors"] });
  }

  const { name, dob, licenseNumber, phoneNumber, vehicle, password } = req.body;

  if (!name || !dob || !licenseNumber || !phoneNumber || !vehicle || !password)
    return res.status(400).json({ message: "all fields required" });

  try {
    const captain = await createCaptain(
      name,
      dob,
      licenseNumber,
      phoneNumber,
      vehicle,
      password,
    );

    const token = jwt.sign({
        name,
        id:captain._id,
    },process.env.JWT_SECRET_KEY)

    return res
      .status(201)
      .json({ message: "captain created successfully", captain,token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const loginController = async (req, res) => {
  const result = validationResult(req);

  if (result["errors"].length > 0) {
    return res.status(400).json({ error: result["errors"] });
  }

  const { phoneNumber, password } = req.body;

  if (!phoneNumber || !password) {
    return res.status(400).json({ message: "all fields required" });
  }

  try {
    const captain = await findCaptainByPhoneAndMatchPassword(phoneNumber, password);
    const token = jwt.sign({
        name:captain.name,
        phoneNumber:captain.phoneNumber,
        id:captain._id
    },process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      message: "captain logged in successfully",
      token,
      captain,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const profileController = (req,res)=>{
    const captain = req.captain

    res.status(200).json({captain})
}

module.exports = { signupController, loginController , profileController};
