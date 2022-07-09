// Game Constants 

let direction = {x: 0, y: 0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let = lastPaintTime = 0;
let  snakeArr = [
    {x: 13 , y: 15}
]
food = [x: 13, y: 15]
// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
    return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    // Part 1 : Updating the snake array & food

    // Part 2 : Display the snake and food
    // Display he snake
    board.innerHTML = "";
   snakeArr.forEach((e, index)=>{
       snakeElement = document.createElemeent('div');
       snakeElement.style.gridRowStart = e.y;
       snakeElement.style.gridColumnStart = e.x;
       snakeElement.classList.add('head
       board.appendChild(snakeElement);
    });
    // Display the food 
    foodElement = document.createElemeent('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(snakeElement);
}