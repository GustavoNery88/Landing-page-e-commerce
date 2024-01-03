document.addEventListener('DOMContentLoaded', function () {
    let secoes = document.querySelectorAll("section");
    let cabecalhoBotao = document.querySelector(".navbar-toggler");
    let offcanvas = new bootstrap.Offcanvas(document.getElementById('navbarTogglerDemo02')); // Adicionado para obter referência ao offcanvas

    function marcarLinkInicio() {
        let navLinks = document.querySelectorAll(".cabecalho-nav a");
        navLinks.forEach(link => {
            link.classList.remove('ativado');
        });
        navLinks[0].classList.add('ativado');
    }

    marcarLinkInicio();

    cabecalhoBotao.addEventListener("click", marcarLinkInicio);

    document.querySelectorAll(".cabecalho-nav a").forEach(link => {
        link.addEventListener('click', () => {
            offcanvas.hide();
        });
    });

    window.onscroll = () => {
        secoes.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                let navLinkAtual = document.querySelector('.cabecalho-nav a[href*=' + id + ']');
                if (navLinkAtual) {
                    document.querySelectorAll(".cabecalho-nav a").forEach(link => {
                        link.classList.remove('ativado');
                    });
                    navLinkAtual.classList.add('ativado');
                }
            }
        });

        let cabecalho = document.querySelector("header");
        cabecalho.classList.toggle('sticky', window.scrollY > 100);
    };
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    }) 
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=> observer.observe(el))


