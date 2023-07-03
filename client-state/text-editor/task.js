/* Основное задание */
const textArea = document.getElementById('editor');
const card = document.querySelector('.card');

textArea.addEventListener('input', () => {
    localStorage.setItem('savedText', textArea.value);
    
});

window.addEventListener('load', () => {
    if (localStorage.getItem('savedText') !== null) {
        textArea.textContent = localStorage.getItem('savedText')
    }
});

/* Кнопка "очистить" */
const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
card.append(clearButton);
clearButton.addEventListener('click', () => {
    localStorage.clear();
    textArea.value = '';
});

