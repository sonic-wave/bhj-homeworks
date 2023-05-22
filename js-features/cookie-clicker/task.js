const clickerCookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let counter = 0;

function clickerAction() {
    if (clickerCookie.width === 200) {
        clickerCookie.width = 300;
    } else {
        clickerCookie.width = 200;
    }
    
    counter++;
    clickerCounter.textContent = counter;
}


clickerCookie.onclick = clickerAction;
