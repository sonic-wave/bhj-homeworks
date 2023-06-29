let xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        
        const answer = response.data.answers;
        console.log(answer)
        answer.forEach(element => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('poll__answer');
            answerButton.innerHTML = element;
            answers.append(answerButton);
        });

        pollTitle.append(response.data.title);

        const button = document.querySelectorAll('.poll__answer');
        button.forEach(element => element.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!')));
    }
}