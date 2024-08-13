function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Adiciona um evento de clique ao link "Categorias" para abrir o dropdown
document.getElementById("openDropdown").addEventListener("click", toggleDropdown);

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('#openDropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


