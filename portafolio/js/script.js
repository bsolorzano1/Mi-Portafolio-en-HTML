// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling para la navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) { // Verifica si el formulario existe
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            formStatus.textContent = 'Enviando mensaje...';
            formStatus.style.color = '#3498db'; // Azul para "enviando"

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    formStatus.textContent = '¡Mensaje enviado con éxito!';
                    formStatus.style.color = '#2ecc71'; // Verde para éxito
                    contactForm.reset(); // Limpia el formulario
                }, (error) => {
                    formStatus.textContent = `Error al enviar el mensaje: ${error.text || error}`;
                    formStatus.style.color = '#e74c3c'; // Rojo para error
                });
        });
    }

    // Animación al hacer scroll (ejemplo básico de 'fade in')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
               
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1, // Porcentaje del elemento visible para activar la animación
        rootMargin: "0px 0px -50px 0px" // Ajuste para que se active un poco antes de que esté completamente visible
    });

    
    document.querySelectorAll('section, .skill-item, .job-item, .education-item, .project-item').forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });

});