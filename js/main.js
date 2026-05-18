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

// ==========================================================================
// GESTIÓN LEGAL DEL BANNER DE COOKIES
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner-cookies');
    const botonAceptar = document.getElementById('aceptar-cookies');

    // Comprobamos si el usuario ya aceptó las cookies en el pasado
    if (!localStorage.getItem('cookies-aceptadas')) {
        // Si no existe el registro, le mostramos el banner
        if (banner) banner.style.display = 'block';
    }

    // Al hacer clic en el botón de aceptar
    if (botonAceptar) {
        botonAceptar.addEventListener('click', () => {
            // Guardamos la decisión en la memoria del navegador (localStorage)
            localStorage.setItem('cookies-aceptadas', 'true');
            // Ocultamos el banner con suavidad
            if (banner) banner.style.display = 'none';
        });
    }
});
