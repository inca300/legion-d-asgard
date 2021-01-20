"use strict";

const main =  document.querySelector("main");
const icon = document.querySelector(".menu-icon");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
let canOpenMenu = true;

icon.addEventListener("click", event => {
    event.stopPropagation();
    displayMenu();
});

const displayMenu = () => {
    if(canOpenMenu) {
        const menu = document.createElement('section');
        menu.className = "menu";
        menu.style.animation = 'menu-open 0.2s';
        menu.innerHTML = `
        <ul>
            <li>
                <p><a href="">Qui sommes-nous ?</a></p>
                <span></span>
            </li>
            <li>
                <p><a href="">Nous rejoindre</a></p>
                <span></span>
            </li>
            <li>
                <p><a href="">Nous contacter</a></p>
                <span></span>
            </li>
        </ul>
        `;
        main.append(menu);
        canOpenMenu = !canOpenMenu;

        body.addEventListener('click', event => {
            menu.style.animation = 'menu-close 2s';
            menu.remove();
            canOpenMenu = !canOpenMenu;
        });    
    };
};

