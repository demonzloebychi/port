const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const link = document.querySelector('.menu__item')


if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menu.querySelectorAll('.menu__item').forEach(link => {
        link.addEventListener('click', function(e) {
            document.body.classList.remove('lock');
            menu.classList.remove('active');
            burger.classList.remove('active');
        })
    })
    
}


const anchors = document.querySelectorAll("a[href*='#']")

for (let anchor of anchors){
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(' ' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
       
    })
}


