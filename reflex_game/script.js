//Score counter
let currentScore = 0;

//boolean used to check if the game is currently running
let playing = false;

//variables of shapes to be compared
let shape1;
let shape2;

let repeatRandomShape;

let life;
let lives = [];
let livesCount = document.getElementById("livesCount");
addLife();
addLife();
addLife();

let matchBtn = document.getElementById("match");

//array of possible shapes
const shapes = [
    {color: '#FF595E', width: 250, height: 160},
    {color: '#FF595E', width: 270, height: 150},
    {color: '#FFCA3A', width: 320, height: 170},
    {color: '#FF595E', width: 290, height: 140},
    {color: '#8Ac926', width: 190, height: 160},
    {color: '#8Ac926', width: 210, height: 312},
    {color: '#67F323', width: 240, height: 170},
    {color: '#67F323', width: 250, height: 160},
    {color: '#AC54AC', width: 230, height: 150},
    {color: '#961212', width: 250, height: 160},
]

//function selecting random shape from the array 'shapes' and returns it to a new variable
const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    const randomShape = shapes[randomNum];
    return randomShape;
}

//Add a life
function addLife() {

    let newLife = document.createElement("img");
    newLife.setAttribute("src", "images/heart.png");
    newLife.setAttribute("width", "40px");
    lives.push(newLife);
    renderLife();
}

//Render life on display
function renderLife() {
    lives.forEach(element => {
        livesCount.appendChild(element);
    });
}

//Assign random shapes to variables 
function randomShape() {
        matchBtn.disabled = false;
        shape1 = selectRandomShape();
        shape2 = selectRandomShape();
    
        const shape1Styles = `width:${shape1.width+'px'};
                              background:${shape1.color};
                              height:${shape1.height+"px"};`
        document.getElementById("shape1").style.cssText = shape1Styles;
    
        const shape2Styles = `width:${shape2.width+'px'};
                              background:${shape2.color};
                              height:${shape2.height+"px"};`
        document.getElementById("shape2").style.cssText = shape2Styles;
}


//Start game
document.getElementById("play").onclick = () => {
    playing = true;
    repeatRandomShape = setInterval(randomShape,1000);
    document.getElementById("play").disabled = true;
}

//Compare
matchBtn.onclick = () => {
    
    if(playing) {
        matchBtn.disabled = true;
        if(Object.is(shape1, shape2)) {
            currentScore++;
            document.getElementById("score").innerHTML = "Score: " + currentScore;
        } else {
            currentScore--;
            lives.pop();
            livesCount.removeChild(livesCount.firstChild);
            checkLives();
            document.getElementById("score").innerHTML = "Score: " + currentScore;
        }
    }
}

//Stop and reset the game
function stopGame() {
    clearInterval(repeatRandomShape);
    playing = false;
    document.getElementById("play").disabled = false;
    currentScore = 0;
    addLife();
    addLife();
    addLife();
}

//Check how many lives left
function checkLives() {
    if (lives.length == 0) {
        alert("Game Over!! Your score is " + currentScore);
        stopGame();
    }
}