module.exports = (req, res, next) => {
  // 判断是否登录 封装中间件解决
  if (!req.session.username) {
    return res.redirect("/login");
  }
  next();
};
