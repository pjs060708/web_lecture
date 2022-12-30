// function f1() {
//   console.log("f1");
//   f2();
// }

// function f2() {
//   console.log("f2");
// }
// function f3() {
//   // 외부 API / 유저의 입력을 기다려야 한다
//   // 5초 뒤에 실행된다거나
//   // ????????????????
//   console.log("f3");
// }
// function f4() {
//   console.log("f4");
// }
// function f5() {
//   console.log("f5");
// }
// function f6() {
//   console.log("f6");
// }

// f1();
// f3(); // DB에서 데이터를 가져와야하는데 인터넷 연결이 끊어짐
// f4();
// f5();
// f6();

// // js에서 비동기 구현
// // 1. callback(잘 안 쓰임)
// // 2. Promise (가장 잘 쓰임(ES6 표준 채택))
// // 3. Async & Await (가장 최근에 나와서 일부 브라우저가 지원을 안함(ES8))

// // 현재 작음을 비동기적으로 처리하고 있는 상황
// // 1. 작업중 (pending) => 성공및 실패 여부가 결정되지 않은, promise 객체가 실행중
// // 2. 작업 완료 & 성공 => 작업 완료! 성공했다~ + 값(resolve)
// // 3. 작업 완료 & 실패 => 작업 완료! 실패... + 왜 실패? 에러 객체(reject)

// // resolve, reject는 작업을 끝내기 때문에 return이 필요없다

// // 예시
// const p1 = new Promise(function (resolve, reject) {
//   // 어렵고 복잡한 작업

//   // 성공했을 떄
//   resolve("p1 객체가 작업이 성공적으로 완료됨");

//   // 실패했을 떄
//   reject(new Error("p1 처리 중 에러 발생"));
// });

// const p1 = new Promise(function (resolve, reject) {
//   // 어렵고 복잡한 작업
//   setTimeout(() => resolve("p1 객체가 작업이 성공적으로 완료됨"), 3000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve("p1 객체가 작업이 성공적으로 완료됨"), 4000);
// });

// // const p3 = new Promise((reject) => {
// //   setTimeout(() => reject(new Error("p3 객체 작업 에러 발생")), 1000);
// // });

// // 작업이 완료된 후 어떻게 처리해줄지 (소비자~)

// console.time("test");

// // 모든 promise 객체(p1, p2)가 완료되었을 때
// Promise.all([p1, p2]).then(([resolve1, resolve2]) => {
//   console.log(resolve1, resolve2);
//   console.timeEnd("test");
// });

// // then, catch, finally를 각각 사용해보기
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("결과값"), 1000);
//   setTimeout(() => reject(new Error("에러 발생!"), 1000));
// })
//   .finally(() => alert("promise가 준비됨"))
//   .then(
//     (result) => alert(result),
//     (error) => alert(error)
//   )
//   .catch((error) => alert(error));

// // 체이닝 작업
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   });
