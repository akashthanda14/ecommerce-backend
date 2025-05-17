import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwt.js";

export const register = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) return { status: 400, body: { message: "User already exists" } };

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  return { status: 201, body: { message: "User created", userId: user._id } };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) return { status: 400, body: { message: "Invalid credentials" } };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { status: 400, body: { message: "Invalid credentials" } };

  const token = generateToken(user._id);
  return { status: 200, body: { token } };
};
