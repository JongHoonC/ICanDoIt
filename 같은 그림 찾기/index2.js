const questionMaxCnt = 6;

//가위바위보 사진 배열화 한 것을 RSP로 선언
const RSP = [
  { src: "img/rock.jpg", value: "rock", class: "choice", id: "ques" },
  { src: "img/scissor.jpg", value: "scissor", class: "choice", id: "ques" },
  { src: "img/paper.jpg", value: "paper", class: "choice", id: "ques" },
];

//보기는 몇개 생성할거야
const objCount = 3;
//어디에다가 추가할거냐 난 여기에 추가할거야
let choiceArea = document.getElementById("choiceArea");

for (let i = 0; i < objCount; i++) {
  // HTML에 라벨 추가한다
  let objLabel = document.createElement("label");
  objLabel.setAttribute("for", "choice" + (i + 1));
  objLabel.className = "choiceOne";

  //HTML에 input 추가한다
  let objInput = document.createElement("input");
  objInput.setAttribute("id", "choice" + (i + 1));
  objInput.setAttribute("type", "radio");
  objInput.setAttribute("name", "aaa");

  choiceArea.appendChild(objLabel);
  objLabel.appendChild(objInput);
}

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
  // console.log(choiceOne);
  // 배열 만들기
  const objCountArr = [];

  // let objRandom = RSP[Math.floor(Math.random() * RSP.length)];
  // objCountArr.push(objRandom);
  // for (let i = 0; i < objCountArr.length; i++) {
  //   let data = objCountArr[i];
  //   // let aa = v
  //   while(objCountArr[i].value){

  //   }
  //   let random = RSP.filter((item)=>item.value != data.value);
  //   let objRandom2 = RSP[Math.floor(Math.random() * random.length)];
  //   objCountArr.push(objRandom2);
  // Objcountarr 길이를 체크
  // 배열이 0보다 클 경우 속에 있는 인자를 체크
  // 그 인자와 난수로 뽑아온 값을 비교
  // 다르면 넣고 아니면 rsp에서 뽑은 벨류 말고 나머지 한개를 가져옴
  // let a = RSP.filter((item)=>item.value != 인자)
  // 그 한개를 넣음
  // let objRandom = RSP[Math.floor(Math.random() * RSP.length)];
  // let isFalse = false;
  // for (let j = 0; j < objCountArr.length; j++) {
  //   if (objCountArr[j].value == objRandom.value) {
  //     isFalse = true;
  //     // objRandom = RSP[Math.floor(Math.random() * RSP.length)];
  //     break;
  //   }
  // }
  // if (isFalse != true) {
  //   objCountArr.push(objRandom);
  // }
}
console.log(objCountArr);
// }
setQuestion();
