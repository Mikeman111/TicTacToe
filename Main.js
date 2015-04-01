//Declare all the variables.
var theCanvas;
var c;
var ctx;
var filled = [];
var turn = 0;
window.onload = function() {
    //When window loads, set all spaces to 0 value.  0 means it is an open space, 1 means it is an X space, and -1 means it is an O space.
for(var l = 1; l<10; l++){
    filled[l] = 0;
    }
}
function canvasClicked(number){
    //When you click on one of the canvases, it retrieves canvases number and runs the function on that number canvas
theCanvas = "canvas"+number;
c = document.getElementById(theCanvas);
ctx = c.getContext("2d");
if(turn%2 == 0){
    //If the turn is divisible by 2, it is an X turn.
   if(filled[number] == 0){
    //Draw the X.
    ctx.moveTo(10,10);
    ctx.lineTo(40,40);
    ctx.stroke();
    ctx.moveTo(40, 10);
    ctx.lineTo(10, 40);
    ctx.stroke();
    //Mark the spot as filled so it can't be filled again
   filled[number]++; 
   //Change the turn to O.
    turn++;
}else{
           alert("This spot is already taken! Please chose another spot!");
       }
       
}else{
   if(filled[number] == 0){    
    //Draw a Circle for O.
ctx.beginPath();
ctx.arc(25,25,20,0,2*Math.PI);
ctx.stroke();
       //Mark the spot as filled.
   filled[number]--; 
   //Change the turn to O.
    turn++;
}else{
           alert("This spot is already taken! Please chose another spot!");
       }    
    }
}

