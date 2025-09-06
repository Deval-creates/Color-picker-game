let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = [
    'red','orange','blue','green','black','grey','hotpink','purple','white',
    'yellow','lightgreen','maroon','khaki','brown','navy','indigo'
];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function shuffleArray(colors){
    for(let i = colors.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors; 
}

function createGrid(){
    grid.innerHTML = "";
    colors = shuffleArray(colors);
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    targetColorDisplay.textContent = targetColor;

    colors.forEach((color) =>{
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;   // ✅ fixed camelCase
        box.addEventListener('click', ()=>{ handleClick(color); });
        grid.appendChild(box);
    });
}

function handleClick(clickedColor){
    if(clickedColor === targetColor){
        score++;
        scoreDisplay.textContent = score;
        createGrid(); // refresh new grid when correct
    } else {
        alert("❌ Wrong choice! Try again.");
    }
}


function startGame(){
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    createGrid();

    clearInterval(timer); // clear old timer if any
    timer = setInterval(()=>{
        time--;
        timeDisplay.textContent = time;
        if(time === 0){
            clearInterval(timer);
            alert("⌛ Time's up! Your final score: " + score);
        }
    }, 1000);
}
