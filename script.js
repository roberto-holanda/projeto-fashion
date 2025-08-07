"use strict";

/*
    Apenas uma simulação do efeito scroll-behavior: smooth; do CSS3 em Javascript. 
*/

document.addEventListener("DOMContentLoaded", function() {
    const redirection = document.getElementById("redirection");
    const redirection_url = document.getElementById("redirection-url");
    if (redirection) {
        redirection.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToElement("part");
        });
    }

    if (redirection_url){
        redirection_url.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToElement("url");
        });
    }
});

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }
}

const set_year = () => {
    const get_year = document.getElementById("year");
    let year_now = new Date().getFullYear();
    return get_year.prepend(year_now)
}
set_year();