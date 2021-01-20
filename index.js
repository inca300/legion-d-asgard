"use strict";

const main =  document.querySelector("main");
const icon = document.querySelector(".menu-icon");
let canOpenMenu = true;

icon.addEventListener("click", event => {
    event.stopPropagation();
    if(canOpenMenu) {
        const menu = document.createElement('section');
        menu.className = "menu";
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

        menu.addEventListener('mouseleave', event => {
            menu.remove();
            canOpenMenu = !canOpenMenu;
        });    
    };


});

