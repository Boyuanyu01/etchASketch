// reference: https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function random_rgba() {
    const r = getRandomIntInclusive(0, 255);
    const g = getRandomIntInclusive(0, 255);
    const b = getRandomIntInclusive(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

var color = random_rgba();
function makeGrids(rowNum, colNum){
    for(let r = 0; r < rowNum; r++){
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
    }
    let rows = document.getElementsByClassName('row');
    for(let i = 0; i < rowNum; i++){
        for(let j = 0; j < colNum; j++){
            let grid = document.createElement('div');
            grid.className = 'grid';
            rows[i].appendChild(grid);
        }
    }
    const grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        grid.addEventListener('pointerover', function (e) {
            e.target.style.background = random_rgba();
        });
    });
}

const body = document.querySelector('body');
const h = document.createElement('h1');
h.textContent = 'Your Sketch Board';
h.style.color = 'Green';
body.appendChild(h);
const button = document.createElement('button');
button.textContent = 'Resize Grids!'
button.style.width = '90px';
button.style.margin = '12px';
body.appendChild(button);

const button1 = document.createElement('button');
button1.textContent = 'Reset!'
button1.style.width = '90px';
button1.style.margin = '12px';
body.appendChild(button1);

const container = document.createElement('container');
container.id = 'container';
body.appendChild(container);
makeGrids(16, 16);
button.addEventListener('click', function(){
    container.replaceChildren();
    let gridSize = prompt('Please enter grid size (a single integer <= 100):');
    if (gridSize === null) {
        gridSize = 16;
    }
    else{
        gridSize = parseInt(gridSize);
        if (gridSize > 100) {
            gridSize = 100;
        }
    }
    makeGrids(gridSize, gridSize);
})

button1.addEventListener('click', function () {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.style.background = 'white';
    })
})
