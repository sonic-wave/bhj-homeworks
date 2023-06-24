const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value) {
        const div = document.createElement('div');
        tasksList.appendChild(div);
        div.innerHTML = `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`;
    }

    const taskRemove = document.querySelectorAll('.task__remove');
    const task = document.querySelectorAll('.task');

    for (let i = 0; i < taskRemove.length; i++) {
        taskRemove[i].addEventListener('click', () => {
            task[i].remove();
        });
    };
    
    form.reset();
});