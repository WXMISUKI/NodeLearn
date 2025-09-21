// 导入jwt
const jwt = require("jsonwebtoken");
// 导入密钥配置
const { secretKey } = require("../config/config");
module.exports = (req, res, next) => {
  // 获取token
  let token = req.get("token");
  if (!token) {
    return res.json({
      code: "2003",
      data: null,
      msg: "token不存在~",
    });
  }
  // 验证token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.json({
        code: "2004",
        data: null,
        msg: "token校验失败~",
      });
    }
    // 保存用户信息
    req.user = decoded;
    // 校验成功
    next();
  });
};
