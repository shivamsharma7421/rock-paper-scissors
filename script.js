let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id")
        // console.log("choice clicked",userchoice)
        palygame(userchoice);
    });
});
const  userpara = document.querySelector("#user-score");
const  comppara = document.querySelector("#computer-score");

const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame = ()=>{
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userchoice,compchoice)=>{
    if (userwin){
        userScore++;
        userpara.innerText=userScore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        comppara.innerText=computerScore;
        msg.innerText = `You lose Your ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const palygame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        {
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else {
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
        // console.log(userwin)
    }}
}