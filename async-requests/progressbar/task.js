const progress = document.getElementById('progress');
let xhr = new XMLHttpRequest();
const form = document.getElementById('form');
const send = document.getElementById('send');
const file = document.getElementById('file');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fileToUpload = file.files[0];
    const formSent = new FormData();
    
    formSent.append('file', fileToUpload)
    
    xhr.upload.addEventListener('progress', progressHandler, false);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formSent);

    function progressHandler(event) {
        const percentLoaded = Number((event.loaded / event.total).toFixed(1));            
        progress.value = percentLoaded;
    }
})
