var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  
  
  var resize = function () {
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    };
  
  var tankWidth = window.innerWidth/11;
  var tankHeight = window.innerHeight/10;
  var turretWidth = window.innerWidth/15;
  var turretHeight = window.innerHeight/75;
  
  // Draws the tank.

  var moveTank = function(position,angle){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.save();
    ctx.translate(position,3.75*window.innerHeight/7);
    ctx.fillStyle = "#00ff00";

  // Draws the tank body.
  
    ctx.fillRect(0,0,tankWidth,tankHeight);
  
  // Draws the tank's turret.
   
    ctx.translate(window.innerWidth/15,0);
    ctx.rotate(angle);
    ctx.fillRect(0,0,turretWidth,turretHeight);
    ctx.restore();
  };
  
  var healthLeft = 100;
  var movementLeft = 10;
  var hasHitEnemy;
  var hasHitRightWall;
  var hasHitLeftWall;
  var radians = 0;
  var pos = 3*window.innerWidth/50;
  
  moveTank(pos,radians*Math.Pi);
  
  // Binds the movement and aim of the tank to the arrow keys.
  
    document.addEventListener('keydown', function (e) {
      
      hasHitRightWall = false;
      hasHitLeftWall = false;
      
      if(pos <= 0){
        hasHitLeftWall = true;
        }
      
      if(pos >= window.innerWidth-tankWidth-turretWidth){
        hasHitRightWall = true;
        }
      
      switch (e.keyCode){
      
      // Left
        case 37:
          resize();
          if(!hasHitLeftWall){
            pos -= 2.5;
          }
          moveTank(pos,radians*Math.PI);
          break;
      // Up
        case 38:
          resize();
          if(radians%2 > -0.35){
          radians -= 0.15;
          }
          moveTank(pos,radians*Math.PI);
          break;
      // Right
        case 39:
          resize();
          if(!hasHitRightWall){
          pos += 2.5;
          }
          moveTank(pos,radians*Math.PI);
          break;
      // Down
        case 40:
          resize();
         if(radians%2 < 0){
          radians += 0.15;
         }
          moveTank(pos,radians*Math.PI);
          break;
      // Space
        case 32:
          resize();
         // Code to shoot goes here
          break;
        
        default:
          resize();
          break;
    
      }
    });
