// 导入jwt
const jwt = require("jsonwebtoken");
// 创建token 参数依次是用户数据，加密字符串，配置对象
// let token = jwt.sign(
//   {
//     username: "admin",
//   },
//   "secret",
//   {
//     expiresIn: 60, //单位是秒 、
//   }
// );
// console.log(token);

// 校验token
let t =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzU4NDM3ODI1LCJleHAiOjE3NTg0Mzc4ODV9.uwK95GfWlK619wLQUZNYUOpp3F0AFsYg6Fo86Ay_dpU";
jwt.verify(t, "secret", (err, decoded) => {
  if (err) {
    console.log("校验失败");
    return;
  } else {
    console.log(decoded);
  }
});
