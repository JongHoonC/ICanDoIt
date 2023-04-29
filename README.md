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

- 23.04.27

༼ つ ◕_◕ ༽つ

원래 계획은 수정할 수 있도록 td를 input type:text로 바꾸려고 했으나, replaceTarget.setAttribute("contenteditable", "false");
이렇게 contenteditable 가 true 일 때는 input 이 아닐 때도 텍스트를 작성할 수 있어 contenteditable 속성을 부여했다.

그리고 수정을 하고 확인을 누르면 dom에서도 바뀌고 객체의 값도 바뀌어야하는데 그때, map, splice가 생각나 사용해보고 시도해봤지만 내가 원하는 값이 나오지 않아서 좀 더 쉽게 생각해 addTodoListArr[j].todo = replaceTarget.innerText; 이 코드 한 줄이면 끝나는 문제였었다. 그냥 단순히 배열에 키가 todo에다가 replaceTarget.innerText 라는 의미이다.

다음 프로젝트는 게임을 한 번 만들어볼까 한다.

5. 장애물 피하기 / 장애물 없애기

- 23.04.29

༼ つ ◕_◕ ༽つ

먼저 게임 시작 버튼을 누르면 게임이 시작 되고, 화면이 위에서 아래로 끊임이 없이 움직이는 효과를 주었다. 이 효과는 requestAnimationFrame 메소드를 사용했다. requestAnimationFrame 메소드는 애니메이션을 반복한다는 의미를 가지고 있다. 반복을 그만 하고싶다면 cancleAnimationFrame 을 사용해야 한다. 추후 게임이 완료되고 저 메소드를 사용할 예정이다. keydown 이벤트를 사용해 방향키를 누를 때 이벤트가 발생하도록 구현했다. 이전 했던 공 움직이기를 활용해 비행기가 일정 구간 이상 넘어가지 않도록 구현했다. 내일은 장애물을 만들고 장애물과 부딪히면 게임이 종료되는 로직을 짤 예정이다.
