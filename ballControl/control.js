//////원 기준 좌표 찾기 부분

// 기준 박스
const box = document.querySelector("#box");
const circle = document.querySelector("#circle");
const moveValue = 50;

// 상대좌표
let relBoxTop = box.getBoundingClientRect().top;
let relBoxLeft = box.getBoundingClientRect().left;
let relBoxRight = box.getBoundingClientRect().right;
let relBoxBottom = box.getBoundingClientRect().bottom;

// console.log(relBoxLeft);
// console.log(relBoxTop);
circle.style.top.replace = relBoxTop + "px";
circle.style.left.replace = relBoxLeft + "px";

// 절대좌표
let absBoxTop = window.pageYOffset + box.getBoundingClientRect().top;
let absBoxLeft = window.pageXOffset + box.getBoundingClientRect().left;
// circle.style.top = absBoxTop + "px";
// circle.style.left = absBoxLeft + "px";

// 방향키 이벤트

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

// console.log(btn1);
// function btnI(num) {
//   const btn = document.querySelectorAll(".btn");
//   for (let i = 0; i < btn.length; i++) {
//     let btn = btn[i];
//     return btn;
//   }
// }
// console.log(btnI(num));

function Btn1KeyPress(e) {
  if (e.key == "ArrowUp") {
    Btn1Action();
  }
}

// 윗방향키
function Btn1Click() {
  Btn1Action();
}
function Btn1Action() {
  let relCircle = circle.getBoundingClientRect();
  let top;
  if (relCircle.y > relBoxTop) {
    top = relCircle.y - moveValue;
    circle.style.top = top + "px";
  }
}

// 왼쪽 방향키
function Btn2Click() {
  Btn2Action();
}
function Btn2Action() {
  let relCircle = circle.getBoundingClientRect();
  let left;
  if (relCircle.x > relBoxLeft) {
    left = relCircle.x - moveValue;
    circle.style.left = left + "px";
  }
}

// 아래방향키
function Btn3Click() {
  Btn3Action();
}
function Btn3Action() {
  let relCircle = circle.getBoundingClientRect();
  let circleWidth = relCircle.width;
  let bottom;
  if (relCircle.y <= relBoxBottom - circleWidth * 2) {
    bottom = relCircle.y + moveValue;
    circle.style.top = bottom + "px";
  }
}

// 오른쪽 방향키
function Btn4Click() {
  Btn4Action();
}
function Btn4Action() {
  let relCircle = circle.getBoundingClientRect();
  let circleWidth = relCircle.width; //원의 지름
  let right; // 이동할 값 넣어주는 곳
  if (relCircle.x < relBoxRight) {
    right = relCircle.x + moveValue;
    if (relCircle.x + moveValue + circleWidth > relBoxRight) {
      right = relBoxRight - moveValue;
    }
    circle.style.left = right + "px";
  }
}

btn1.addEventListener("click", Btn1Click);
btn1.addEventListener("keydown", Btn1KeyPress);
btn2.addEventListener("click", Btn2Click);
btn3.addEventListener("click", Btn3Click);
btn4.addEventListener("click", Btn4Click);
