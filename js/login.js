document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos de la interfaz
    const sectionRegister = document.getElementById('section-register');
    const sectionLogin = document.getElementById('section-login');
    
    const linkToLogin = document.getElementById('go-to-login');
    const linkToRegister = document.getElementById('go-to-register');

    // 2. Lógica para intercambiar formularios
    linkToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        sectionRegister.classList.add('d-none');
        sectionLogin.classList.remove('d-none');
    });

    linkToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        sectionLogin.classList.add('d-none');
        sectionRegister.classList.remove('d-none');
    });

    // 3. Mostrar/Ocultar contraseñas
    const toggleBtns = document.querySelectorAll('.toggle-pass');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const inputId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(inputId);
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                this.textContent = '👁';
            }
        });
    });

    // 4. Manejo de SweetAlert2 para Registro
    document.getElementById('btn-submit-register').addEventListener('click', () => {
        // Simulación de registro exitoso
        Swal.fire({
            title: 'Success!',
            text: 'Account created successfully. Welcome to Dev_Code!',
            icon: 'success',
            confirmButtonColor: '#00adb5',
            confirmButtonText: 'Great!'
        });
    });

    // 5. Manejo de SweetAlert2 para Login
    document.getElementById('btn-submit-login').addEventListener('click', () => {
        // Simulación de inicio de sesión
        Swal.fire({
            title: 'Welcome Back!',
            text: 'You have logged in successfully.',
            icon: 'info',
            confirmButtonColor: '#00adb5',
            confirmButtonText: 'Continue'
        });
    });
});