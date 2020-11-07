//window.alert("This is an alert! Javasript is running.");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

var randomNumber = function() {
    var value = Math.floor(Math.random * 21) + 40;
    return value;
}

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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }  
        }

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
             enemyHealth = randomNumber();
             // Log a resulting message to the console so we know that it worked.
             console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
       
             //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break; 
             }

            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
             }
      
             // remove player's health by subtracting the amount set in the enemyAttack variable
             playerHealth = Math.max(0, playerHealth - enemyAttack);
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

//Start Game function
var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    debugger;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            console.log (pickedEnemyName);
            enemyHealth = Math.floor(Math.random() * 21) + 40;
            console.log (enemyHealth)
            fight (pickedEnemyName[i]);

            if (playerHealth > 0 && i < enemyNames.length-1) {
                var storeconfirm = window.confirm("The fight is over, visit the store before next round?");
                if (storeconfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!")
            break;
        }
        endGame();
    }
    //startGame()
}

var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm ("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
             else {
            window.alert("you don't have enough money!");
            }
        break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("you don't have enough money!"); 
            }
         break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
        break;

        default: 
            window.alert("you did not pick a valid option. Try again.");
            shop();
        break;
    }
}

//start the game when the page loads
startGame();