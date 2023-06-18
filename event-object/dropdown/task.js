let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelectorAll('.dropdown__value');
let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownList.classList.add('dropdown__list_active')
}));

dropdownItem.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();
    
    for (let i = 0; i < dropdownValue.length; i++) {
        dropdownValue[i].textContent = element.textContent;
    }
    dropdownList.classList.remove('dropdown__list_active');
}));

