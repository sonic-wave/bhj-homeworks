function getHole(index) {
    return document.getElementById(`hole${index}`)
}

let hole1 = document.getElementById('hole1');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;


for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            if (counterDead === 10) {
                alert('Победа!');
                dead.textContent = 0;
                lost.textContent = 0;
                counterDead = 0;
                counterLost = 0;
            }

            dead.textContent = counterDead++;
        } else {
            if (counterLost === 5) {
                alert('Вы проиграли!');
                dead.textContent = 0;
                lost.textContent = 0;
                counterDead = 0;
                counterLost = 0;
            }

            lost.textContent = counterLost++;
        }
    }
}