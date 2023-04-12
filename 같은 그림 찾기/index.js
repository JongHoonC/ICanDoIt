const questionMaxCnt = 6;
//가위바위보 사진 배열화 한 것을 RSP로 선언
const RSP = [
  { src: "img/rock.jpg", value: "rock", class: "choice", id: "ques" },
  { src: "img/scissor.jpg", value: "scissor", class: "choice", id: "ques" },
  { src: "img/paper.jpg", value: "paper", class: "choice", id: "ques" },
];
//문제에서 랜덤 사진 출력 함수 만들기
function setQuestion() {
  const objRSP = RSP[Math.floor(Math.random() * RSP.length)];

  //html에 img 요소 추가
  const objIMG = document.createElement("img");
  objIMG.src = objRSP.src;
  objIMG.value = objRSP.value;
  //setAttribute() 메소드는 지정된 요소의 속성 값을 설정합니다.
  objIMG.setAttribute("value", objRSP.value);
  objIMG.setAttribute("id", objRSP.id);

  // img태그가 들어갈 위치 지정
  const pushImg1 = document.getElementById("question");
  //qushImg1의 자식에 createE를 추가한다.
  pushImg1.appendChild(objIMG);

  // 이미지에 밸류 추가된 것 확인
  let quesID = document.getElementById("ques");
  let queationID = quesID.getAttribute("value");
  console.log("문제의 밸류 : " + queationID);
  //선택박스 선언하기
  let choiceOne = document.querySelectorAll(".choiceOne");
  // 선택박스에 랜덤으로 사진 출력하기
  let objRSP1, objRSP2;
  // do while은 최초 한 번은 무조건 실행되기 때문에 실행 후 반복문을 돌렸을 때 1과 2의 value가 같으면 섞는다. 그러면  RSP1과 2에는 서로 다른 값이 오게 된다.
  do {
    objRSP1 = RSP[Math.floor(Math.random() * RSP.length)];
    objRSP2 = RSP[Math.floor(Math.random() * RSP.length)];
  } while (
    //밸류 1이랑 2랑 같으면 섞어라
    objRSP1.value === objRSP2.value ||
    // 밸류 1과 문제의 밸류가 다르거나 밸류2와 문제의 밸류가 다르면 섞어라
    (objRSP1.value !== queationID && objRSP2.value !== queationID)
  );

  // 받아온 서로 다른 사진을 choice[i]에 넣는 과정
  for (let i = 0; i < choiceOne.length; i++) {
    let randomChoice;
    // i가 0일때 RSP1을 넣고 요소를 추가시킨다.
    if (i === 0) {
      randomChoice = objRSP1;
      // 아래 갔다 오면 i는 1로 바뀌고 i는 0이 아니므로 else를 읽고 그 아래로 내려가서 읽는다.
    } else {
      randomChoice = objRSP2;
    }
    //함수 호출
    practiceCall(randomChoice, choiceOne[i], i);
  }
}

function practiceCall(randomChoice, choiceOneI, i) {
  let createChoice = document.createElement("img");
  createChoice.src = randomChoice.src;
  createChoice.setAttribute("class", randomChoice.class);
  choiceOneI.appendChild(createChoice);
  //사용 이유 :
  let check = document.getElementsByName("aaa");
  // for (let j = 0; j < check.length; j++) {
  // console.log(check[j]);
  // if (j === i) {
  check[i].setAttribute("value", randomChoice.value);
  // }
  // }
}
setQuestion();

function goNext() {
  let check = document.getElementsByName("aaa");
  const thisNum = document.getElementById("thisNum");
  let currentNum = parseInt(thisNum.innerText);
  //1씩증가
  currentNum++;
  //toString 메소드는 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴하는 메소드
  thisNum.innerText = currentNum.toString();
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      const hereQuestionID = document.getElementById("ques");
      if (check[i].value === hereQuestionID.value) {
        showNextQuestion();
        const trueNum = document.getElementById("trueNum");
        let currentTrueNum = parseInt(trueNum.innerText);
        // 맞은 문제 수 1씩 증가
        currentTrueNum++;
        trueNum.innerText = currentTrueNum.toString();
        //밸류가 문제의 밸류와 다르면
        clearCheck();
      } else if (check[i].value !== hereQuestionID.value) {
        showNextQuestion();
        const falseNum = document.getElementById("falseNum");
        let currentFalseNum = parseInt(falseNum.innerText);
        // 틀린 문제 수 1씩 증가
        currentFalseNum++;
        falseNum.innerText = currentFalseNum.toString();
        clearCheck();
      }
    }
  }
  if (currentNum > questionMaxCnt) {
    let nuber = document.querySelector("#number");
    let nextBtn = document.querySelector("#nextBtn");
    let reBtn = document.querySelector("#reBtn");
    nextBtn.style.display = "none";
    nuber.style.display = "none";
    reBtn.style.backgroundColor = "red";
  }
}

function reloadBtn() {
  location.reload();
}
function showNextQuestion() {
  // 새로운 문제 정보 가져오기
  const newQuestion = RSP[Math.floor(Math.random() * RSP.length)];
  // 새로운 선택지 정보 가져오기
  let newChoice1, newChoice2;
  //위에서 사용했던 do while문 새로운 변수 적용
  do {
    newChoice1 = RSP[Math.floor(Math.random() * RSP.length)];
    newChoice2 = RSP[Math.floor(Math.random() * RSP.length)];
  } while (
    (newChoice1.value !== newQuestion.value &&
      newChoice2.value !== newQuestion.value) ||
    newChoice1.value === newChoice2.value
  );
  // 기존 문제 요소 수정
  const questionElement = document.querySelector("#question img");
  questionElement.src = newQuestion.src;
  questionElement.value = newQuestion.value;
  questionElement.id = newQuestion.id;
  questionElement.setAttribute("value", questionElement.value);

  // 기존 선택지 요소들 수정

  let checkImg = document.querySelectorAll(".choiceOne img");
  let checkValue = document.getElementsByName("aaa");
  //이미지 사진을 바꾸기 위한 것
  for (let j = 0; j < checkImg.length; j++) {
    checkImg[0].src = newChoice1.src;
    checkImg[1].src = newChoice2.src;
  }
  //input에 밸류를 추가하기 위한 것
  for (let k = 0; k < checkValue.length; k++) {
    checkValue[0].value = newChoice1.value;
    checkValue[1].value = newChoice2.value;
    checkValue[0].setAttribute("value", checkValue[0].value);
    checkValue[1].setAttribute("value", checkValue[1].value);
  }
}
function clearCheck() {
  const clearCheck = document.getElementsByName("aaa");
  clearCheck[0].checked = false;
  clearCheck[1].checked = false;
}
