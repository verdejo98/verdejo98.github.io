
// Boton de tema noche/día
document.getElementById('modeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Validación de formulario y envío
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && servicio && mensaje) {
        console.log({ nombre, servicio, mensaje });
        alert('Formulario enviado correctamente.');
    } else {
        alert('Por favor, complete todos los campos.');
    }
});