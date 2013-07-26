/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Jet = function(){  
       
    var _jetImageWidth = null;
    var _jetImageHeight = null;
    var _jetPositionX = null;
    var _jetPositionY = null;
    var _moveSpeed = null;
    var _context = null;
    var _imageObj = null;
    var obj;

    this.initialise = function(context, imageObj, jetWidth, jetHeight, jetPositionX, jetPositionY, jetMoveSpeed)
    {
        _jetImageWidth = jetWidth;
        _jetImageHeight = jetHeight;
        _jetPositionX = jetPositionX;
        _jetPositionY = jetPositionY;
        _moveSpeed = jetMoveSpeed;
        _context = context;
        _imageObj = imageObj;
        
    };
    
    this.createJet = function()
    {
        _context.drawImage(_imageObj, _jetPositionX, _jetPositionY, _jetImageWidth, _jetImageHeight);
        
    };
    this.moveJet = function(event)
    {
        if(event.keyCode == 37 && _jetPositionX > 20)
        {            
            _jetPositionX -= _moveSpeed;
            obj = _context.getImageData(0, 0, _jetImageWidth, _jetImageHeight);
            _context.putImageData(obj, _jetPositionX+_moveSpeed, _jetPositionY);
            _context.drawImage(_imageObj, _jetPositionX, _jetPositionY, _jetImageWidth, _jetImageHeight);
        }
        if(event.keyCode == 39 && _jetPositionX < (window.innerWidth-80))
        {
            _jetPositionX += _moveSpeed;
            obj = _context.getImageData(0, 0, _jetImageWidth, _jetImageHeight);
            _context.putImageData(obj, _jetPositionX-_moveSpeed, _jetPositionY);
            _context.drawImage(_imageObj, _jetPositionX, _jetPositionY, _jetImageWidth, _jetImageHeight);
        }
    };
    this.shoot = function(event)
    {
        if(event.keyCode == 32)
        {

        }
    }; 
    
};

