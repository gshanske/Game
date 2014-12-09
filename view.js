var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

// Draws the tank.
  var moveTank = function(position,angle){
    ctx.clearRect(0,0,10000,10000);
    ctx.save();
    ctx.translate(position,window.innerHeight/5);
    ctx.fillStyle = "#00ff00";
  // Draws the tank body.
    ctx.fillRect(0,0,25,15);
  // Draws the tank's turret.
    ctx.translate(20,5);
    ctx.rotate(angle);
    ctx.fillRect(0,0,5,20);
    ctx.restore();
  };
  var radians = 1.5;
  var pos = 30;
  // Binds the movement and aim of the tank to the arrow keys.
    document.addEventListener('keydown', function (e) {
      switch (e.keyCode){
      // Right
        case 37:
          pos -= 2.5;
          moveTank(pos,radians*Math.PI);
          break;
      // Up
        case 38:
          if(radians >= 1.15){
          radians -= 0.15;
          }
          moveTank(pos,radians*Math.PI);
          break;
        
        case 39:
          pos += 2.5;
          moveTank(pos,radians*Math.PI);
          break;
        
        case 40:
         if(radians <= 1.35){
          radians += 0.15;
         }
          moveTank(pos,radians*Math.PI);
          break;
        
        default:
        
          break;
        
      }
    });
