/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function initiator()
{
    canvas = document.getElementById("fighterCanvas");
    var context = canvas.getContext("2d");
    worldX.drawWorldX(context);
    
    //Set Jet Variables
    var imageObj            = new Image();
    imageObj.src            = 'images/fighter.png';
    imageObj.name           = 'jet';
    imageObj.id             = 'jet';
    var jetWidth            = 50;
    var jetHeight           = 63;
    var jetInitialPositionX = (window.innerWidth/2)-(jetWidth/2);
    var jetInitialPositionY = window.innerHeight - jetHeight - 300;
    var jetMoveSpeed        = 30;
    
    var jet = new Jet();
    
    jet.initialise(context, imageObj, jetWidth, jetHeight, jetInitialPositionX, jetInitialPositionY, jetMoveSpeed);
    
    jet.createJet();
    document.addEventListener("keypress",jet.moveJet);

}

