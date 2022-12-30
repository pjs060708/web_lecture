// 구문법 모든 사이트에서 돌아간다.
const express = require("express");

const app = express();

app.get("/home", () => {
  console.log("홈으로 들어왔어요!");
});

app.listen(3000, () => {
  console.log("Server is Rinning!!!!!!!");
});
