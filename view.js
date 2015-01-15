var app = {};
 
app.init = function () {
  app.canvas = document.getElementById('canvas');
  app.ctx = app.canvas.getContext("2d");
  app.projectile = new Image();
  app.projectile.src = 'Cannonball.png';
  app.healthLeft = 100;
  app.movementLeft = 10;
  app.hasHitEnemy;
  app.hasHitRightWall;
  app.hasHitLeftWall;
  app.Radians = 0;
  app.Position = 3*window.innerWidth/50;
  app.shotInMotion = false;
  app.shotPower = 1;
  app.secondsInAir = 0;
  app.gravity = -9.8*app.secondsInAir;
 
  app.resize();
  app.moveTank('p1');
  
  return app;
};
  
app.resize = function () {
  app.ctx.canvas.width  = window.innerWidth;
  app.ctx.canvas.height = window.innerHeight;
  app.tankWidth = window.innerWidth/11;
  app.tankHeight = window.innerHeight/10;
  app.turretWidth = window.innerWidth/15;
  app.turretHeight = window.innerHeight/75;
  return app;
};
  
// Draws the tank.
app.moveTank = function(player){
  if(player === 'p1'){
    app.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    app.ctx.save();
    app.ctx.translate(app.Position, 3.75 * window.innerHeight / 7);
    app.ctx.fillStyle = "#00ff00";
    
    // Draws the tank body.
    
    app.ctx.fillRect(0, 0, app.tankWidth, app.tankHeight);
    
    // Draws the tank's turret.
    
    app.ctx.translate(window.innerWidth / 15,0);
    app.ctx.rotate(app.Radians);
    app.ctx.fillRect(0,0,app.turretWidth,app.turretHeight);
    app.ctx.restore();
    
    return app;
  }
};

app.findShotX = function(time){
  app.secondsInAir += 0.1;
  return Math.cos(app.Radians)*app.shotPower*(time-0.1);
};

app.findShotY = function(time){
  return Math.sin(app.Radians)*app.shotPower*(time-0.1);
};

app.shoot = function(){
  app.moveTank('p1');
  app.ctx.save();
  app.ctx.translate(app.Position + window.innerWidth/11+window.innerWidth/15,3.75*window.innerHeight/7);
  app.ctx.drawImage(app.projectile,app.findShotX(app.secondsInAir),app.findShotY(app.secondsInAir),window.innerHeight/30,window.innerHeight/30);
  if (app.findShotY(app.secondsInAir) === 0){
   app.shotInMotion = false;
  }
  app.ctx.restore();
  
} ;
  
  
  // Binds the movement and aim of the tank to the arrow keys.
  
document.addEventListener('keydown', function (e) {

  hasHitRightWall = false;
  hasHitLeftWall = false;
    
  if(app.Position <= 0){
    hasHitLeftWall = true;
  }
  
  if(app.Position >= window.innerWidth-app.tankWidth-app.turretWidth){
    hasHitRightWall = true;
  }
    
    switch (e.keyCode){
  
    // Left
    case 37:
    if(!hasHitLeftWall){
    app.Position -= 2.5;
  }
    app.moveTank('p1');
    break;
    // Up
    case 38:
    if(app.Radians%2 > -0.35){
    app.Radians -= 0.15;
  }
    app.moveTank('p1');
    break;
    // Right
    case 39:
    if(!hasHitRightWall){
    app.Position += 2.5;
  }
    app.moveTank('p1');
    break;
    // Down
    case 40:
    if(app.Radians%2 < 0){
    app.Radians += 0.15;
  }
    app.moveTank('p1');
    break;
    // Space
    case 32:
    app.shotInMotion = true;
    while (app.shotInMotion){
    app.shoot();
    }
    break;
    
    default:
    app.moveTank('p1');
    break;
  
  }
});
window.onresize = app.resize;
app.init();
