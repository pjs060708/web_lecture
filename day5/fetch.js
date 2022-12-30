// // catch를 사용해서 오류 잡기
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((deta) => {
//     // deta를 응답받은 후의 로직
//   })
//   .then(() => {})
//   .then(() => {})
//   .catch((error) => alert(error.message));

// new Promise((resolve, reject) => {
//   throw new Error("에러 발생");
// })
//   .catch((err) => alert("에러를 처리하였습니다. 정상적으로 다시 실행합니다."))
//   .then(() => alert("다음 핸들러로 넘어왔습니다."));
