const mainBlock = document.querySelector('.main-block');
const createButton = document.querySelector('.create-grid');
const cleanButton = document.querySelector('.clean-span');
const randomText = document.querySelector('#random-text');

createButton.addEventListener('click', cleanGrid);
cleanButton.addEventListener('click', cleanSpan);


let colorMode = 'normal';

function cleanSpan() {
    const allSpans = document.querySelectorAll('span');
    if (allSpans.length === 0) return;
    allSpans.forEach(span => {
        span.removeAttribute('style');
    });
}
function cleanGrid() {
    const oldGrid = document.querySelector('.new-grid');
    if (!(oldGrid === null)) mainBlock.removeChild(oldGrid);
    getUserInput();
}
function getUserInput() {
    const rowsNumber = +document.getElementById('input-row').value;
    const colNumber = +document.getElementById('input-col').value;
    if (Number.isNaN(rowsNumber) || Number.isNaN(colNumber)) return;
    if ((rowsNumber < 0 || rowsNumber > 1000) || (colNumber < 0 || colNumber > 1000)) return;  
    const gridParameters = [rowsNumber, colNumber];
    createGrid(gridParameters);
}
function createGrid(gridParameters) {
    const gridList = gridParameters;
    const grid = document.createElement('div');
    grid.classList.add('new-grid');
    grid.setAttribute('style', `grid-template: repeat(${gridList[0]}, auto) / repeat(${gridList[1]}, auto)`);
    addSpan(gridList, grid);
}
function addSpan(gridParameters, gridElement) {
    const totalSpan = gridParameters[0] * gridParameters[1];
    for (let index = 0; index < totalSpan; index++) {
        let createSpan = document.createElement('span');
        createSpan.classList.add('span-child');
        gridElement.appendChild(createSpan);
    }
    mainBlock.appendChild(gridElement);
    addEventSpan();
}
function addEventSpan() {
    const allSpans = document.querySelectorAll('span');
    allSpans.forEach(span => {
    span.addEventListener('mouseover', colorSpan);
});
}
function colorSpan() {
    if (colorMode === 'normal') {
        this.setAttribute('style', 'background-color: black');
    }  else {
            let rColor = (Math.random() * 255).toFixed(0);
            let gColor = (Math.random() * 255).toFixed(0);
            let bColor = (Math.random() * 255).toFixed(0);
            this.setAttribute('style', `background-color: rgb(${rColor}, ${gColor}, ${bColor})`);
        }
    };