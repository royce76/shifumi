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

do{
    var choiceUser=prompt( "Please choose and enter name's weapon among this list : " +weapon +".\n and press ok to continue");
console.log(choiceUser);
}

while (choiceUser!="stone" && choiceUser!="leaf" && choiceUser!="scissors" );

var weaponUser="";

if(choiceUser==="stone"){
weaponUser=weapon[0];
console.log(weaponUser);
}

else if (choiceUser==="leaf"){
weaponUser=weapon[1];
console.log(weaponUser);
}

else if (choiceUser==="scissors"){
weaponUser=weapon[2];
console.log(weaponUser);
}



//variable choiceUser store weapon's choice.

//show user choice
//alert("You choose "+weaponUser+"\n press ok to continue");

//generate a choice for computer
//variable i has a random value
var i=Math.random();
console.log(i);

//computer choose stone for i<0.33
var computerChoice="";
if(i<=0.33){
    alert("Computer choose "+ weapon[0] + "\n press ok to continue");
    computerChoice=weapon[0];
    console.log(weapon[0]);
}
//computer choose leaf for i<0.66
else if (i<=0.66){
    alert("Computer choose "+ weapon[1] + "\n press ok to continue");
    computerChoice=weapon[1];
    console.log(weapon[1]);
}
//else computer choose scissors 
else{
    alert("Computer choose "+ weapon[2]+ "\n press ok to continue");
    computerChoice=weapon[2];
    console.log(weapon[2]);
}
//var computerChoice is define inside the condition to store the weapon value
//display user choice and computer choice

alert("Computer has chosen "+computerChoice+".\n"+userName+" has chosen "+weaponUser+".\n press ok to continue");

//define winner

if(weaponUser===computerChoice){
    alert("DRAW");
}
else if(weaponUser===weapon[0] && computerChoice===weapon[1]){
    alert("Computer win. ");
}
else if(weaponUser===weapon[0] && computerChoice===weapon[2]){
    alert(userName+" win. ");
}
else if(weaponUser===weapon[1] && computerChoice===weapon[0]){
    alert(userName+ " win.");
}
else if(weaponUser===weapon[1] && computerChoice===weapon[2]){
    alert("Computer win. ");
}
else if(weaponUser===weapon[2] && computerChoice===weapon[0]){
    alert("Computer win. ");
}
else if(weaponUser===weapon[2] && computerChoice===weapon[1]){
    alert(userName+" win. ");
}