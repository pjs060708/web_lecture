// 구문법 모든 사이트에서 돌아간다.
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("메인 화면");
});

app.get("/home", (req, res) => {
  res.send("home");
});

app.get("/userInfo", (req, res) => {
  res.send({ name: "js", age: 17 });
});

app.listen(3000, () => {
  console.log("Server is Rinning!!!!!!!");
});
