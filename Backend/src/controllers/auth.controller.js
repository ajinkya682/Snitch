import userModel from "../models/user.model.js";
import CONFIG from "../config/config.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { email, contact, password, fullname } = req.body;

  try {
    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (isUserAlreadyExist) {
      return res
        .status(400)
        .json({ message: "User with this email or contact already exists" });
    }

    const user = await userModel.create({
      email,
      contact,
      password,
      fullname,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      CONFIG.JWT_SECRET,
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export default {
  register,
};
