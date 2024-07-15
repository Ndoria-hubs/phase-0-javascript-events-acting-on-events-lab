// Your code 
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#000000';
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '100px';
dodger.style.bottom = '0px';



function moveDodgerLeft() {
    dodger.style.left = '0px';
    dodger.style.marginBottom = '200px';
}
moveDodgerLeft()


function moveDodgerRight() {
    dodger.style.left = '360px'
    dodger.style.marginBottom = '200px';
}
moveDodgerRight()

