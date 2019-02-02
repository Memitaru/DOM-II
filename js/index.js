// Your code goes here

let button = document.querySelectorAll('.btn');

button.forEach(function(btn){
    btn.addEventListener('click', (event) => { event.target.style.backgroundColor = 'darkblue'; });
})

