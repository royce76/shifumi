// Display "Welcome " to user
alert("Welcome to Advanced SHIFUMI :\npress ok to continue");

//User add his name
var userName=prompt("Please enter your name\nand press ok to continue");
console.log(userName);
//variable userName store user name.

//add weapon's user
var weapon=[
    "stone",
    "leaf",
    "scissors"
];

var choiceUser=prompt( "Please choose and enter name's weapon among this list : "
                        +weapon +"\n and press ok to continue"
                    );
console.log(choiceUser);
//variable choiceUser store weapon's choice.

//show user choice
alert("You choose "+choiceUser+"\n press ok to continue");

//generate a choice for computer
//variable i has a random value
var i=Math.random();
console.log(i);

//computer choose stone for i<0.33
if(i<=0.33){
    alert("Computer choose "+ weapon[0] + "\n press ok to continue");
    console.log(weapon[0]);
}
//computer choose leaf for i<0.66
else if (i<=0.66){
    alert("Computer choose "+ weapon[1] + "\n press ok to continue");
    console.log(weapon[1]);
}
//else computer choose scissors 
else{
    alert("Computer choose "+ weapon[2]+ "\n press ok to continue");
    console.log(weapon[2]);
}