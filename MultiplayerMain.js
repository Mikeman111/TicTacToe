//Declare all the variables.
var theCanvas;
var c;
var ctx;
var filled = [];
var turn = 0;
var value;
window.onload = function() {
    //When window loads, set all spaces to 0 value.  0 means it is an open space, 1 means it is an X space, and -1 means it is an O space.
for(var l = 0; l<9; l++){
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
   if(filled[number - 1] == 0){
    //Draw the X.
    ctx.moveTo(10,10);
    ctx.lineTo(40,40);
    ctx.stroke();
    ctx.moveTo(40, 10);
    ctx.lineTo(10, 40);
    ctx.stroke();
    //Mark the spot as filled so it can't be filled again
   filled[number - 1]++; 
   //Change the turn to O.
    turn++;
value = 1;
draw();
checkWinner(value);
}else{
           alert("This spot is already taken! Please chose another spot!");
       }
       
}else{
   if(filled[number - 1] == 0){    
    //Draw a Circle for O.
ctx.beginPath();
ctx.arc(25,25,20,0,2*Math.PI);
ctx.stroke();
       //Mark the spot as filled.
   filled[number - 1]--; 
   //Change the turn to O.
    turn++;
value = -1;
draw();
checkWinner(value);
}else{
           alert("This spot is already taken! Please chose another spot!");
       }    
    }
}
//Function to check for Winners
var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function checkWinner(number) {
for(var w = 0; w<win.length; w++){
if(filled[win[w][0]]==number&&filled[win[w][1]]== number&&filled[win[w][2]]==number){
if(number == 1){
    alert("X Wins!!");
    playAgain();
    }else{
    alert("O Wins!!");
    playAgain();
    }
}
}
}
function draw() {
    if(turn == 9){
        alert("Oh No! It is a draw!")
        playAgain();
        };
    }
function playAgain() {
  var response = confirm("Do you wish to play again?");
  if(response){
      alert("Clearing Game Board!");
      for(var x = 1; x <10; x++){
theCanvas = "canvas"+x;
c = document.getElementById(theCanvas);
ctx = c.getContext("2d");
ctx.clearRect(0, 0, 300, 150);
          }
      }
    }
