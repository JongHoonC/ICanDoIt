//가위바위보 사진 배열화 한 것을 RSP로 선언
const RSP = [
  { src: "img/rock.jpg", value: "rock", class: "choice", id: "ques" },
  { src: "img/scissor.jpg", value: "scissor", class: "choice", id: "ques" },
  { src: "img/paper.jpg", value: "paper", class: "choice", id: "ques" },
];

//문제에서 랜덤 사진 출력 함수 만들기
const randomRSP = RSP[Math.floor(Math.random() * RSP.length)];

//html에 img 요소 추가
const createE = document.createElement("img");
createE.src = `${randomRSP.src}`;
createE.value = `${randomRSP.value}`;
//setAttribute() 메소드는 지정된 요소의 속성 값을 설정합니다.
createE.setAttribute("value", randomRSP.value);
createE.setAttribute("id", randomRSP.id);

// img태그가 들어갈 위치 지정
const pushImg1 = document.getElementById("question");
//qushImg1의 자식에 createE를 추가한다.
pushImg1.appendChild(createE);

// 이미지에 밸류 추가된 것 확인
let quesID = document.getElementById("ques");
let getQuesID = quesID.getAttribute("value");
console.log("문제의 밸류 : " + getQuesID);

//선택박스 선언하기
let choiceOne = document.querySelectorAll(".choiceOne");
// 선택박스에 랜덤으로 사진 출력하기
let randomRSP1, randomRSP2;
// do while은 최초 한 번은 무조건 실행되기 때문에 실행 후 반복문을 돌렸을 때 1과 2의 value가 같으면 섞는다. 그러면  RSP1과 2에는 서로 다른 값이 오게 된다.
do {
  randomRSP1 = RSP[Math.floor(Math.random() * RSP.length)];
  randomRSP2 = RSP[Math.floor(Math.random() * RSP.length)];
} while (
  //밸류 1이랑 2랑 같으면 섞어라
  randomRSP1.value === randomRSP2.value ||
  // 밸류 1과 문제의 밸류가 다르거나 밸류2와 문제의 밸류가 다르면 섞어라
  (randomRSP1.value !== getQuesID && randomRSP2.value !== getQuesID)
);

// 받아온 서로 다른 사진을 choice[i]에 넣는 과정
for (let i = 0; i < choiceOne.length; i++) {
  let randomChoice;
  // i가 0일때 RSP1을 넣고 요소를 추가시킨다.
  if (i === 0) {
    randomChoice = randomRSP1;
    // 아래 갔다 오면 i는 1로 바뀌고 i는 0이 아니므로 else를 읽고 그 아래로 내려가서 읽는다.
  } else {
    randomChoice = randomRSP2;
  }
  //함수 호출
  a(randomChoice, choiceOne[i]);
}

function a(randomChoice, choiceOnetest) {
  // //html에 img 요소 추가
  let createChoice = document.createElement("img");
  createChoice.src = randomChoice.src;
  //setAttribute() 메소드는 지정된 요소의 속성 값을 설정합니다.
  createChoice.setAttribute("value", randomChoice.value);
  createChoice.setAttribute("class", randomChoice.class);
  // createChoice 추가
  choiceOnetest.appendChild(createChoice);
}
