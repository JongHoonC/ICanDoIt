const menuList = [
  { name: "돌체라떼", price: 5600, id: "menu1" },
  { name: "돌체 콜드 브루", price: 5800, id: "menu2" },
  { name: "딸기 딜라이트 요거트 블렌디드", price: 6100, id: "menu3" },
  { name: "아메리카노", price: 5600, id: "menu4" },
  { name: "에스프레소", price: 4000, id: "menu5" },
  { name: "자몽 허니 블랙 티", price: 5300, id: "menu6" },
  { name: "자바 칩 프라푸치노", price: 6300, id: "menu7" },
  { name: "카라멜 마끼아또", price: 5600, id: "menu8" },
  { name: "카페 라떼", price: 5000, id: "menu9" },
];
function order() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const orderItem = document.getElementById("orderItem");

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      menuList.forEach((menuList) => {
        if (checkbox.id == menuList.id) {
          const objMenuList = Object.assign(menuList); //체크된 메뉴의 키 값을 선언
          let objTr = document.createElement("tr");
          objTr.setAttribute("name", "abc");
          orderItem.appendChild(objTr);
          //메뉴 이름
          let objNameTD = document.createElement("td");
          objTr.appendChild(objNameTD);
          objNameTD.textContent = objMenuList.name; // 메뉴 이름 추가
          //수량
          let objCountTD = document.createElement("td");
          objCountTD.setAttribute("class", "count");
          objTr.appendChild(objCountTD);

          const minBtn = document.createElement("button");
          const countText = document.createElement("span");
          const count = document.querySelectorAll(".count");
          const plusBtn = document.createElement("button");
          let countValue = 1;
          for (let i = 0; i < count.length; i++) {
            console.log(count[i]);
            // 빼기 버튼
            minBtn.innerText = "-";
            minBtn.setAttribute("id", `minBtn${i}`);
            count[i].appendChild(minBtn);

            //숫자 감소 증가
            countText.innerText = countValue;
            count[i].appendChild(countText);
            // 더하기 버튼
            plusBtn.innerText = "+";
            plusBtn.setAttribute("id", `plusBtn${i}`);
            count[i].appendChild(plusBtn);
          }

          //가격
          let objPriceTD = document.createElement("td");
          objTr.appendChild(objPriceTD);
          objPriceTD.textContent = objMenuList.price; // 메뉴 가격 추가

          //삭제
          let objDeleteTD = document.createElement("td");
          objDeleteTD.setAttribute("class", "deleteBtn");
          objTr.appendChild(objDeleteTD);

          const Delete = document.querySelectorAll(".deleteBtn");
          let deleteBtn = document.createElement("button");
          for (let i = 0; i < Delete.length; i++) {
            Delete[i].appendChild(deleteBtn);
            deleteBtn.innerText = "삭제";
            // 클릭한 요소의 부모의 부모인 tr을 없애기
            deleteBtn.addEventListener("click", () => {
              let clickTarget = deleteBtn.parentNode.parentNode;
              clickTarget.remove();
            });
          }
        }
      });
    }
  });
  clearCheck();
}

function clearCheck() {
  const clearCheck = document.querySelectorAll(".clearCheckBox");
  for (let i = 0; i < clearCheck.length; i++) {
    clearCheck[i].checked = false;
  }
}
function reloadBtn() {
  location.reload();
}
// //
// //수량
// //수량
// const countCells = document.querySelectorAll(".count");

// for (let i = 0; i < countCells.length; i++) {
//   const countCell = countCells[i];
//   let countValue = 1;

//   let minBtn = document.createElement("button"); //빼기 버튼
//   minBtn.setAttribute("class", "minCount");
//   minBtn.innerText = "-";

//   let numText = document.createElement("span");
//   numText.setAttribute("class", "numCount");
//   numText.innerText = countValue;

//   let plusBtn = document.createElement("button"); //더하기 버튼
//   plusBtn.setAttribute("class", "plusCount");
//   plusBtn.innerText = "+";

//   countCell.appendChild(minBtn);
//   countCell.appendChild(numText);
//   countCell.appendChild(plusBtn);

//   // -버튼 클릭 이벤트
//   minBtn.addEventListener("click", () => {
//     if (countValue > 0) {
//       countValue--;
//       numText.innerText = countValue;
//     }
//   });

//   // +버튼 클릭 이벤트
//   plusBtn.addEventListener("click", () => {
//     countValue++;
//     numText.innerText = countValue;
//   });
// }
