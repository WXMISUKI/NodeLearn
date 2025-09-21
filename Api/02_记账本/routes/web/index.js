var express = require("express");
var router = express.Router();

//导入 moment
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");

// 记账本列表
router.get("/", function (req, res, next) {
  res.redirect("/account");
});
router.get("/account", function (req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get("accounts").value();
  AccountModel.find()
    .sort({ time: -1 })
    .exec()
    .then((accounts) => {
      console.log(accounts);

      res.render("list", { accounts: accounts, moment: moment });
    })
    .catch((err) => {
      res.status(500).send("获取数据失败: " + err.message);
    });
  // res.render("list", { accounts: accounts });
});
// 添加记录
router.get("/account/create", function (req, res, next) {
  res.render("create");
});
// 新增记录
router.post("/account", function (req, res, next) {
  console.log("接收到的请求体数据:", req.body);

  // 检查必填字段
  if (!req.body.title || !req.body.time || !req.body.account) {
    console.log("缺少必要字段");
    return res.status(400).send("缺少必要字段: title, time, account");
  }

  // 获取请求体数据
  const accountData = {
    ...req.body,
    // 时间格式转换,将string 转成date
    time: moment(req.body.time).toDate(),
    // 确保金额是数字类型
    account: parseFloat(req.body.account),
    // 确保类型是数字类型
    type: parseInt(req.body.type),
  };

  console.log("处理后的数据:", accountData);

  AccountModel.create(accountData)
    .then(() => {
      console.log("数据插入成功");
      res.render("success", { msg: "添加成功哦！~", url: "/account" });
    })
    .catch((err) => {
      console.error("插入数据失败:", err);
      res.status(500).send("插入数据失败: " + err.message);
    });
});
//删除记录
router.get("/account/:id", (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  AccountModel.deleteOne({ _id: id }).catch((err) => {
    console.error("删除失败:", err);
    res.status(500).send("删除失败: " + err.message);
  });
  // db.get("accounts").remove({ id: id }).write();
  //提醒
  res.render("success", { msg: "删除成功~~~", url: "/account" });
});
module.exports = router;
