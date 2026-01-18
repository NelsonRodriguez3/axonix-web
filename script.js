// Parallax header + efecto de movimiento en contenido
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerContent = document.querySelector('.header-content');
    let offset = window.scrollY;

    // Parallax del fondo
    header.style.backgroundPositionY = offset * 0.5 + 'px';

    // Movimiento suave del contenido (header)
    headerContent.style.transform = `translateY(${offset * 0.2}px)`;
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


// Formulario de contacto (frontend)
// Seleccionamos el formulario
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que recargue la página

    // Tomamos los datos del formulario
    const data = {
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value
    };

    try {
        // URL de tu Worker
        const response = await fetch('https://axonix-contact.rabatrixnelson.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert('¡Mensaje enviado con éxito!');
            form.reset(); // Limpia el formulario
        } else {
            alert('Error al enviar el mensaje. Intente nuevamente.');
        }
    } catch (error) {
        console.error(error);
        alert('Error de conexión. Intente nuevamente.');
    }
});
