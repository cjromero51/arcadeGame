//sets lift total to 1 heart
window.onload = function() {
    heart2.style.opacity = 0.2;
    heart3.style.opacity = 0.2;
};
// Enemies our player must avoid
var Enemy = function() {
    const yArray = [60, 145, 230];
    this.sprite = 'images/enemy-bug.png';
    //inital coordinates for enemies
    this.x = -101;
    this.y = yArray[Math.floor(Math.random() * yArray.length)];
    //sets speed for enemies
    const speedArray = [2, 3, 4, 5];
    speedFunction = function() {
        return speedArray[Math.floor(Math.random() * speedArray.length)];
    }
    this.speed = speedFunction();
    allEnemies.push(this);

};

// variable speed for enemies
// once off-canvas enemy speed & this.y are regenerated
Enemy.prototype.update = function(dt) {
    if (this.x < 606) {
        if ((this.x + 40 >= player.x && this.x - 40 <= player.x) && this.y === player.y) {
            // removes hearts & resets score
            if (heart3.style.opacity == 1) {
                heart3.style.opacity = 0.2;
                score -= 50;
                scoreText.innerHTML = score;
            } else if (heart2.style.opacity == 1) {
                heart2.style.opacity = 0.2;
                score -= 50;
                scoreText.innerHTML = score;
            } else {
                //pop up and score reset upon failure
                heart1.style.opacity = 0.2;
                score = 0;
                scoreText.innerHTML = score;
                swal("oh no", "the bugs got you", "images/isaac.png")
                setTimeout(function() {
                    heart1.style.opacity = 1;
                }, 500);
            };
            //returns player to original location upon collission
            player.x = 202;
            player.y = 315;
        };
        this.x += this.speed;
        return this.x * dt;
    } else {
        const yArray = [60, 145, 230];
        this.y = yArray[Math.floor(Math.random() * yArray.length)];
        this.x = -101;
        this.speed = speedFunction();
    }

};
//draws enemies
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player functionality
class Player {
    constructor() {
        const movementArray = [];
        const selectedCharacter = document.getElementById("char-choices");
        this.x = 202;
        this.y = 315;
        this.charImage = 'images/char-boy.png';
        //draws player
        this.render = function() {
            ctx.drawImage(Resources.get(this.charImage), this.x, this.y);
        };
        //limits key commands to only arrow keys
        this.handleInput = function(kC) {
            if (kC === 37 || kC === 38 || kC === 39 || kC === 40) {
                movementArray.push(kC);
            }
        };
        //limits player movement outside of canvas
        this.update = function() {
            //keeps player onscreen
            if (movementArray[0] == 37) {
                while (movementArray.length > 0) {
                    movementArray.pop();
                }
                if (this.x < 100) {
                    return this.x;
                } else {
                    return this.x -= 101;
                }
            };
            //resets player to original position (reached water)
            if (movementArray[0] == 38) {
                while (movementArray.length > 0) {
                    movementArray.pop();
                }
                //grants lives for successes and resets player to original position
                if (this.y < 100) {
                    score += 50;
                    scoreText.innerHTML = score;
                    if (heart1.style.opacity == 0.2) {
                        heart1.style.opacity = 1;
                    } else if (heart2.style.opacity == 0.2) {
                        heart2.style.opacity = 1;
                    } else {
                        heart3.style.opacity = 1;
                    }
                    return this.y = 315, this.x = 202;
                } else {
                    return this.y -= 85;
                }
            };
            //keeps player on screen
            if (movementArray[0] == 39) {
                while (movementArray.length > 0) {
                    movementArray.pop();
                }
                if (this.x > 370) {
                    return this.x;
                } else {
                    return this.x += 101;
                }
            };
            //keeps player on screen
            if (movementArray[0] == 40) {
                while (movementArray.length > 0) {
                    movementArray.pop();
                }
                if (this.y > 390) {
                    return this.y;
                } else {
                    return this.y += 85;
                }
            };
        };
    };
};
let allEnemies = [];
//enemies spaced spawning with setTimeout()
let enemy = new Enemy();
let enemyOne = setTimeout(function() {
    new Enemy()
}, 1000);
let enemyTwo = setTimeout(function() {
    new Enemy()
}, 5000);
let enemyFour = setTimeout(function() {
    new Enemy()
}, 11000);
let enemyFive = setTimeout(function() {
    new Enemy()
}, 3000);
let enemySix = setTimeout(function() {
    new Enemy()
}, 7000);
let enemySeven = setTimeout(function() {
    new Enemy()
}, 2000);
let enemyEight = setTimeout(function() {
    new Enemy()
}, 4000);
let player = new Player();
let score = 0;
let scoreText = document.getElementById('score');
let heart1 = document.getElementById('heart1');
let heart2 = document.getElementById('heart2');
let heart3 = document.getElementById('heart3');


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(e.keyCode);
});
