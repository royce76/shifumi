alert("Welcome to Advanced SHIFUMI :\n3 points to win.\nPress ok to continue.");// Display "Welcome " to user

do{
   var userName = prompt("Please enter your name.\nAnd press ok to continue.");//variable userName store user name.
}
while(userName.length > 20 || userName.length < 2);
do{
    var pointComputer = 0;
    var pointUser = 0 ;

    while(pointComputer < 3 && pointUser < 3){
                                              alert("Computer has " + pointComputer + " point.\n" + userName + " has " + pointUser +" point.\nPress ok to continue.")
    
                                              var weapon = ["roc", "paper", "scissors"];//add weapon's user

                                                do{
                                                    var choiceUser = prompt(
                                                                            "Please choose and enter name's weapon among this list :\n- " //variable choiceUser store weapon's choice.
                                                                             + weapon[0] + "\n- " + weapon[1] + "\n- " + weapon[2] + 
                                                                            "\nAnd press ok to continue."
                                                                    );
                                                                        choiceUser = choiceUser.toLowerCase();
                                                }
                                                while (
                                                       choiceUser != "roc" && choiceUser != "paper" && choiceUser != "scissors"  
                                                );

                                                    var i = Math.random();//generate a choice for computerS

                                                    var computerChoice = "";//var computerChoice store the weapon value

                                                    if(i <= 0.33){
                                                                  alert("Computer choose "+ weapon[0] + ".\nPress ok to continue.");//computer choose stone for i<0.33
                                                                  computerChoice = weapon[0];
                                                    }
                                                    else if (i <= 0.66){
                                                                        alert("Computer choose "+ weapon[1] + ".\nPress ok to continue.");//computer choose leaf for i<0.66
                                                                        computerChoice = weapon[1];
                                                    }
                                                    else{
                                                         alert("Computer choose "+ weapon[2]+ ".\nPress ok to continue");//else computer choose scissors
                                                         computerChoice = weapon[2];
                                                    }

                                                    alert("Computer has chosen "+ computerChoice + ".\n" + userName + " has chosen " + choiceUser + ".\nPress ok to continue");//display user choice and computer choice

                                                    //determinate winner


                                                    if(choiceUser === computerChoice){
                                                                                      var y = alert("DRAW");
                                                    }
                                                    else if((choiceUser === weapon[0] && computerChoice === weapon[2]) ||
                                                            (choiceUser === weapon[1] && computerChoice === weapon[0]) ||
                                                            (choiceUser === weapon[2] && computerChoice === weapon[1])
                                                    ){
                                                     alert(userName + " wins.\nPress ok to continue. ");
                                                     pointUser ++;
                                                    }
                                                    else{
                                                         alert("Computer wins.\nPress ok to continue.");
                                                         pointComputer ++;
                                                    }
    }

    if(pointUser === 3){
                        alert(userName + " wins the set.\nPress ok to continue.");
    }
    else{
         alert("Computer win the set.\nPress ok to continue.");
    }

    do{
        var anwserUser = prompt('Do you want to play an another set ?\n- Enter " yes " to continue.\n- Enter " no " to stop.\nPress ok to continue.');
        anwserUser = anwserUser.toLocaleLowerCase();
    }
    while(anwserUser != "no" && anwserUser != "yes");

}
while( anwserUser === "yes");

if(anwserUser === "no"){
                        alert("Thank you for playing my game.\nPress ok to continue.");
}