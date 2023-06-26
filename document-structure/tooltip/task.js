const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(element => {
    const tip = document.createElement('div');
    
    tip.textContent = element.title;
    tip.classList.add('tooltip');
    element.after(tip);

    element.addEventListener('click', (e) => {
        e.preventDefault();
        tip.classList.toggle('tooltip_active');

        let rect = element.getBoundingClientRect();
        tip.style.top = rect.bottom + 5 + 'px';
        tip.style.left = rect.left + 'px';
    });
});
