// js/main.js

// CONTROLADOR DEL MENÚ RESPONSIVE ELENA GREGORIO HURTADO
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuNavegacion = document.getElementById('menuNavegacion');

    if (menuToggle && menuNavegacion) {
        menuToggle.addEventListener('click', () => {
            // Añade o quita la clase .active al menú y al botón al hacer clic
            menuNavegacion.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Accesibilidad técnica para dispositivos de lectura de pantalla
            const esAbierto = menuNavegacion.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', esAbierto);
        });
    }
});