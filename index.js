 
 
 let boxSize =25 ; 
 let rows = 20 ; 
 let columns =20 ; 
 let board; 
 let contxt; 
 
 let gameOver= false; 

 let text = document.querySelector("h1"); 

//  make the snake  
 let snakeX = boxSize * 5 ; 
 let snakeY = boxSize * 5 ; 
// make the food 
let foodX 
let foodY  
//moving 
let vX =0;
let vY =0;
//snakeBody: 
let snakeBody = [];
// the score : 
let score = 0 ; 
let scoreText = document.getElementById("score");

 window.onload = function(){
   
  board = document.querySelector("#board");
  board.height= boxSize * rows;
  board.width= boxSize * columns;
  contxt = board.getContext("2d"); 

  placeFood();
  document.addEventListener("keydown" , moving);
  moveWithButtons()
   

  // update()
  setInterval(update ,100)
 } 
  

 function update() {
  
  if(gameOver){
    text.style.color="red";
    text.innerHTML="Game Over !";
    
    return; 
  }

  contxt.fillStyle="black"; 
  contxt.fillRect(0,0 ,board.width ,board.height); 
 

  contxt.fillStyle="red"; 
  contxt.fillRect(foodX , foodY , boxSize ,boxSize);
  

  if(foodX ===snakeX && foodY === snakeY){
    snakeBody.push([foodX , foodY]); 
    increaseScore()
    placeFood();
  }
  
  
  for(let i= snakeBody.length -1 ; i>0 ; i--){
      snakeBody[i] = snakeBody[i - 1]; 
  }
   
  if(snakeBody.length) {
    snakeBody[0] = [snakeX , snakeY]
  }
   

  contxt.fillStyle="yellow"; 
  snakeX += vX * boxSize;  
  snakeY += vY * boxSize; 
   

  contxt.fillRect(snakeX , snakeY , boxSize ,boxSize);
   
   

   
  for(let i=0 ; i< snakeBody.length ; i++) {
    contxt.fillStyle="green"; 
    contxt.fillRect(snakeBody[i][0] ,snakeBody[i][1], boxSize , boxSize)
  }

  if(snakeX < 0 || snakeX >= boxSize * columns || snakeY <0 || snakeY>= boxSize * rows){
    gameOver=true; 
  }
  
  for(let i=0; i< snakeBody.length ; i++) {
    if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
      gameOver =true; 
    }
  }
 }

 function placeFood(){
  foodX = Math.floor(Math.random()*columns) *boxSize; 
  foodY = Math.floor(Math.random()*columns) *boxSize; 
 }
  
 function moving(event) {
  switch (event.key) {
    case "s":
      if(vY != -1){
      
      vY = 1  ;
      vX=0;
    } else{
      break
    }
       
       
      
      break;
    case "w":
      if(vY != 1) {
        vY = -1  
        vX=0; 
      }else {
        break; 
      }
      
      break;
    case "d":
      if(vX != -1) {
      vY =0;
      vX = 1  ; 
      }else {

      break; 
    }
      break;
    case "a":
      if(vX != 1) {
      vY =0;
      vX = -1  ; }else{
        break;
      }
      break;
    default:
      break;
  }
}
function moveWithButtons() {   
    
for(let i=1; i<=4 ; i++) {
      let btn =  document.getElementsByTagName("button")[i].addEventListener("click" , function(){
        switch (this.innerHTML) {
          case "down":
            if(vY != -1){
            
            vY = 1  ;
            vX=0;
          } else{
            break
          }
             
             
            
            break;
          case "up":
            if(vY != 1) {
              vY = -1  
              vX=0; 
            }else {
              break; 
            }
            
            break;
          case "right":
            if(vX != -1) {
            vY =0;
            vX = 1  ; 
            }else {
      
            break; 
          }
            break;
          case "left":
            if(vX != 1) {
            vY =0;
            vX = -1  ; }else{
              break;
            }
            break;
          default:
            break;
        }
      }) ;
      
}
}
 
let btnR = document.querySelector(".rBtn").addEventListener("click" , function(){
  window.location.reload();
})
function increaseScore(){
  score  +=10; 
  scoreText.innerText= "score : " + score; 
}
let rules = document.querySelector(".rules"); 

 document.querySelector(".ruleButton").addEventListener("click" , function(){ 
    rules.classList.toggle("show")
 }); 


 


 
 