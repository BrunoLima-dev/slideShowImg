'use strict';

const images = [
    {'id' : '1', 'url' : 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true'},
    {'id' : '2', 'url' : 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true'},
    {'id' : '3', 'url' : 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true'},
    {'id' : '4', 'url' : 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true'},
    {'id' : '5', 'url' : 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true'},
    {'id' : '6', 'url' : 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {container.innerHTML += 
            <div class="item"><img src="${image.url}"</div>        
    })
}