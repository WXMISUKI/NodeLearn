var express = require("express");
var router = express.Router();
// 导入用户模型
const UserModel = require("../../models/UserModel");
const md5 = require("md5");
// 注册
router.get("/register", function (req, res) {
  // 响应html内容 即在view/auth里面找到register.ejs
  res.render("auth/register");
});

// post表单注册
router.post("/register", function (req, res) {
  // 获取表单数据
  // console.log(req.body);

  // var username = req.body.username;
  // var password = req.body.password;
  UserModel.create({ ...req.body, password: md5(req.body.password) })
    .then(function (result) {
      // 创建成功
      // result是插入数据库的数据
      // console.log(result);
      // 创建用户后，跳转到登录页面
      res.render("success", { msg: "注册成功，请登录！", url: "/login" });
    })
    .catch(function (err) {
      // 创建失败
      // console.log(err);
      // 获取错误信息
      var message = err.message;
      // 跳转到注册页面
      res.status(500).send("注册失败" + message);
      return;
    });
  // 响应html内容 即在view/auth里面找到register.ejs
  // res.send("注册成功");
});

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
      if (result != null) {
        console.log(result);
        // 写入session
        req.session.username = result.username;
        // 存入id
        req.session._id = result._id;
        // 登录成功
        // 跳转到用户列表页面
        res.render("success", { msg: "登录成功！", url: "/account" });
      } else {
        return res.send("用户名或密码错误");
      }
    })
    .catch(function (err) {
      // 登录失败
      res.status(500).send("登录失败");
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
