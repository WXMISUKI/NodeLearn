const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "zs", { maxAge: 1000 * 60 * 60 * 24 * 7 }); //设置cookie，浏览器关闭后，cookie就销毁，除非设置了maxAge生命周期
  res.cookie("theme", "blue");
  res.send("首页");
});

// 删除cookie
app.get("/remove-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("删除成功");
});

// 获取cookie
app.get("/get-cookie", (req, res) => {
  console.log(req.cookies);
  res.send(`"欢迎您" ${req.cookies.username}`);
});
app.listen(3000);
