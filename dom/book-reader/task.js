let fontSize = document.querySelectorAll('.font-size');
let bookSize = document.querySelector('.book');

  for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', (e) => {
        e.preventDefault();
        fontSize.forEach(element => element.classList.remove('font-size_active'));
        fontSize[i].classList.add('font-size_active');

        if (fontSize[0].classList.contains('font-size_active')) {
            bookSize.classList.remove('book_fs-big');
            bookSize.classList.add('book_fs-small');
        }

        if (fontSize[1].classList.contains('font-size_active')) {
            bookSize.classList.remove('book_fs-small');
            bookSize.classList.remove('book_fs-big');
        }

        if (fontSize[2].classList.contains('font-size_active')) {
            bookSize.classList.remove('book_fs-small');
            bookSize.classList.add('book_fs-big');
        }
    });
  }


