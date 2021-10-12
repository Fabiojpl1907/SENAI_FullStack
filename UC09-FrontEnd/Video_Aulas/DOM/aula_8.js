// Scrollto
// me leva para algum lugar da pagina
// pode sr usado para ir a uma seção dentro de uma single page
// é usado em jogos


// ir ao fim da pagina
function fim() {
    window.scrollTo(0,document.body.scrollHeight)
};

// voltar ao topo da pagina
function topo() {
    window.scrollTo(
        {
            // coordenadas para onde o cursor vai
            top: 0,
            left: 0,

            // de que forma ( comportamento) a transiçãose dara
            // auto : rápido   smooth: devagar
            // behavior: 'auto'  
            behavior: 'smooth'
        }
    )
};