// Your code goes here

let nav = document.querySelector('header');

nav.style.zIndex = '1';

let button = document.querySelectorAll('.btn');

button.forEach(function(btn){
    btn.addEventListener('mouseenter', (event) => {event.target.style.backgroundColor = 'darkblue';});
    btn.addEventListener('mouseleave', (event) => {event.target.style.backgroundColor= '#17A2B8'})
})

let navlink = document.querySelectorAll('.nav-link');

navlink.forEach(function(link) {
    link.addEventListener('mouseover', (event) => {event.target.style.color = 'limegreen'});
    link.addEventListener('mouseout', (event) => {event.target.style.color = 'black'});
    link.addEventListener('click', (event) => {event.preventDefault()})
})

let topPic = document.querySelector('.intro img');

topPic.addEventListener('dblclick', (event) => {event.target.style.display = 'none'});

let pic = document.querySelectorAll('img');

pic.forEach(function(image){
    image.addEventListener('click', (event) => {image.src = 'https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg'})
})

let container = document.querySelector('body');

container.addEventListener('keydown', (event) => {event.target.style.backgroundColor = "lightblue"});

let paragraph = document.querySelectorAll('p');

paragraph.forEach(function(p){
    p.addEventListener('wheel', (event) => {event.target.style.transform = 'scaleY(1.2)'})
    p.addEventListener('copy', (event) => {event.target.style.visibility = 'hidden'})
})

let header = document.querySelector('h1');

header.addEventListener('contextmenu', (event) => {event.target.style.transform = 'scaleX(1.5)'})



