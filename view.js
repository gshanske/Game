  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  var drawStuff = function(position,angle){
    ctx.save();
    ctx.translate(position-50,25);
    ctx.rotate(angle);
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0,0,100,100);
    ctx.restore();
  };
  var radians = 2;
  var pos = 30;
  
    document.addEventListener('keydown', function (e) {
      switch (e.keyCode){
        case 37:
          //ctx.fillStyle = "#ff0000";
          //ctx.fillRect(0,0,100,100);
          pos -= 2.5;
          drawStuff(pos,radians*Math.PI);
          break;
          
        case 38:
          //ctx.fillStyle = "#00ff00";
          //ctx.fillRect(0,0,100,100);
          radians += 0.15;
          drawStuff(pos,radians*Math.PI);
          break;
        
        case 39:
          //ctx.fillStyle = "#0000ff";
          //ctx.fillRect(0,0,100,100);
          pos += 2.5;
          drawStuff(pos,radians*Math.PI);
          break;
        
        case 40:
          //ctx.fillStyle = "#ffff00";
          //ctx.fillRect(0,0,100,100);
          radians -= 0.15;
          drawStuff(pos,radians*Math.PI);
          break;
        
        default:
        
          break;
        
      }
    });
