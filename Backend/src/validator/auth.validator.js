import { body, validationResult } from "express-validator";
import userModel from "../models/user.model.js";

export const validateRegisterUser = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail()
    .custom(async (email) => {
      const user = await userModel.findOne({ email });
      if (user) {
        throw new Error("Email already exists");
      }
    }),

  body("contact")
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage("Contact must be exactly 10 digits"),

  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number"),

  body("fullname")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Fullname must be at least 3 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Fullname must contain only letters"),

  body("role").optional().isIn(["buyer", "seller"]).withMessage("Invalid role"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];
