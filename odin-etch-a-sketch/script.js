function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
}

function createGrid(borderCorrection){
    const grid = document.querySelector('#grid');
    let numSquares = borderCorrection**2

    for (i=1; i<=numSquares;i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.className = "square";
        

        grid.appendChild(square);

        square.style.height = `${(640-2*borderCorrection)/borderCorrection}px`;
        square.style.width = `${(640-2*borderCorrection)/borderCorrection}px`;
    }
}

createGrid(5)

const gridSize = document.querySelector('#gridSize');
gridSize.addEventListener('click', function(){
    let parent = document.getElementById("grid");
    empty(parent);

    let borderCorrection = parseInt(prompt("size?"));
    createGrid(borderCorrection)
})


// change color when clicking
let penColor = 'black';

const white = document.querySelector('#white')
white.addEventListener('click', function(){
    
    if (penColor == 'white') {
        penColor = 'black';
        white.classList.remove('selected');
    } else {
        penColor = 'white';
        white.classList.add('selected');
    }

})

const yellow = document.querySelector('#yellow')
yellow.addEventListener('click', function(){
    
    if (penColor == 'yellow') {
        penColor = 'black';
        yellow.classList.remove('selected');
    } else {
        penColor = 'yellow';
        yellow.classList.add('selected');
    }
})

const red = document.querySelector('#red')
red.addEventListener('click', function(){
    
    if (penColor == 'red') {
        penColor = 'black';
        red.classList.remove('selected');
    } else {
        penColor = 'red';
        red.classList.add('selected');
    }
})

const blue = document.querySelector('#blue')
blue.addEventListener('click', function(){
    
    if (penColor == 'blue') {
        penColor = 'black';
        blue.classList.remove('selected');
    } else {
        penColor = 'blue';
        blue.classList.add('selected');
    }
})

const squares = document.querySelectorAll('#grid');
squares.forEach(square => square.addEventListener('mousedown', function (e) {
    e.target.style.background = penColor;
  }));
