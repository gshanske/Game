var app = {};
 
app.init = function () {
  app.canvas = document.getElementById('canvas');
  app.ctx = app.canvas.getContext("2d");
  app.projectile = new Image();
  app.projectile.src = 'Cannonball.png';
  app.tankImage = new Image();
  app.tankImage.src = 'Game Tank.png';
  app.turretImage = new Image();
  app.turretImage.src = 'Game Turret.png';
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
  app.shotX = 0;
  app.shotY = 0;
  
  app.resize();
  
  return app;
};
  
app.resize = function () {
  app.ctx.canvas.width  = window.innerWidth;
  app.ctx.canvas.height = window.innerHeight;
  app.tankWidth = window.innerWidth/5.5;
  app.tankHeight = window.innerHeight/5;
  app.turretWidth = window.innerWidth/7.5;
  app.turretHeight = window.innerHeight/25;
  app.moveTank('p1');
  console.log("Resize");
  return app;
};
  
// Draws the tank.
app.moveTank = function(player){
  if(player === 'p1'){
    app.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    app.ctx.save();
    app.ctx.translate(app.Position, 3.75 * window.innerHeight / 7);
    app.ctx.translate(window.innerWidth / 12, window.innerWidth / 125);
    app.ctx.rotate(app.Radians);
    app.ctx.drawImage(app.turretImage,0,0,app.turretWidth, app.turretHeight);
    app.ctx.rotate(0-app.Radians);
    app.ctx.translate(0-window.innerWidth / 12, 0-window.innerWidth / 125);
    app.ctx.drawImage(app.tankImage,0,0,app.tankWidth, app.tankHeight);
    app.ctx.restore();
    
    return app;
  }
};

app.findShotX = function(){
  app.shotX++;
  return app.shotX;
};

app.findShotY = function(){
  app.shotY -= app.gravity;
  return app.shotY;
};

app.shoot = function(){
  app.moveTank('p1');
  app.shotInMotion = true;
  while(app.shotInMotion){
    app.ctx.save();
    app.ctx.translate(app.Position + app.tankWidth, 3.75 * window.innerHeight / 7);
    app.ctx.rotate(app.Radians);
    app.ctx.drawImage(app.projectile,app.findShotX(),app.findShotY(),window.innerHeight/30,window.innerHeight/30);
    app.ctx.restore();
    app.ctx.clearRect(window.innerWidth,window.innerHeight);
    app.moveTank('p1');
     if(app.findShotY(app.secondsInAir) <= 0){
       app.shotX = 0;
       app.shotY = 0;
     }
  }
  
  
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
    if(app.Radians%2 > -0.5){
    app.Radians -= 0.015*Math.PI;
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
    app.Radians += 0.015*Math.PI;
  }
    app.moveTank('p1');
    break;
    // Space
    case 32:
    app.shoot();
    break;
    
    default:
    app.moveTank('p1');
    break;
  
  }
});
window.onresize = app.resize;
app.init();
