//시작화면
const startBox = document.getElementById("startBox");
//게임을 하는 곳
const gameArea = document.getElementById("gameArea");
//비행기
let airplane = document.querySelector("#airplane");
// 이동 값
let moveValue = 20;
const airplanewidth = 160;
let isfalse = false;

let targetLeft = gameArea.getBoundingClientRect().left;
let targetRight = gameArea.getBoundingClientRect().right;

// 첫번째 배경
let img = document.getElementById("myImage");
let pos = 0;
let speed = 1.5;
// 두번째 배경
let img1 = document.getElementById("myImage1");
let pos1 = img.height;
let speed1 = 1.5;

// 게임시작 버튼 클릭 시
function startGame() {
  startBox.style.display = "none";
  moveImage();
  moveImage1();
  controlAirplane();
  const counting = document.getElementById("counting");
  let countValue = 3;
  counting.innerText = countValue;
  const countdown = setInterval(() => {
    countValue -= 1;
    counting.innerText = countValue;
    if (countValue === 0) {
      counting.style.display = "none";
      clearInterval(countdown);
      shotMissile();
    }
  }, 1000);
}
let stopImg;
function moveImage() {
  pos += speed;
  img.style.top = pos + "px";
  if (pos >= window.innerHeight) {
    pos = -img.height;
  }
  stopImg = window.requestAnimationFrame(moveImage);
}
let stopImg1;
function moveImage1() {
  pos1 += speed1;
  img1.style.top = pos1 + "px";
  if (pos1 >= window.innerHeight) {
    pos1 = -img1.height;
  }
  stopImg1 = window.requestAnimationFrame(moveImage1);
}
function controlAirplane() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      let targetAirplane = airplane.getBoundingClientRect();
      let left;
      if (targetAirplane.x > targetLeft) {
        left = targetAirplane.x - moveValue;
        if (targetAirplane.x - moveValue < targetLeft) {
          left = targetLeft;
        }
        airplane.style.left = left + "px";
      }
    }
    if (event.key === "ArrowRight") {
      let targetAirplane = airplane.getBoundingClientRect();
      let right;
      if (targetAirplane.x < targetRight) {
        right = targetAirplane.x + moveValue;
        if (targetAirplane.x + moveValue + airplanewidth > targetRight) {
          right = targetRight - airplanewidth;
        }
        airplane.style.left = right + "px";
      }
    }
  });
}

function shotMissile() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "a") {
      isfalse = true;
      // missileArea 만들기
      const objMissileArea = document.createElement("div");
      objMissileArea.setAttribute("class", "missileArea");
      airplane.appendChild(objMissileArea);
      // missileArea 안에 missile 만들기
      const objMissile = document.createElement("img");
      objMissile.setAttribute("src", "img/missile.png");
      objMissileArea.appendChild(objMissile);
      const objMissile1 = document.createElement("img");
      objMissile1.setAttribute("src", "img/missile.png");
      objMissileArea.appendChild(objMissile1);

      // 미사일 움직이기
      missilePos = window.innerHeight;
      moveMissile();
      return isfalse;
    }
  });
}

function moveMissile() {
  if (isfalse === true) {
    const missileArea = document.querySelector(".missileArea");
    let missilePos = window.innerHeight;
    let missileSpeed = 2;
    missilePos += missileSpeed;
    missileArea.style.bottom = missilePos + "px";

    if (missilePos <= window.innerHeight) {
      missilePos = missileArea.clientHeight;
    }

    window.requestAnimationFrame(moveMissile);
  }
}

function restart() {
  window.location.reload();
}
