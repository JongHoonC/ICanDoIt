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

- 23.04.18 for문 안에
  const minusBtn = document.getElementById(`minBtn${i}`);
  minusBtn.addEventListener("click", () => {
  console.log("sdf");
  });

  코드를 쓰고 여러개의 메뉴를 선택 후 추가하면 주문내역 제일 상단에 있는 메뉴에 -버튼을 누르면 메뉴 선택한 갯수만큼 console이 찍힌다.

  이유 : 뭐가 중첩된 거 같다.

  해결방안 : 중복 되지 않도록 한다,,,?

- 23.04.19
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
