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


// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다

const orderSandwich = (type = 'basic') => 
    type === 'vegan' ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/



// age의 값이 18세 이상이면 adulttype의 값은 "성인"
// age의 값이 18세 미만이면 adulttype의 값은 "미성년자"

const age = 20;
const adulttype = age >=18 ? "성인" : "미성년자"
console.log("🚀 ~ adulttype:", adulttype)


/*if (0) {
  console.log("True입니다.");
  } else {
  console.log("False입니다.");
  }

  const userInput = "text";
  if (userInput) {
    alert("입력해주셔서 감사합니다.");
    } else {
      alert("입력값을 작성해주세요.");
    }*/

const daysofweek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일"
];
console.log("🚀 ~ daysofweek:", daysofweek);
console.log("오늘의 요일:", daysofweek[0])


const idol = ["장원영","안유진","리즈","레이","가을","이서"];
console.log("🚀 ~ idol:", idol);
console.log("좋아하는 멤버 : ",idol[1]);
console.log("마지막 멤버 : ",idol[idol.length -1]);

