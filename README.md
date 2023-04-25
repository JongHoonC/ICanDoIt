# ICanDoIt

프로젝트 완료 일지

1. 같은 그림 찾기

- 23.04.17 9시 40분경 시작 ~ 1시 언저리 마무리.

2. 가위 바위 보 게임

- 23.04.17 1시쯤 시작 ~ 3시 30분경 마무리.

༼ つ ◕_◕ ༽つ

같은 그림 찾기를 기반으로 만들어서 구조는 금방 만들었지만 가위 바위 보 에 대한 승리 조건 패배 조건을 만들 때 처음에는 조건을 잘못 부여해 조금 시간이 소요됐지만 헷갈리지 않도록 주석을 달고 조건문 시작하기 전,

const result = objInput[i].value - currentQues.value;

코드를 작성해 result 값 기반으로 조건문을 작성하니 쉽게 구현할 수 있었다.

3. 키오스크

- 23.04.17 4시 키오스크 시작

- 23.04.18

༼ つ ◕_◕ ༽つ

for문 안에
const minusBtn = document.getElementById(`minBtn${i}`);
minusBtn.addEventListener("click", () => {
console.log("sdf");
});

코드를 쓰고 여러개의 메뉴를 선택 후 추가하면 주문내역 제일 상단에 있는 메뉴에 -버튼을 누르면 메뉴 선택한 갯수만큼 console이 찍힌다.

이유 : 뭐가 중첩된 거 같다.

해결방안 : 중복 되지 않도록 한다,,,?

- 23.04.19

༼ つ ◕_◕ ༽つ

plusButton.addEventListener("click", () => {
countValue++;
countText.innerText = countValue;
updatePrice();
setPlus();
});

eventListener가 for문 안에서 돌도록 하지 않게 함수를 호출해서 사용하니 해결됐다.

function getOrderList(teaNameI) {
orderList = {
name: teaNameI,
count: "",
};
console.log(teaNameI);
}
관리자가 볼 수 있는 주문 내역을 console로 객체 형태로 나타낼 수 있도록 구현중.

- 23.04.20

༼ つ ◕_◕ ༽つ

주문내역에서 메뉴를 추가하고, 추가한 메뉴와 수량을 관리자가 볼 수 있도록 console을 객체 형태로 나타냈다.

주문한 메뉴와 수량을 확인 하려면 무조건 메뉴를 선택해야 html에서 td가 추가된 것을 확인 할 수 있다. 메뉴는 추가됐을 때 변하지 않는 객체 이지만 수량은 countValue 값이 +버튼과 -버튼을 누르느냐에 따라 바뀐다. 그래서 수량은 order()함수 안에 넣어두지 않고 밖으로 빼서 사용해야한다. 전역스코프에
let isfalse = "false"; 를 쓰고
function order()
{ isfalse = "true";
return isfalse;}

if (isfalse == order()){}
이런식으로 넣어서 클릭 하면
isfalse가 true 일 때 실행하게 돼서 변하는 countValue 값도 얻어올 수 있게 된다.
그리고 두 배열을 하나의 객체로 만들기 위해 줄이다 라는 뜻을 가진 reduce메소드를 사용해 주문내역을 관리

- 23.04.17 ~ 23.04.20 키오스크 완료

4. To Do List

- 23.04.25

༼ つ ◕_◕ ༽つ

To Do list는 먼저 쓰기 기능 삭제 기능을 구현했다. tr과 td는 createElement를 사용하고 생성한 할일 목록은 배열안의 객체 형식으로 추후 수정이 가능하도록 만들었다. 삭제버튼은 filter 메소드를 사용해 객체를 삭제 할 수 있는 기능을 만들었다.

내일 수정 버튼을 구현하기 위해 현재 td로 들어가있는 할 일 목록은 input 형식으로 만들고 수정버튼을 누르면 input type:text로 바뀌며, 옆에 확인 버튼도 생기도록 구현 할 예정입니다.
