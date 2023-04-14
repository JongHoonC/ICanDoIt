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
  // 배열 만들기
  const objCountArr = [];
  const objCountArrN = [];
  let objRandom = RSP[Math.floor(Math.random() * RSP.length)];
  objCountArr.push(objRandom);
  console.log("0번째 들어간 인자의 밸류 : " + objCountArr[0].value);
  for (let i = 0; i < RSP.length; i++) {
    //true 인 것들만 새 배열로 들어와야됨
    if (RSP[i].value !== objCountArr[0].value) {
      objCountArrN.push(RSP[i]);
    }
  }
  for (let i = 0; i < objCountArrN.length; i++) {
    objCountArr.push(objCountArrN[i]);
  }
  console.log(objCountArr);
}
// setQuestion();

const test = () => {
  const test = [{ value: "1" }, { value: "2" }, { value: "3" }];
  let asdf = [];
  for (let i = 0; i < 3; i++) {
    let k = test[Math.floor(Math.random() * test.length)];

    if (asdf.length < 1) {
      asdf.push(k);
      // console.log(asdf);
    } else {
      let ee = test;
      for (let j = 0; j < asdf.length; j++) {
        ee = ee.filter((item) => asdf[j].value != item.value);
      }
      let u = ee[Math.floor(Math.random() * ee.length)];
      asdf.push(u);

      // let ii = [];
      // for (let j = 0; j < test.length; j++) {
      //   let zxcv = test[j];
      //   let is = false;
      //   for (let p = 0; p < asdf.length; p++) {
      //     let req = asdf[p];
      //     if (req.value == zxcv.value) is = true;
      //   }
      //   if (!is) ii.push(zxcv);
      // }
      // let q = ii[Math.floor(Math.random() * ii.length)];
      // asdf.push(q);
    }
  }
  // console.log("??", asdf);
};
console.log(test());
