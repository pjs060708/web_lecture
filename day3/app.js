// // 구형
// // var: ★절대 사용하지 말것!!!★
// var age = 17;

// // 신형
// // let: 재할당, 재선언 가능
// let cat_age = 21;
// // const: 상수의 재할당, 재선언 불가능
// const cat_name = "jibox";

let global = "전역";

if(global === "전역"){
    let global = "지역";
    console.log(global);
}

console.log(global);

const number = 20;
const name = `yeji's age is ${number}`;

console.log(name);

// null
// nudefined
// NaN

// 참조 데이터 타입
const num1 = 1;
const num2 = 2;
const num3 = 3;

const arr = [1, 1, 0, 0, 3];
arr[0] = 10;

console.log(arr);

const student = {
    name: "junseo",
    age: 17
};

console.log(student["name"]);
console.log(student.name);

const studentMap = new Map();
studentMap.set("name", "junseo")

console.log(studentMap)

const setArr = new Set();
setArr.add(1);

console.log(setArr);

// 연산자
// 산술, 증감, 대입, 비교, 논리 (비트, Nullish)

// 산술(+, -, *, /, %, **)
// a/b => 몫
// a%b => 나머지

// 증감(++, --)
let age = 10;

age += 1;
age++;

//비교 연산자
// <, >, <=, >=

// ==: 단순 비교, ===: 자료형까지 비교
// !=

// 논리연산자
// AND => &&, OR => ||, NOT => !

// 삼항
// 조건 ? 참일때 실행 결과 : 거짓일때 실행 결과

const result = 2<3 ? "참!" : "거짓";
console.log(result);

// 대입 연산자
// &&=
// //=

const nums = [10, 20];
function sum(a, b){
    return a+b;
};

console.log(sum(nums[0], nums[1]));
console.log(sum(...nums))

console.log(...arr);

if(arr === 10){
    // 참일 때 실행
}else if(arr[0]===1){
    // 두번쨰 조건이 참일 때 실행
}else{
    // 거짓일 때 실행
}

switch(arr[0]){
    case 10:
        console.log("10이 맞습니다.")
        break; // break를 안 적으면 전부 출력
    case 1:
        console.log("1이 맞습니다.")
        break;
    default:
        console.log("아무것도 아닙니다.")
        break;
}

for(let i=0; i<10; i++){
    console.log(i);
}

let j=0;
for(; j<10; j++){
    console.log(j);
}

let k=0;
for(; k<10;){
    console.log(k++);
}