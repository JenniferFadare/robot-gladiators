//window.alert("This is an alert! Javasript is running.");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
                // if player chooses to skip
    
        if (promptFight === "skip" || promptFight === "SKIP") {
             //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }  
        }

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
             enemyHealth = enemyHealth - playerAttack;
             // Log a resulting message to the console so we know that it worked.
             console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
       
             //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playermoney = playerMoney + 20;
                break; 
             }

            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
             }
      
             // remove player's health by subtracting the amount set in the enemyAttack variable
             playerHealth = playerHealth - enemyAttack;
             // Log a resulting message to the console so we know that it worked.
             console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + enemyHealth + " health remaining.");
    
             // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    }
}

//loop example
for (i=0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight (pickedEnemyName[i]);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }
}