// JavaScript para alternar as seções
function showSection(sectionId, esseElemento) {
    // Oculta todas as seções
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var linkMenu = document.querySelectorAll('.linkedUnderline');
    linkMenu.forEach(function(links) {
        links.classList.remove('underline');
    });

    // Mostra a seção selecionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    esseElemento.classList.add('underline');
    console.log(esseElemento)
}
