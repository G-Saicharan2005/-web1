const xhr = new XMLHttpRequest();
xhr.addEventListener('load', function() {
    console.log('Response from server:', this.responseText);
});  
xhr.open('GET', 'https://supersimplebackend.dev/', true);
xhr.send();
