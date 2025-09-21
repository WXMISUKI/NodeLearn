var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// 导入数据库连接模块
const db = require("./db/db");
const AccountModel = require("./models/AccountModel");

var indexRouter = require("./routes/web/index");
// 导入account路由文件
var accountRouter = require("./routes/api/account");
var app = express();

// 连接数据库
db(
  () => {
    console.log("数据库连接成功");
  },
  () => {
    console.log("数据库连接失败");
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", accountRouter);

// 中间件，匹配不到的路径统一响应404
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
