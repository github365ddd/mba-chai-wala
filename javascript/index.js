const humberger = document.querySelector('.humberger');
const menu = document.querySelector('.menu');

humberger.addEventListener('click', () =>{
    
    humberger.classList.toggle('active');
    menu.classList.toggle('active');
});