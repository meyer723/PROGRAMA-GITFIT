document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtén los valores ingresados por el usuario
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    // Lógica para validar usuario y contraseña
    if (usuario === 'villa' && password === 'fit') {
        window.location.href = 'modulos.html'; // Redirigir a la página de módulos
    } else {
        // Mostrar mensaje de error o realizar otra acción si las credenciales son incorrectas
        alert('Usuario o contraseña incorrectos');
    }
});
