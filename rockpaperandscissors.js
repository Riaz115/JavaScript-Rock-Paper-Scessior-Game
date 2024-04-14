let userscore = 0;
let compscore = 0;
let userwin;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let scoreofuser = document.querySelector("#user-score");
let scoreofcomp = document.querySelector("#comp-score");
let resetbtn = document.querySelector(".resetbtn");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

// this is playgame function in this function both comp and user slect rock paper ya scissors
let playgame = (userchoice) => {
  let compchoice = gencompchoice();

  if (userchoice === compchoice) {
    draw();
  } else {
    userwin = true;
    if (userchoice === "rock") {
      if (compchoice === "scissors") {
        userwin = true;
      } else {
        userwin = false;
      }
    } else if (userchoice === "paper") {
      if (compchoice === "rock") {
        userwin = true;
      } else {
        userwin = false;
      }
    } else if (userchoice === "scissors") {
      if (compchoice === "paper") {
        userwin = true;
      } else {
        userwin = false;
      }
    }
  }
  showwiner(userwin, userchoice, compchoice);
};

// this functions is to show that computer wins ya user wins
let showwiner = (userwin, userchoice, compchoice) => {
  if (userwin == true) {
    userscore++;
    scoreofuser.innerText = userscore;
    msg.innerText = `you win ${userchoice} beats ${compchoice}`;
    msgcontainer.style.backgroundColor = "blue";
    msgcontainer.style.color = "white";
  } else {
    compscore++;
    scoreofcomp.innerText = compscore;
    msg.innerText = `you lose ${compchoice} beats ${userchoice}`;
    msgcontainer.style.backgroundColor = "black";
    msgcontainer.style.color = "white";
  }
};

// this function is for the computer choice
let gencompchoice = () => {
  let choiceoption = ["rock", "paper", "scissors"];
  let choiceindx = Math.floor(Math.random() * 3);
  return choiceoption[choiceindx];
};

// this is function for print draw
let draw = () => {
  msg.innerText = "game is draw!";
  msgcontainer.style.backgroundColor = "green";
  msgcontainer.style.color = "black";
  userwin = userwin(null);
};

// this function is for the reset of the game

let resetgame = () => {
  userscore = 0;
  compscore = 0;
  scoreofcomp.innerText = 0;
  scoreofuser.innerText = 0;
  msg.innerText = "Game is reset set start again";
  msgcontainer.style.backgroundColor = "yellow";
  msgcontainer.style.color = "black";
};

resetbtn.addEventListener("click", resetgame);
