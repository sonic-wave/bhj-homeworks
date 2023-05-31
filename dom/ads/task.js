let rotator = document.querySelectorAll('.rotator__case');
let start = 0;
let end = rotator.length - 1;
let temp = 1;

function rotate() {
    rotator[start].classList.remove('rotator__case_active');
    rotator[temp].classList.add('rotator__case_active');

    if (temp === 5) {
      temp = -1;
    }

    temp++;
    start = temp - 1;
    
    if (start === -1) {
        start = end;
    }
}

setInterval(() => rotate(), 1000); 