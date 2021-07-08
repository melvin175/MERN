const registerUser = async (req, res) => {
  const { username, email, password, pic } = req.body;

  res.json({
    username,
    email,
    password,
    pic,
  });
};

module.exports = { registerUser };
