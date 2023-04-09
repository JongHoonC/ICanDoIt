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

// 절대좌표
let absBoxTop = window.pageYOffset + circle.getBoundingClientRect().top;
console.log(absBoxTop);
let absBoxLeft = window.pageXOffset + circle.getBoundingClientRect().left;
let absBoxRight = window.pageXOffset + circle.getBoundingClientRect().right;
let absBoxBottom = window.pageYOffset + circle.getBoundingClientRect().bottom;
// 방향키 이벤트

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

// const btn = document.querySelectorAll(".btn");
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click",`btn${i+1}Click` );
// }

// const btn = document.querySelectorAll(".btn");
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     window[`btn${i + 1}Click`]();
//     console.log(btn[i]);
//   });
// }
let selectElement = document.getElementById("select");
let selectValue = selectElement.value;

// // 윗방향키
// if (selectElement.value == "true") {
//   // isTrue();
// }
// if (selectElement.value == "false") {
//   isFalse();
// }

// function isTrue() {
//   function btn1Click() {
//     btn1Action();
//   }
//   function btn1Action() {
//     let relCircle = circle.getBoundingClientRect();
//     let circleWidth = relCircle.width;
//     let top;
//     if (relCircle.y > relBoxTop) {
//       top = relCircle.y - moveValue;
//       if (relCircle.y - moveValue - circleWidth < relBoxTop) {
//         top = relBoxTop;
//       }
//       circle.style.top = top + "px";
//     }
//   }

//   // 왼쪽 방향키
//   function btn2Click() {
//     btn2Action();
//   }
//   function btn2Action() {
//     let relCircle = circle.getBoundingClientRect();
//     let circleWidth = relCircle.width;
//     let left;
//     if (relCircle.x > relBoxLeft) {
//       left = relCircle.x - moveValue;
//       if (relCircle.x - moveValue - circleWidth < relBoxLeft) {
//         left = relBoxLeft;
//       }
//       circle.style.left = left + "px";
//     }
//   }

//   // 아래방향키
//   function btn3Click() {
//     btn3Action();
//   }
//   function btn3Action() {
//     let relCircle = circle.getBoundingClientRect();
//     let circleWidth = relCircle.width;
//     let bottom;
//     if (relCircle.y < relBoxBottom) {
//       bottom = relCircle.y + moveValue;
//       if (relCircle.y + moveValue + circleWidth > relBoxBottom) {
//         bottom = relBoxBottom - moveValue;
//       }
//       circle.style.top = bottom + "px";
//     }
//   }

//   // 오른쪽 방향키
//   function btn4Click() {
//     btn4Action();
//   }
//   function btn4Action() {
//     let relCircle = circle.getBoundingClientRect();
//     let circleWidth = relCircle.width; //원의 지름
//     let right; // 이동할 값 넣어주는 곳
//     if (relCircle.x < relBoxRight) {
//       right = relCircle.x + moveValue;
//       if (relCircle.x + moveValue + circleWidth > relBoxRight) {
//         right = relBoxRight - moveValue;
//       }
//       circle.style.left = right + "px";
//     }
//   }
//   btn1.addEventListener("click", btn1Click);
//   btn2.addEventListener("click", btn2Click);
//   btn3.addEventListener("click", btn3Click);
//   btn4.addEventListener("click", btn4Click);
// }

// function isFalse() {
//절대좌표 윗 방향키
function btn1Click() {
  btn1Action();
}
function btn1Action() {
  let relCircle = circle.getBoundingClientRect();
  //x 절대좌표값 계산
  let absCircleX = window.pageXOffset + relCircle.left;
  //x 절대좌표값 계산
  let absCircleY = window.pageYOffset + relCircle.top;
  console.log(absCircleX);
  console.log(absCircleY);
  let circleWidth = relCircle.width;
  let top;
  if (absCircleY >= absBoxTop) {
    top = absCircleY - moveValue;
    if (absCircleY - moveValue - circleWidth > absBoxTop) {
      top = absBoxTop;
    }
    circle.style.top = top + "px";
  }
}

// 왼쪽 방향키
function btn2Click() {
  btn2Action();
}
function btn2Action() {}

// 아래방향키
function btn3Click() {
  btn3Action();
}
function btn3Action() {}

// 오른쪽 방향키
function btn4Click() {
  btn4Action();
}
function btn4Action() {}
btn1.addEventListener("click", btn1Click);
btn2.addEventListener("click", btn2Click);
btn3.addEventListener("click", btn3Click);
btn4.addEventListener("click", btn4Click);
// }
