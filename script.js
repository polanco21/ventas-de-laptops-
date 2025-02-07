function mostrarAlerta() {
    alert("Gracias por tu compra. Nos pondremos en contacto contigo pronto.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Gracias por contactarnos. Te responderemos a la brevedad.");
});
