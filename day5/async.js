// 성공했다는 가정하에 사용
async function f1() {
  // async 안에서 await 사용가능 (~ 받아올때까지 기다린다)
  let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료"), 1000);
  });
  let result = await p;
  alert(result);
}

f1();
