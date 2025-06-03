// authController.js
const login = (req, res) => {
  // Xử lý logic đăng nhập
  res.json({ token: "generated-jwt-token" });
};
module.exports = { login };
