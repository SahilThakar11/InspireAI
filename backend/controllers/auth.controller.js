import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.utils.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address!";
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      errors.email = "An account with this email already exists.";
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (fullname.length < 3) {
      errors.fullname = "Fullname must be at least 3 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ error: errors });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullname,
      email,
      password: passwordHash,
    });

    if (user) {
      generateToken(user._id, res);
      await user.save();
      return res.status(201).json({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        membershipType: user.membershipType,
        credits: user.credits,
      });
    } else {
      return res.status(400).json({ error: "Invalid Server Error." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error: " + error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let errors = {};

    const user = await User.findOne({ email });
    if (!user) {
      errors.email = "User not found!";
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        errors.password = "Invalid credentials!";
      }
    }
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ error: errors });
    }

    generateToken(user._id, res);

    return res.status(200).json({
      message: "User logged in successfully!",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        membershipType: user.membershipType,
        credits: user.credits,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error: " + error });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful." });
  } catch (error) {
    console.error("error in logout: ", error);
    res.status(500).json({ error: "Internal server error: " + error });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("error in getMe: ", error.message);
    res.status(500).json({ error: "Internal server error: " + error });
  }
};
