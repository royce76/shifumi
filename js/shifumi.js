alert("Welcome to Advanced SHIFUMI :\npress ok to continue");// Display "Welcome " to user

do{
var userName = prompt("Please enter your name\nand press ok to continue");//variable userName store user name.
}
while(userName.length > 20 || userName.length < 2);

var weapon = ["roc", "paper", "scissors"];//add weapon's user

do{
    var choiceUser = prompt( 
                        "Please choose and enter name's weapon among this list :\n" //variable choiceUser store weapon's choice.
                        + weapon[0] + "\n" + weapon[1] + "\n" + weapon[2] + 
                        ".\nand press ok to continue"
                    );
}
while (choiceUser != "roc" && choiceUser != "paper" && choiceUser != "scissors" );

var i = Math.random();//generate a choice for computer

var computerChoice = "";//var computerChoice store the weapon value

if(i <= 0.33){
            alert("Computer choose "+ weapon[0] + "\npress ok to continue");//computer choose stone for i<0.33
            computerChoice = weapon[0];
}
else if (i <= 0.66){
                alert("Computer choose "+ weapon[1] + "\npress ok to continue");//computer choose leaf for i<0.66
                computerChoice = weapon[1];
}
else{
    alert("Computer choose "+ weapon[2]+ "\npress ok to continue");//else computer choose scissors
    computerChoice = weapon[2];
}

alert("Computer has chosen "+ computerChoice + ".\n" + userName + " has chosen " + choiceUser + ".\npress ok to continue");//display user choice and computer choice

//define winner
/*var pointComputer = 0;
var pointUser = 0 ;*/

if(choiceUser === computerChoice){
                                  alert("DRAW");
}
else if(choiceUser === weapon[0] && computerChoice === weapon[2]){
                                                                  alert(userName + " win. ");
}
else if(choiceUser === weapon[1] && computerChoice === weapon[0]){
                                                                  alert(userName + " win. ");
}
else if(choiceUser === weapon[2] && computerChoice === weapon[1]){
                                                                  alert(userName + " win. ");
}
else{
     alert("Computer win");
}
/*
if(pointuser === 3){
                    alert(userName + " win the set.");
}*/
/*else{
    alert("computer win the set");
}*/