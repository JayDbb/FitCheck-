import User from "./model";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  const { username, email, password, accessToken } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    const token = jwt.sign(user.username, process.env.TOKEN_SECRET, { expiresIn: "7d" }, accessToken);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

const getUser = async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

const followUser = async (req, res) => {
  const { username, following } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.following.includes(following)) {
      return res.status(400).json({ message: "Already following ${user.username || 'this user'}" });
    }

    user.following.push(following);
    await user.save();

    res.status(200).json({ message: "User followed successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error following user", error });
  }
};

const unfollowUser = async (req, res) => {
  const { username, following } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.following = user.following.filter((f) => f !== following);
  await user.save();

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getUser,
  followUser,
  unfollowUser,
};
