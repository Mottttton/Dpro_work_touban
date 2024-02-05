const loteryBtn = document.getElementById("lotery");
const checkAllBtn = document.getElementById("checkAll");
const resetBtn = document.getElementById("reset");
const form = document.getElementById("form");
const resultElement = document.createElement("div");
const perentResultElement = document.getElementById("result");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function takeTurn() {
  loteryBtn.addEventListener("click", () => {
    let joinPeople = [];
    let joinNum = 0;
    form.person.forEach((element) => {
      if (element.checked) {
        joinPeople.push(element.value);
        joinNum++;
      }
    });
    roleNum = getRandomInt(joinNum);

    for (let i = 0; i < joinNum; i++) {
      if (roleNum === i) {
        resultElement.innerText = joinPeople[i];
        break;
      }
    }
    resultElement.setAttribute("class", "next_turn");
    const target = document.getElementsByClassName("next_turn")[0];
    if (perentResultElement.childElementCount !== 1) {
      perentResultElement.removeChild(target);
    }
    perentResultElement.appendChild(resultElement)
  });
}

function checkAll() {
  checkAllBtn.addEventListener("click", () => {
    const menbers = form.person;
    menbers.forEach(element => {
      element.checked = true;
    })
  });
}

function resetResult() {
  resetBtn.addEventListener("click", () => {
    const target = document.getElementsByClassName("next_turn")[0];
    if (perentResultElement.childElementCount !== 1) {
      perentResultElement.removeChild(target);
    }
  })
}

window.onload = function () {
  takeTurn();
  checkAll();
  resetResult();
};
