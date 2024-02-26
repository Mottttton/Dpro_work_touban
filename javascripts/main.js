const loteryBtn = document.getElementById("lotery");
const checkAllBtn = document.getElementById("checkAll");
const resetBtn = document.getElementById("reset");
const memberBoxes = document.getElementsByClassName("member");
const form = document.getElementById("form");
const resultElement = document.createElement("p");
const perentResultElement = document.getElementById("result");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function removeResultId() {
  const targetId = document.getElementById("next_turn");
  if (targetId !== null) {
    targetId.id = '';
  }
}

function removeResultElement() {
  const target = document.getElementsByClassName("next_turn")[0];
  if (perentResultElement.childElementCount !== 1) {
    perentResultElement.removeChild(target);
  }
}

function toggleCheckbox() {
  for (i = 0; i < memberBoxes.length; i++) {
    const memberBox = memberBoxes[i];
    const memberBoxInput = memberBox.getElementsByTagName("input")[0];
    memberBoxInput.addEventListener("click",  () => {
      memberBox.classList.toggle("not_join");
    });
  }
}

function takeTurn() {
  loteryBtn.addEventListener("click", () => {
    removeResultId();
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
        for (j = 0; j < memberBoxes.length; j++) {
          if (memberBoxes[j].innerText === joinPeople[i]){
            memberBoxes[j].id = 'next_turn'
            break
          }
        }
        break;
      }
    }
    resultElement.setAttribute("class", "next_turn");
    removeResultElement();
    perentResultElement.appendChild(resultElement);
  });
}

function checkAll() {
  checkAllBtn.addEventListener("click", () => {
    const members = form.person;
    members.forEach((element) => {
      element.checked = true;
    });
    for (i = 0; i < memberBoxes.length; i++) {
      const memberBox = memberBoxes[i]
      memberBox.classList.remove("not_join");
    }
  });
}

function resetResult() {
  resetBtn.addEventListener("click", () => {
    removeResultElement();
    removeResultId();
  });
}

window.onload = function () {
  toggleCheckbox();
  takeTurn();
  checkAll();
  resetResult();
};
