const canvas = document.querySelector(`.canvas`);
// create a 16 x 16 grid of divs
// form will be like a matrix

// mouse colours
let mouseColor = 'red';

function changeColor() {
    switch (this.className) {
        case "red":
            mouseColor = 'red';
            break;
        case 'orange':
            mouseColor = 'orange';
            break;
        case 'yellow':
            mouseColor = 'yellow';
            break;
        case 'green':
            mouseColor = 'green';
            break;
        case 'blue':
            mouseColor = 'blue';
            break;
        case 'purple':
            mouseColor = 'purple';
            break;
        case 'brown':
            mouseColor = '#964B00';
            break;
        case 'white':
            mouseColor = 'white';
            break;
        case 'black':
            mouseColor = 'black';
            break;
        case 'clear':
            const cellUpdater = (canvas.querySelectorAll('.cell'));
            const prevMouseColor = mouseColor;
            mouseColor = 'white';
            for (let i = 0; i < cellUpdater.length; ++i) {
                let temp = cellUpdater[i];
                temp.style.cssText = `background-color: white`;
            }
            mouseColor = prevMouseColor;
    }
}
// buttons - grab with selector and assign with function
const buttons = Array.from(document.querySelectorAll('button'));
for (let i = 0; i < buttons.length; ++i) {
    let temp = buttons[i];
    temp.addEventListener('click', changeColor);
}

// function for drawing color
function drawColor() {
    this.style.cssText = `background-color: ${mouseColor}`;
}

for (let i = 1; i <= 16 * 16; ++i) {
    const newDiv = document.createElement(`div`);
    newDiv.classList.add(`cell`);
    newDiv.classList.add(`cell-${i}`);
    newDiv.textContent = " ";
    newDiv.setAttribute('style', 'background-color: white');
    newDiv.addEventListener('mouseover', drawColor);
    canvas.appendChild(newDiv);
}