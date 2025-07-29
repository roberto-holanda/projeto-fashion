"use strict";

/*
    Apenas uma simulação do efeito scroll-behavior: smooth; do CSS3 em Javascript. 
    Primeira Função => Executa o script após o carregamento da página. 
    Segunda Função => Adiciona o efeito suave de scroll no elemento de id = "redirection" do HTML5.
    Terceira Função => Insere o ano atual no <footer> da página. 
*/

document.addEventListener("DOMContentLoaded", function() {
    const redirection = document.getElementById("redirection");
    if (redirection) {
        redirection.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToElement("part");
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

const set_year = (y) => {
    let year_now = new Date().getFullYear();
    return y.prepend(year_now)
}

const get_year = document.getElementById("year");
set_year(get_year)