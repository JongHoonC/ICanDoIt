const baseballInfo = {
  player: [
    {
      name: "승엽",
      adress: "대구",
      team: "라이온스",
      year: 15,
      history: ["이글스", "랜더스", "트윈스", "라이온스"],
    },
    {
      name: "현진",
      adress: "대전",
      team: "이글스",
      year: 12,
      history: ["이글스"],
    },
    {
      name: "광현",
      adress: "인천",
      team: "랜더스",
      year: 11,
      history: ["이글스", "랜더스"],
    },
    {
      name: "대호",
      adress: "부산",
      team: "자이언츠",
      year: 17,
      history: ["이글스", "랜더스", "자이언츠"],
    },
    {
      name: "지환",
      adress: "서울",
      team: "라이온스",
      year: 3,
      history: ["라이온스"],
    },
    {
      name: "성범",
      adress: "광주",
      team: "타이거즈",
      year: 8,
      history: ["랜더스", "타이거즈"],
    },
    {
      name: "의지",
      adress: "서울",
      team: "라이온스",
      year: 10,
      history: ["다이노스", "라이온스"],
    },
    {
      name: "현인",
      adress: "수원",
      team: "위즈",
      year: 1,
      history: ["위즈"],
    },
    {
      name: "승환",
      adress: "서울",
      team: "라이온스",
      year: 12,
      history: ["라이온스"],
    },
    {
      name: "영화",
      adress: "하남",
      team: "랜더스",
      year: 17,
      history: ["이글스", "랜더스"],
    },
    {
      name: "민호",
      adress: "부산",
      team: "트윈스",
      year: 9,
      history: ["베어스", "트윈스"],
    },
    {
      name: "세웅",
      adress: "부산",
      team: "자이언츠",
      year: 1,
      history: ["자이언츠"],
    },
    {
      name: "찬호",
      adress: "서울",
      team: "트윈스",
      year: 20,
      history: ["베어스", "이글스"],
    },
    {
      name: "근우",
      adress: "인천",
      team: "이글스",
      year: 12,
      history: ["다이노스", "타이거즈", "이글스"],
    },
    {
      name: "선진",
      adress: "대구",
      team: "타이거즈",
      year: 8,
      history: ["라이온스", "베어스"],
    },
    {
      name: "현종",
      adress: "서울",
      team: "이글스",
      year: 10,
      history: ["타이거즈", "트윈스"],
    },
    {
      name: "희동",
      adress: "대전",
      team: "트윈스",
      year: 11,
      history: ["이글스", "랜더스", "트윈스"],
    },
    {
      name: "광길",
      adress: "수원",
      team: "다이노스",
      year: 5,
      history: ["라이온스", "베어스", "다이노스"],
    },
    {
      name: "동욱",
      adress: "서울",
      team: "이글스",
      year: 6,
      history: ["베어스", "이글스"],
    },
    {
      name: "영광",
      adress: "부산",
      team: "위즈",
      year: 7,
      history: ["이글스", "위즈"],
    },
  ],
  team: [
    {
      name: "이글스",
      home: "대전",
      ranking: 5,
    },
    {
      name: "랜더스",
      home: "인천",
      ranking: 4,
    },
    {
      name: "라이온스",
      home: "대구",
      ranking: 1,
    },
    {
      name: "다이노스",
      home: "창원",
      ranking: 3,
    },
    {
      name: "베어스",
      home: "서울",
      ranking: 6,
    },
    {
      name: "자이언츠",
      home: "부산",
      ranking: 2,
    },
    {
      name: "타이거즈",
      home: "대구",
      ranking: 7,
    },
    {
      name: "위즈",
      home: "수원",
      ranking: 9,
    },
    {
      name: "트윈스",
      home: "서울",
      ranking: 8,
    },
  ],
};

//Q1. 4등 이내의 팀 중에 한번이라도 소속 되었던 경력 5년 이상의 선수
//Q2. 현재 수도권(서울, 수원) 팀인 선수들의 경력의 총 합
//Q3. 가장 많은 선수들이 거쳐간 팀의 순위
// function Q1() {
//   const rankTeam = [];
//   for (let i = 0; i < baseballInfo.team.length; i++) {
//     if (baseballInfo.team[i].ranking < 5) {
//       rankTeam.push(baseballInfo.team[i]);
//     }
//   }
//   const rankPlayer = [];
//   for (let i = 0; i < baseballInfo.player.length; i++) {
//     if (baseballInfo.player[i].year > 4) {
//       rankPlayer.push(baseballInfo.player[i]);
//     }
//   }
//   const yearPlayer = [];
//   for (let i = 0; i < rankTeam.length; i++) {
//     let temaName = rankTeam[i].name;
//     for (let j = 0; j < rankPlayer.length; j++) {
//       let historyA = rankPlayer[j].history;
//       let res = historyA.includes(temaName);
//       if (res !== false) {
//         yearPlayer.push(rankPlayer[j].name);
//       }
//     }
//   }
//   return yearPlayer;
// }
// console.log(Q1());
// function q1for() {
//   const rankTeam = [];
//   let i = 0;
//   do {
//     if (baseballInfo.team[i].ranking < 5) {
//       rankTeam.push(baseballInfo.team[i]);
//     }
//     i++;
//   } while (i < baseballInfo.team.length);

//   let j = 0;
//   const rankPlayer = [];
//   while (j < baseballInfo.player.length) {
//     if (baseballInfo.player[j].year > 4) {
//       rankPlayer.push(baseballInfo.player[j]);
//     }
//     j++;
//   }

//   let k = 0;
//   while (k < rankTeam.length) {
//     let temaName = rankTeam[k].name;
//     let j = 0;
//     while (j < rankPlayer.length) {
//       let historyA = rankPlayer[j].history;
//       let res = historyA.includes(temaName);
//       if (res !== false) {
//         console.log(rankPlayer[j]);
//       }
//       j++;
//     }
//     k++;
//   }
// }
// q1for();

//for문 다시 한번 복습 후 indexOf가 아닌 includes 사용

// function Q1() {
// const rankTeam = baseballInfo.team.filter((teams) => {
//   return teams.ranking < 5;
// });

//   const rankPlayer = baseballInfo.player.filter((players) => {
//     return players.year > 4;
//   });

//   for (let i = 0; i < rankTeam.length; i++) {
//     let temaName = rankTeam[i].name;
//     for (let j = 0; j < rankPlayer.length; j++) {
//       let historyA = rankPlayer[j].history;
//       let res = historyA.includes(temaName);
//       if (res !== false) {
//         console.log(rankPlayer[j]);
//       }
//     }
//   }
//   return;
// }
// Q1();

// // for문 다시 한번 복습 후 indexOf 사용

// function Q1() {
//   const rankTeam = baseballInfo.team.filter((teams) => {
//     return teams.ranking < 5;
//   });

//   const rankPlayerA = baseballInfo.player.filter((players) => {
//     return players.year > 4;
//   });

//   for (let i = 0; i < rankTeam.length; i++) {
//     let teamA = rankTeam[i].name;
//     for (let j = 0; j < rankPlayerA.length; j++) {
//       let historyA = rankPlayerA[j].history;
//       let res = historyA.indexOf(teamA);
//       if (res > -1) {
//         console.log(rankPlayerA[j]);
//       }
//     }
//   }
//   return;
// }
// Q1();

// for문
// const rankTeam = baseballInfo.team.forEach((teams) => {
//   if (teams.ranking < 5) {
//     console.log(teams);
//     return teams;
//   }
// });

// function rankPlayer() {
//   for (let players of baseballInfo.player) {
//     if (players.year > 4) {
//       // console.log(players);
//     }
//   }
// }
// rankPlayer();

// 수도권 팀 출력
// 수도권팀 선수들
//경력 출력
//경력 합 출력
//Q2. 현재 수도권(서울, 수원) 팀인 선수들의 경력의 총 합

// function sumYear() {
//   const metroTeam = [];
//   for (let i = 0; i < baseballInfo.team.length; i++) {
//     let metroTeamI = baseballInfo.team[i];
//     if (metroTeamI.home == "서울" || metroTeamI.home == "수원") {
//       metroTeam.push(metroTeamI);
//     }
//   }

//   const metroPlayer = [];
//   for (let k = 0; k < metroTeam.length; k++) {
//     let metroTeamK = metroTeam[k];
//     for (let j = 0; j < baseballInfo.player.length; j++) {
//       let metroPlayerJ = baseballInfo.player[j];
//       if (metroTeamK.name == metroPlayerJ.team) {
//         metroPlayer.push(metroPlayerJ);
//       }
//     }
//   }
//   // console.log(metroPlayer);

//   // 경력 출력
//   let resArr = [];
//   for (let i = 0; i < metroPlayer.length; i++) {
//     let playerYear = metroPlayer[i].year;
//     resArr.push(playerYear);
//   }
//   // console.log(resArr);
//   let sum = 0;
//   for (let k = 0; k < resArr.length; k++) {
//     sum = sum + resArr[k];
//   }
//   console.log(`경력의 총 합은 ${sum} 입니다`);
// }
// sumYear();

//while문
// function Q2() {
//   const metroTeam = [];
//   let i = 0;
//   while (i < baseballInfo.team.length) {
//     let metroTeamI = baseballInfo.team[i];
//     if (metroTeamI.home == "서울" || metroTeamI.home == "수원") {
//       metroTeam.push(metroTeamI);
//     }
//     i++;
//   }

//   const metroPlayer = [];
//   let k = 0;
//   while (k < metroTeam.length) {
//     let metroTeamK = metroTeam[k];
//     let j = 0;
//     while (j < baseballInfo.player.length) {
//       let metroPlayerJ = baseballInfo.player[j];
//       if (metroTeamK.name == metroPlayerJ.team) {
//         metroPlayer.push(metroPlayerJ);
//       }
//       j++;
//     }
//     k++;
//   }

//   let resArr = [];
//   let x = 0;
//   while (x < metroPlayer.length) {
//     let playerYear = metroPlayer[x].year;
//     resArr.push(playerYear);
//     x++;
//   }

//   let sum = 0;
//   let y = 0;
//   while (y < resArr.length) {
//     sum = sum + resArr[y];
//     y++;
//   }

//   console.log(`경력의 총 합은 ${sum} 입니다`);
// }
// Q2();
//Q3. 가장 많은 선수들이 거쳐간 팀의 순위

// 히스토리 출력
// 히스토리 배열 합치기

//Q3. 가장 많은 선수들이 거쳐간 팀의 순위

// let playerHistoryArr = [];
// for (let i = 0; i < baseballInfo.player.length; i++) {
//   let playerHistory = baseballInfo.player[i].history;
//   for (let j = 0; j < playerHistory.length; j++) {
//     playerHistoryArr.push(playerHistory[j]);
//   }
// }

// //중복 값 카운팅
// const countTeam = {};
// for (let i = 0; i < playerHistoryArr.length; i++) {
//   let playerHistoryArrI = playerHistoryArr[i];
//   if (countTeam[playerHistoryArrI]) {
//     countTeam[playerHistoryArrI]++; //요소를 돌다가 같은 키가 있으면 1을 더한다
//   } else {
//     countTeam[playerHistoryArrI] = 1;
//   }
// }
// // console.log(countTeam);
// let max = Object.values(countTeam);
// // 거쳐간 횟수
// let maxResult = Math.max(...max);

// //객체의 속성중 거쳐간 횟수의 키 값을 찾기 위해 for in 문을 사용해 속성을 반복했습니다.
// function findKey(keys) {
//   for (let key in keys) {
//     if (keys[key] === maxResult) {
//       return key;
//     }
//   }
// }

// // 많은 선수가 거처간 팀
// let maxTeam = findKey(countTeam);

// // console.log(maxTeam);

// //많은 선수가 거쳐간 팀을 알았으니 그 팀의 랭킹을 보기 위해 team을 반복문으로 순회해 값을 출력
// for (let i = 0; i < baseballInfo.team.length; i++) {
//   let maxTeamRank = baseballInfo.team[i];
//   if (maxTeamRank.name == maxTeam) {
//     console.log(
//       `선수가 가장 많이 거쳐간 팀은 ${maxTeam}로 총 ${maxResult} 번 거쳐갔으며 이 팀의 순위는 ${maxTeamRank.ranking}위 입니다`
//     );
//   }
// }

let playerHistoryArr = [];
let i = 0;
while (i < baseballInfo.player.length) {
  let playerHistory = baseballInfo.player[i].history;
  let j = 0;
  while (j < playerHistory.length) {
    playerHistoryArr.push(playerHistory[j]);
    j++;
  }
  i++;
}

const countTeam = {};
let k = 0;
while (k < playerHistoryArr.length) {
  let playerHistoryArrK = playerHistoryArr[k];
  if (countTeam[playerHistoryArrK]) {
    countTeam[playerHistoryArrK]++;
  } else {
    countTeam[playerHistoryArrK] = 1;
  }
  k++;
}

let max = Object.values(countTeam);
let maxResult = Math.max(...max);

function findKey(keys) {
  let keyArr = Object.keys(keys);
  let i = 0;
  while (i < keyArr.length) {
    if (keys[keyArr[i]] === maxResult) {
      return keyArr[i];
    }
    i++;
  }
}

let maxTeam = findKey(countTeam);

let l = 0;
while (l < baseballInfo.team.length) {
  let maxTeamRank = baseballInfo.team[l];
  if (maxTeamRank.name == maxTeam) {
    console.log(
      `선수가 가장 많이 거쳐간 팀은 ${maxTeam}로 총 ${maxResult} 번 거쳐갔으며 이 팀의 순위는 ${maxTeamRank.ranking}위 입니다`
    );
  }
  l++;
}
