const $id = (el) => document.getElementById(el);

const $navMenu = $id('navMenu');
const navMenuGetQuery = (el) => $navMenu.querySelector(`.navMenu__${el}`);

const openMenu = () =>{
    navMenuGetQuery('opener').classList.toggle('active');
    navMenuGetQuery('ul').classList.toggle('open');
    document.body.classList.toggle('bodyNoOverflow');
}

window.addEventListener('DOMContentLoaded',()=>{

    $navMenu.addEventListener('click',(e)=>{
        const actions = {
            "openMenu":openMenu()
        }
        if(actions[e.target.dataset.function]) actions[e.target.dataset.function]();
    })

})