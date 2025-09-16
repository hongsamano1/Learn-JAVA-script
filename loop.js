const numbers = [254,43,96,33];

for(let i=0; i<10; i++) {
console.log(i,`번째 실행`)
  console.log
  (`========================`);
  }



//for(let i=0; i<11; i++) {
  //console.log(`${i}번째 실행`);
  //console.log
  //(`========================`);
//}

for(let i=0; i < numbers.length;i++) {
  //반복실행 로직
  console.log(`❤ ${i}:${numbers[i]}`);
}
console.log
  (`========================`);
// foreach : 향상된 for문

numbers.forEach((value, index)=>{
  console.log(`❤ ${index}:${value}`)
})





//console.log(`❤`, numbers[0]);
//console.log(`❤`, numbers[1]);
//console.log(`❤`, numbers[2]);
//console.log(`❤`, numbers[3]);
//}




const ingredientList = ["🥓","🥩","🍅","🥯"];
let sandwich = "🍔";

// 각 재료들을 샌드위치에 추가
ingredientList.forEach((item)=>{
  console.log("🚀 ~ item:", item)
  //sandwich = sandwich + item
  console.log("🚀 ~ sandwich:", sandwich)
  sandwich += item
})
console.log("🚀 ~ sandwich:", sandwich)

// 자주 사용하는 배열함수
const students = ["alice","bob","david"]

// map : 기존 배열을 조작하여 새로운 배열을 리턴
const upperStudents = students.map((students) => {
  return students.toUpperCase();
})


// filter : 배열안의 요소들 중 조건을 만족하는 배열의 요소들로 새로운 배열을 리턴(조건식을 리턴 구문에 작성)

//글자수가 4글자 이상인 요소들만 필터링


//find : 배열안의 요소들 중 조건을 만족하는 "첫번째 요소를 리턴"
//const findStudent = students,
//find((student) => student, length >= 4);
//console.log("🚀 ~ findStudent:", findStudent)

//some, every : (boolean 타입 리턴)
//some : 배열의 요소 중 하나라도 조건을 만족하면  true 리턴, 아니면 false 리턴
//every : 배열의 요소들의 모든 조건을 만족하면 true 리턴, 아니면 false 리턴





