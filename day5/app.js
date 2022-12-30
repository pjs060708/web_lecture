// // HTML 문서에 직접 접근할 수 있게!

// const submitBtn = document.getElementById("submit-btn");
// console.log(submitBtn.style);

// const hiddenBtn = document.getElementsByClassName("hidden");

// const [divA, divB, divC] = document.getElementsByTagName("div");
// console.log(divA);

// const radioInputs = document.getElementsByName("animel");
// console.log(radioInputs);

// const firstDiv = document.querySelector("div");
// console.log(firstDiv);

// const [div1, div2, div3] = document.querySelectorAll("div");

// div1.innerText = "영역 1";

// div1.classList.toggle("color-red");

// const newDiv = document.createElement("div");
// newDiv.innerText = "추가된 영역!";
// newDiv.className = "color-red";

// const form = document.querySelector("form");
// form.appendChild(newDiv);

// div1.innerText = "영역 1";

// div1.classList.toggle("color-red");

// // 이벤트

// // 키보드 => 뭔가를 입력했을떄
// // 마우스 => 클릭했을때
// // form => 제출되었을때

// const clickHandLer = () => console.log("클릭됨!");
// div1.addEventListener("click", clickHandLer);

const LoginForm = document.querySelector(".login-form form");
const LoginInput = document.querySelector(".login-form input");
const greetingH1 = document.querySelector("greeting");

const onLoginBtnClick = (event) => {
  event.preventDefault();
  const username = LoginInput.value;
  if (username === "") {
    alert("값을 입력해주세요");
  } else if (username.length > 15) {
    alert("15자 이내로 작성해주세요");
  } else {
    greetingH1.innerText = `${username}님, 환영합니다.`;
    LoginForm.classList.add("hidden");
    greetingH1.classList.remove("hidden");
  }
  console.log();
};
LoginForm.addEventListener("submit", onLoginBtnClick);
