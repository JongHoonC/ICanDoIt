const animals = ['사자', '호랑이', '사슴', '원숭이', '코끼리', '뱀', '고릴라', '돌고래', '고양이', '개', '곰', '사막여우', '펭귄', '코뿔소', '바다거북', '오랑우탄', '기린', '물소', '코알라', '판다'];
const animalsLength = animals.length;
let animal = {};
let resultAnimal = [];
for (let i = 0; i < animals.length; i++) {
  while (resultAnimal.length < 5) {
    const randomAnimal = Math.floor(Math.random() * animalsLength);
    if (!resultAnimal.includes(animals[randomAnimal])) {
      resultAnimal.push(animals[randomAnimal]);
    }
  }
}

function animalRun() {
  for (let j = 0; j < resultAnimal.length; j++) {
    let runSpeed = 0;
    while (runSpeed < 5) {
      runSpeed = Math.floor(Math.random() * 39);
    }
    animal = {
      name: resultAnimal[j],
      runSpeed: runSpeed,
    };
    console.log(`${animal.name} 난 달려 ${runSpeed}km/h 속도로`);
  }
}
function animalSwim() {
  for (let j = 0; j < resultAnimal.length; j++) {
    let runSpeed = 0;
    while (runSpeed < 5) {
      runSpeed = Math.floor(Math.random() * 39);
    }
    animal = {
      name: resultAnimal[j],
      runSpeed: runSpeed,
    };
    console.log(`${animal.name} 난 수영해 ${runSpeed}km/h 속도로`);
  }
}

// animalRun();
animalSwim();
