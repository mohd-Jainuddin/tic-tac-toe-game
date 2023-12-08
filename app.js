let boxes = document.querySelectorAll(".box");
let msgBox = document.querySelector(".msg-box");
let para = document.querySelector(".para");
let newBtn = document.querySelector(".new-btn");
let reset = document.querySelector(".reset-btn");
let task = true;
let count = 0;

let winnerList = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (task) {
      box.style.color = "green";
      box.innerText = "O";
      task = false;
    } else {
      box.innerText = "X";
      task = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetBtn = () => {
  task = true;
  enableBoxes();
  msgBox.classList.add("hide");
};

const showWinner = (winner) => {
  para.innerText = `Congratulations! winner is ${winner}`;
  msgBox.classList.remove("hide");
  count = 0;
  disableBoxes();
};

const checkDraw = () => {
  count++;
  if (count >= 9) {
    msgBox.classList.remove("hide");
    para.innerText = "Game is Draw!";
    count = 0;
  }
};

const checkWinner = () => {
  checkDraw();
  for (pattern of winnerList) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);
