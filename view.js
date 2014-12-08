 var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  var drawStuff = function(position,angle){
    ctx.clearRect(0,0,10000,10000);
    ctx.save();
    ctx.translate(position,window.innerHeight/5);
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(0,0,25,15);
    ctx.translate(20,5);
    ctx.rotate(angle);
    ctx.fillRect(0,0,5,25);
    ctx.restore();
  };
  var radians = 1/12;
  var pos = 30;
  
    document.addEventListener('keydown', function (e) {
      switch (e.keyCode){
        case 37:
          pos -= 2.5;
          drawStuff(pos,radians*Math.PI);
          break;
          
        case 38:
          //if(//rotation barrier){
          radians += 0.15;
         // }
          drawStuff(pos,radians*Math.PI);
          break;
        
        case 39:
          pos += 2.5;
          drawStuff(pos,radians*Math.PI);
          break;
        
        case 40:
          radians -= 0.15;
          drawStuff(pos,radians*Math.PI);
          break;
        
        default:
        
          break;
        
      }
    });
