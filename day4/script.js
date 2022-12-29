// const name = "js";
// const age = 17;
// console.log(typeof name);

// console.log(typeof (age));

// const arr = [1, 2, 3];

// console.log(typeof arr);

// const tmp = null; // type => object

// console.log(typeof tmp);

// console.log(!!null);

// // null은 의도적으로 비어있는 값 => 0으로 취급
// // undefined => 의도한게 아닌 실수등으로 비어있는 값 => NaN으로 취급

// let tmp;
// console.log(tmp);

// console.log(!undefined === !null);

// let tmp = 11 + "js";
// console.log(tmp);

// console.log(!!"js"); // true => 문자가 있음 => "js"는 기본적으로 true
// console.log(!!""); // false => 아무런 문자가 없음 => ""는 기본적으로 false

// // isNaN => 부정조건문

// console.log(isNaN(1)); // isNaN => false : 숫자라는 뜻
// console.log(isNaN(11 + "js")); // isNaN => true (자바스크립트가 인정한 오류(고치지 못함))

// // 이를 방지하기 위해 Number를 추가
// console.log(Number.isNaN(1));
// console.log(Number.isNaN(11 + "js"));

// function example() {
//   return condition1
//     ? value1
//     : condition2
//     ? value2
//     : condition3
//     ? value3
//     : value4;
// }

// // 조건식 ? 참일때의 값 : 거짓일때의 값
// const example2 = condition1 ? (a === 0 ? "zero" : "positive") : "negative";

// function greeting(isLogin) {
//   const name = isLogin ? getName() : "이름 없음";

//   return `안녕하세요 ${name}`;
// }

// function greeting2(isLogin) {
//   is(isLogin){
//     return `안녕하세요 ${getName()}`
// }
//   return `안녕하세요 이름없음`;
// }

// // 1번째 시도
// if (`string`.length > 0) {
//   console.log(`빈 문자열이 아님`);
// }

// if (!isNaN(10)) {
//   console.log(`숫자가 맞음`);
// }

// const bool = true;
// if (bool === true) {
//   console.log(`참`);
// }

// // 2번째 시도
// if (`string`.length) {
//   console.log(`빈 문자열이 아님`);
// }

// if (10) {
//   console.log(`숫자가 맞음`);
// }

// const bool2 = true;
// if (bool2) {
//   console.log(`참`);
// }

// // 1번째 시도와 2번째 시도의 결과가 같음

// // js의 특이점 (참 같은 값)이다.
// // https://developer.mozilla.org/ko/docs/Glossary/Truthy => 참 같은 값 참고

// // js의 특이점 (거짓같은 값)이다.
// // https://developer.mozilla.org/ko/docs/Glossary/Falsy => 거짓같은 값 참고

// function printName(name) {
//   if (name === undefined || name === null) {
//     console.log("아무것도 없네요");
//   } else {
//     console.log(`반갑습니다 ${name}님!`);
//   }
// }

// console.log(true && true && "과연?"); // "과연" 출력
// console.log(true && false && "과연?"); // false 출력

// console.log(false || false || "이번에는?"); // "이번에는" 출력
// console.log(true || false || "이번에는?"); // true 출력

// function callAPI() {
//   // ...................
//   const deta = "_______";
//   //   console.log(true && true && "과연?");
//   //   console.log(true && false && "과연?");
//   //   console.log(false || false || "이번에는?");
//   //   console.log(true || false || "이번에는?");
//   //   return deta ? deta : "fetching....";
//   return deta || "fetching....";
// }

// // 유저가 로그인을 했고! 유저의 이름이 유의미하다면! 이름을 표시 아니면 '이름없음'
// const user = {
//   name: "js",
// };
// const isLogin = true;

// // 더러운 코드 ↓
// function getActiveUsername(isLogin, user) {
//   if (isLogin) {
//     if (user) {
//       if (user.name) {
//         console.log(user.name);
//       } else {
//         console.log("이름이 없는 상태");
//       }
//     } else {
//       throw "로그인 안한 유저가 접속함";
//     }
//   }
//   return { user_name, user_age };
// }

// // function 함수이름 (매개변수, ...){
// //   수행할 코드
// // }

// getActiveUsername(isLoginined, customer);

// // 클린 코드 ↓
// if (isLogin && user) {
//   console.log(user.name || "이름없음");
// }

// if (Number.isNaN(3)) {
//   console.log("숫자입니다.");
// }

// const arr = [1, 2, 3];

// const objArr = { 0: 1, 1: 2, 2: 3 };

// console.log(arr);
// console.log(objArr);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(objArr));

// console.log(arr.length);

// arr.length = 10; // [1, 2, 3, , , , , , , ]
// console.log(arr.length);
// console.log(arr);

// // const confirmBtn = document.getElementsByTagName("button")[0];
// // const canceLBtn = document.getElementsByTagName("button")[1];
// // const resetBtn = document.getElementsByTagName("button")[2];

// // 배열을 이용해서 위의 코드를 간편하게 나눌 수 있다.
// const [confirmBtn, canceLBtn, resetBtn] =
//   document.getElementsByTagName("button");

// // 얕은 복사 ↓ (주소값을 복사하여 둘중 하나만 바꾸어도 다른 한쪽이 영향을 받음)
// const originArray = ["123", "456", "789"];

// const newArray = originArray;

// originArray.push(10);
// originArray.push(20);
// originArray.push(30);

// console.log(originArray);
// console.log(newArray);

// // 유사 배열 객체

// const arr1 = ["hello", "javascript"];
// console.log(arr1);

// const objLikeArr = { 0: "hello", 1: "havascript", length: 2 };
// const converted = Array.from(objLikeArr);
// console.log(objLikeArr);
// console.log(converted);

// const person = {
//   eyes: 2,
//   speak: () => {
//     console.log("말말");
//   },
// };

// // 화상표 함수
// // 매개변수 => { 실행할 문장 }
// const sum = (a, b) => a + b;

// // 화살표 함수 어디에 쓰나
// // 함수 내에 콜백할수로 건내줄때 많이 사용
// const array1 = ["a", "b", "c"];

// // 옛날에 표현: for문으로 출력 ↓
// for (let index = 0; index < array1.length; index++) {
//   const element = array1[index];
//   console.log(element);
// }

// // 현재 표현: 향상된 for문으로 출력 ↓
// array1.forEach((arrItem) => console.log(arrItem));

// // arrow function의 단점
// const student = {
//   age: 17,
//   sayAge: () => {
//     console.log(this); // 자기 자신 참조 불가
//     console.log(this.age);
//   },
// };

// // 올바르도록 수정한 코드 ↓
// const student = {
//   age: 17,
//   sayAge: function () {
//     console.log(this);
//     console.log(this.age);
//   },
// };

// student.sayAge();

// ["학생 a", "학생 b", "학생 c"] => map() vs forEach)()

// // arrow function의 장점 ↓
// // 화살표 함수를 사용 안했을때
// const students = array1.map((name) => {
//   // name이 아닌 숫자로 하였을때는 산술 연산자가 들어간다
//   return "학생" + name;
// });
// // 화살표 함수를 사용했을때
// const students = array1.map((name) => "학생" + name);

// console.log(students);

// function temp() {
//   return 1 + 2;
// }

// console.log(tamp(1, 2, 3, 4, 5));

// // 추가 문제
// // 1000 초가하는 숫자 뒤에 원을 붙여 출력하기(2줄로 가능 #나중에 추가적인 공부를 해서 2줄로 줄이도록 도전)
// const price = ["2000", "1000", "3000", "5000", "4000"];
// for (let index = 0; index < price.length; index++) {
//   const element = price[index];
//   if (element > 1000) {
//     console.log(`${element}원`);
//   }
// }
