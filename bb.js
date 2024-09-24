function sendRecoveryEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Aquí puedes añadir la lógica para enviar el correo de recuperación
    // (en un entorno real, este formulario se procesaría en el backend)

    // Simulación de éxito:
    document.getElementById('message').textContent = "Enlace de recuperación enviado a " + email;
}