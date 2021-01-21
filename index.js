"use strict";

const main =  document.querySelector("main");
const icon = document.querySelector(".menu-icon");
const body = document.querySelector("body");
let canOpenMenu = true;

icon.addEventListener("click", event => {
    event.stopPropagation();
    displayMenu();
});

const displayMenu = () => {
    if(canOpenMenu) {
        const menu = document.createElement("section");
        menu.className ="menu";
        menu.style.animation = 'menu-open 0.2s';
        menu.insertAdjacentHTML("afterbegin",`
        <ul>
            <li>
                <p><a class="menu-text" href="">Qui sommes-nous ?</a></p>
                <span></span>
            </li>
            <li>
                <p><a class="menu-text" href="">Nous rejoindre</a></p>
                <span></span>
            </li>
            <li>
                <p><a class="menu-text" href="">Nous contacter</a></p>
                <span></span>
            </li>
        </ul>
        `);
        main.append(menu);
        canOpenMenu = !canOpenMenu

        body.addEventListener('click', event => {
            menu.style.animation = 'menu-close 0.2s';
            setTimeout(() => menu.remove(), 100);
            canOpenMenu = true;
        });    
    };
};

