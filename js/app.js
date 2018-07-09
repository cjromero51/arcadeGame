// Enemies our player must avoid


var Enemy = function() {
  const yArray = [60, 145, 230];
  this.sprite = 'images/enemy-bug.png';
  //inital coordinates for enemies
  this.x = -101;
  this.y = yArray[Math.floor(Math.random() * yArray.length)];
  allEnemies.push(this);

};

// fixed speed for enemies; once off-canvas this.x & this.y are regenerated
Enemy.prototype.update = function(dt) {
  if (this.x < 505) {
    this.x += 2;
    return this.x*dt;
  } else {
    const yArray = [60, 145, 230];
    this.y = yArray[Math.floor(Math.random() * yArray.length)];
    this.x = -101;
  }
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


class Player {
  constructor() {
    const movementArray = [];
    this.x = 202;
    this.y = 315;
    this.charImage = 'images/char-boy.png';
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
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(e.keyCode);
});
