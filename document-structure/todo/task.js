const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

button.addEventListener('click', (e) => {
    e.preventDefault();

    input.value.trim();

    if (input.value) {
        const task = document.createElement('div');
        tasksList.appendChild(task);
        task.innerHTML = `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`;
        task.addEventListener('click', () => {
                    task.remove();
                });
    }
    
    form.reset();
});