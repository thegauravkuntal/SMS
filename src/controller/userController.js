import User from "../model/userModel";

export const getUSers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

export const createUser = async (req, res) => {
  const { name, email, pasword } = req.body;
  if (!name || !email || !pasword) {
    res.json({ Message: "All Details Required" });
  }

  const user = new User(user);
  user.save();

  res.json({ user, message: "New user created successfully" });
};
