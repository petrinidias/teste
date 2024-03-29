

var icon = document.getElementById("theme");


function calcular() {
    document.body.classList.toggle("dark-theme");
    const isDarkMode = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkMode", isDarkMode);
}

window.addEventListener('DOMContentLoaded', ()=>{
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-theme");
    }

    var text = document.querySelector('span#time')
    const dataAtual = new Date();
    let horas = dataAtual.getHours();

    if (horas >= 5 && horas <= 11) {
    text.innerHTML = "Bom dia!"
    } else if (horas >= 12 && horas <= 17) {
    text.innerHTML = "Boa tarde!"
    } else {
    text.innerHTML = "Boa noite!"
    }

})
