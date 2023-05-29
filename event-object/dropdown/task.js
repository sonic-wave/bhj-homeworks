let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', () => dropdownList.classList.add('dropdown__list_active'));

dropdownItem.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownValue.textContent = element.textContent;
    dropdownList.classList.remove('dropdown__list_active');
}));

