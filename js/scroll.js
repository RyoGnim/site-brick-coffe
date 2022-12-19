const navbar= document.querySelector('.navbar')



const navOnScroll=()=>navbar.classList.toggle('bg-transparent', scrollY ===0)


window.addEventListener('scroll', navOnScroll)