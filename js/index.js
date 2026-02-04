/**
 * Control del Menú Móvil DEV_CODE
 */
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    // Alternar clase activa para la animación de la hamburguesa
    mobileMenu.classList.toggle('active');
    // Alternar clase show para mostrar el menú
    navList.classList.toggle('show');
});

// Cerrar menú al hacer clic en un enlace (ideal para Single Page Apps)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navList.classList.remove('show');
    });
});