const username = "홍길동";// const는 상수(변할수 없는 값)
console.log("🚀 ~ username:", username)
let usermbti = "ENFP";// let은 변수(변할 수 있는 값)
console.log("🚀 ~ usermbti:", usermbti)

usermbti = "ISTJ" // 변경된 usermbti
console.log("🚀 ~ usermbti:", usermbti)

//username = "장동건" // 변경 불가라 오류 남
//console.log("🚀 ~ username:", username)

// 데이터 타입
const num = 12;
const str = "텍스트";
const bool = true;
//const empty = undefined;
let empty; //null


console.log("num", typeof num)
console.log("str", typeof str)
console.log("bool", typeof bool)
console.log("🚀 ~ empty:", empty)

//console.log("empty", typeof empty)


/** null 과 undefined 의 차이점
 * null은 개발자가 의도를 가지고 값을 비움
 * undefined는 개발자 의도와 상관없이 값이 없는 상태
 **/


/**함수 정의 선언
function helloWorld() {
  console.log('Nice Day!')
}

function greeting() {
  console.log("반갑습니다."+ username + "님")
}



//함수 호출/실행
helloWorld()

greeting()**/

//백틱
console.log("어서오세요, "+ username+"님, 당신의 MBTI는 "+ usermbti +"이군요.");

// 함수의 인자와 매개변수
const sum = (num1, num2) => { 
//파라메터
//실행할 로직
const result = num1 + num2 ;
console.log("Return 끝!!!!!")
return result;
//console.log("🚀 ~ sum ~ result:", result)
};

const add = sum(11, 22);
console.log("🚀 ~ add:", add)

const double = (num) => {
  return num * 2
}
const doubleresult = double(add)
console.log("🚀 ~ doubleresult:", doubleresult)


// 사용자 이름을 받아서 "반갑습니다. 000님"라는 텍스트를 consol탭에 출력하는 기능 만들기
// sayhello 라는 함수 만들기

function sayhello(){
console.log("반갑습니다."+username+"님")};
sayhello();

const sayhello1 = (name)=> {
    console.log(`반갑습니다. ${name}님`);
    console.log("🚀 ~ sayhello1 ~ name:", name)
};

sayhello1(`김길동`);

//조건문
if(true) {
  //조건식이 true일 경우 실행할 코드
console.log( "조건문 실행")
}

const score = 80;
if(score >= 60) {
  //조건식이 true일 경우 실행할 코드
console.log( "합격")
} else {
console.log("불합격")
}

console.log("if문 종료!");