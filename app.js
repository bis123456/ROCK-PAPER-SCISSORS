let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice)
    })
})
const genCompurtchoice=()=>{
    //rock,paper,scissors;
    const option=["rock","paper","scissors"];
  const rand=  Math.floor(Math.random()*3);
    return option[rand];

}
const playGame=(userchoice)=>{
const comp=genCompurtchoice();
if(userchoice===comp){
    console.log("draw");
    document.querySelector("#msg").innerText="Draw";
}
else{
    let userWin=true;
    if(userchoice==="rock"){
        userWin=comp==="paper"?false:true;
        showWinner(userWin);
    }

else if(userchoice==="paper"){
    userWin=comp==="scissors"?false:true;
    showWinner(userWin);
}
else{
  userWin= comp==="rock"?false:true;
  showWinner(userWin);
}
}
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("UserWin");
        userScore=userScore+1;
        document.querySelector("#user").innerText=userScore;
        document.querySelector("#msg").innerText="User Win";
    }
    else{
        console.log("computer win");
        computerScore=computerScore+1;
        document.querySelector("#comp").innerText=computerScore;
        document.querySelector("#msg").innerText="Computer Win";
    }
}