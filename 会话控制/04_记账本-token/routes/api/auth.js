var express = require("express");
var router = express.Router();
// 导入用户模型
const UserModel = require("../../models/UserModel");
const md5 = require("md5");
// 导入密钥配置
const { secretKey } = require("../../config/config");
// 导入jwt
const jwt = require("jsonwebtoken");
// 登录
router.get("/login", function (req, res) {
  // 响应html内容 即在view/auth里面找到login.ejs
  res.render("auth/login");
});

// 登录
router.post("/login", function (req, res) {
  // 获取用户名密码
  let { username, password } = req.body;
  // 查询数据库
  UserModel.findOne({ username, password: md5(password) })
    .then(function (result) {
      // 如果查询结果有值，则说明用户名密码正确
      if (result) {
        console.log(result);
        // 创建当前用户的token
        const token = jwt.sign(
          { username: result.username, _id: result._id },
          secretKey,
          {
            expiresIn: 60 * 60 * 24 * 7,
          }
        );
        // 响应json
        res.json({
          code: "0000",
          message: "登录成功",
          data: token,
        });
      } else {
        return res.json({
          code: "2002",
          message: "用户名活密码错误",
          data: null,
        });
      }
    })
    .catch(function (err) {
      // 登录失败
      res.json({
        code: "2001",
        message: "数据库读取失败",
        data: null,
      });
      return;
    });
});

// 退出登录
router.get("/loginout", function (req, res) {
  req.session.destroy(function (err) {
    // res.redirect("/login");
    res.render("success", { msg: "退出成功！", url: "/login" });
  });
});
module.exports = router;
