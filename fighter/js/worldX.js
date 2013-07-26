/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var worldX = {
    
    _documentWidth: null,
    _documentHeight: null,
    _documentColour: "#111000",
    _earthImageLocation: "images/earth.png",
    
    drawWorldX: function(context)
    {
        this._documentWidth = window.innerWidth;
        this._documentHeight = window.innerHeight;
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        context.beginPath();
        context.canvas.width  = this._documentWidth;
        context.canvas.height = this._documentWidth;        
        context.fillStyle = this._documentColour;
        context.fillRect(0, 0, this._documentWidth, this._documentHeight);
        context.fill();
        imageObj = new Image();
        imageObj.src = this._earthImageLocation;
        context.drawImage(imageObj, (window.innerWidth/2)-(1600/2), window.innerHeight-600); 
        context.closePath();
        context.restore();
    }
    
}