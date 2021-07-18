var sidebar = document.getElementsByClassName('sidebar')[0];
var bars = document.getElementsByClassName('fa-bars')[0];
var times = document.getElementsByClassName('fa-times')[0];
console.log(sidebar);

bars.addEventListener('click', ()=> {
    console.log('cliked');
    sidebar.classList.add('show-sidebar');
    bars.classList.add('hide-bars');
})

times.addEventListener('click', ()=> {
    console.log('cliked');
    sidebar.classList.remove('show-sidebar');
    bars.classList.remove('hide-bars');
})