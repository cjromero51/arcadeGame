window.onload = function() {
  heart2.style.opacity = 0.2;
  heart3.style.opacity = 0.2;
}
// Enemies our player must avoid
var Enemy = function() {
  const yArray = [60, 145, 230];
  this.sprite = 'images/enemy-bug.png';
  //inital coordinates for enemies
  this.x = -101;
  this.y = yArray[Math.floor(Math.random() * yArray.length)];

  const speedArray = [2, 3, 4, 5];
  speedFunction = function() {
    return speedArray[Math.floor(Math.random() * speedArray.length)];
  }
  this.speed = speedFunction();
  allEnemies.push(this);

};

// fixed speed for enemies; once off-canvas this.x & this.y are regenerated
Enemy.prototype.update = function(dt) {
  if (this.x < 606) {
    if ((this.x+40 >= player.x && this.x-40 <= player.x) && this.y === player.y){
      score = 0;
      scoreText.innerHTML = score;
      if (heart3.style.opacity == 1) {
        heart3.style.opacity = 0.2;
      } else {
        heart2.style.opacity = 0.2;
      }
      player.x = 202;
      player.y = 315;
    };
      this.x += this.speed;
      return this.x*dt;
  } else {
    const yArray = [60, 145, 230];
    this.y = yArray[Math.floor(Math.random() * yArray.length)];
    this.x = -101;
    this.speed = speedFunction();
  }

};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


class Player {
  constructor() {
    const movementArray = [];
    const selectedCharacter = document.getElementById("char-choices");
    this.x = 202;
    this.y = 315;
    this.charImage = 'images/char-boy.png';
    // this.characterSelection = function() {
    //   if (selectedCharacter.options[selectedCharacter.selectedIndex].value == 'boy'){
    //     return this.charImage = 'image/char-boy.png';
    //   } else if (selectedCharacter.options[selectedCharacter.selectedIndex].value == 'isaac') {
    //     return this.charImage = 'images/isaac.png'
    //   };
    // };
    this.render = function() {
      ctx.drawImage(Resources.get(this.charImage), this.x, this.y);
    };
    this.handleInput = function(kC){
      movementArray.push(kC);
    };
    this.update = function() {
      //keeps player onscreen
      if (movementArray[0] == 37) {
        while (movementArray.length > 0) {
          movementArray.pop();
        } if (this.x < 100) {
          return this.x;
        } else {
          return this.x -= 101;
      }};
      //resets player to original position (reached water)

      if (movementArray[0] == 38) {
        while (movementArray.length > 0) {
          movementArray.pop();
        } if (this.y < 100) {
          score += 50;
          scoreText.innerHTML = score;
            if (heart2.style.opacity == 1) {
              heart3.style.opacity = 1;
            } else if (heart2.style.opacity = 0.2) {
                heart2.style.opacity = 1.0;
            }

          return this.y = 315, this.x = 202;
        } else {
          return this.y -= 85;
      }};
      //keeps player on screen
      if (movementArray[0] == 39) {
        while (movementArray.length > 0) {
          movementArray.pop();
        } if (this.x > 370) {
          return this.x;
        } else {
        return this.x += 101;
      }};
      //keeps player on screen
      if (movementArray[0] == 40) {
        while (movementArray.length > 0) {
          movementArray.pop();
        } if (this.y > 390) {
          return this.y;
        } else {
          return this.y += 85;
      }};
    };
  };
};
let allEnemies = [];
let enemy = new Enemy();
let enemyOne = setTimeout(function() {new Enemy()}, 1000);
let enemyTwo = setTimeout(function() {new Enemy()}, 5000);
let enemyFour = setTimeout(function() {new Enemy()}, 11000);
let enemyFive = setTimeout(function() {new Enemy()}, 3000);
let enemySix = setTimeout(function() {new Enemy()}, 7000);
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
