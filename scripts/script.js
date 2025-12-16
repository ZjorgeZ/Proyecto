// script.js
document.getElementById('formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('mensaje');

    // Simulación de la verificación de credenciales (¡NO USAR EN PRODUCCIÓN!)
    if (usuario === 'jorge' && contrasena === '1234') {
        mensaje.textContent = '¡Inicio de sesión exitoso!';
        mensaje.style.color = 'green';
        // Redirigir a index.htm después de una breve pausa para mostrar el mensaje
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    } else {
        mensaje.textContent = 'Usuario o contraseña incorrectos.';
        mensaje.style.color = 'red';
    }
});
