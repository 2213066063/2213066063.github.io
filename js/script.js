// functions.js

// Función para cambiar el color de fondo del encabezado al hacer clic
function cambiarColorFondoHeader() {
    var header = document.getElementById('header');
    header.style.backgroundColor = getRandomColor();
}
// Función para cambiar el color de fondo de la barra morada al desplazarse hacia abajo
function cambiarColorFondoBarraMorada() {
    var purpleBar = document.querySelector('.purple-bar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            purpleBar.style.backgroundColor = getRandomColor();
        }
    });
}

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
