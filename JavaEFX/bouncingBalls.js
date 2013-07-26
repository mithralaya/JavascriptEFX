/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    context = myCanvas.getContext('2d');
    setInterval(draw,10); 
    setInterval(drawStars,10); 
    
}
function drawStars()
{
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.arc(Math.floor((Math.random()*document.body.offsetWidth)+1), y, 5, 0, Math.PI*2, true);

    context.fill();
    context.closePath();
    y++;

    context.restore();
}
function draw()
{
    context.beginPath();
    context.canvas.width  = window.innerWidth-50;
    context.canvas.height = window.innerHeight-50;
    context.fillStyle = "#111000";
    context.fillRect(100,100,(document.body.offsetWidth - 200),(document.body.offsetHeight - 200));
    context.strokeRect(100,100,(document.body.offsetWidth - 200),(document.body.offsetHeight - 200));
    context.fill();

    context.fillStyle = "#00ff00";
    context.arc(x, y, 13, 0, Math.PI*2, true);
    context.fill();
    context.closePath();
    
    
    if(x < 115 || x > document.body.offsetWidth - 115)
    {
        dx = -dx;
    }
    if(y < 115 || y > document.body.offsetHeight - 115)
    {
        dy = -dy;
    }
    x+=dx;
    y+=dy;
    context.restore();
}

//RainParticle.prototype = new Particle; //inherit from Particle