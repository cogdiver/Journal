menuBurger = document.querySelector('.menu-burger');
menuGrande = document.querySelector('.menu-despleglable');

menuBurger.addEventListener('click', show);

function show(){
    if (menuGrande.classList.contains('deploy')){
        menuGrande.classList.remove('deploy');
    }else{
        menuGrande.classList.add('deploy');
    }
}