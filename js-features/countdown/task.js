let counter = 59;

const setTimer1 = function() {
    const timer = document.getElementById("timer");
    counter--;
    timer.textContent = counter;
    
    if (counter === 0) {
        clearTimeout(timerId);
        alert("Вы победили в конкурсе!");
    }
}

let timerId = setInterval(setTimer1, 1000);
