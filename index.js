const menu=document.getElementsByClassName('menu')[0]
const navbar=document.getElementsByClassName('navmob')[0]

menu.addEventListener('click',()=>{navbar.classList.toggle('active')})