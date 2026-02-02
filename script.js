// Parallax header + efecto de movimiento en contenido
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const headerContent = document.querySelector('.header-content');
    const offset = window.scrollY;

    if (header) header.style.backgroundPositionY = offset * 0.5 + 'px';
    if (headerContent) headerContent.style.transform = `translateY(${offset * 0.2}px)`;
});

// Animaciones al hacer scroll (reveal)
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// IMPORTANTE: esto hace que se vean las secciones al cargar
window.addEventListener('load', revealOnScroll);

// Mensaje simple al enviar (FormSubmit)
// Mensaje al enviar formulario (FormSubmit)
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

if (form && msg) {
    form.addEventListener('submit', () => {
        msg.textContent = "Enviando mensaje...";
        msg.className = "success";

        // Evita doble click / doble envío
        const button = form.querySelector("button[type='submit']");
        if (button) {
            button.disabled = true;
            button.textContent = "Enviando...";
        }
    });
}