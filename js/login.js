document.addEventListener('DOMContentLoaded', () => {

    const githubURL = "https://github.com/TU_USUARIO/TU_REPO";

    // REGISTRO
    document.getElementById('btn-submit-register').addEventListener('click', () => {

        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (!email || !password) {
            Swal.fire('Error', 'Please fill all fields', 'error');
            return;
        }

        // Guardar en localStorage
        const user = { email, password };
        localStorage.setItem('devcodeUser', JSON.stringify(user));

        Swal.fire({
            title: 'Success!',
            text: 'Account created successfully!',
            icon: 'success'
        }).then(() => {
            window.location.href = githubURL;
        });

    });

    // LOGIN
    document.getElementById('btn-submit-login').addEventListener('click', () => {

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const savedUser = JSON.parse(localStorage.getItem('devcodeUser'));

        if (!savedUser) {
            Swal.fire('Error', 'No user registered yet', 'error');
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            Swal.fire({
                title: 'Welcome Back!',
                text: 'Login successful!',
                icon: 'success'
            }).then(() => {
                window.location.href = githubURL;
            });
        } else {
            Swal.fire('Error', 'Incorrect email or password', 'error');
        }

    });

});






/*/
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


    });const githubURL = "https://github.com/higuitajuan06-web?tab=repositories";

    // 4. Manejo de SweetAlert2 para Registro
    document.getElementById('btn-submit-register').addEventListener('click', () => {

        Swal.fire({
            title: 'Success!',
            text: 'Account created successfully. Welcome to Dev_Code!',
            icon: 'success',
            confirmButtonColor: '#00adb5',
            confirmButtonText: 'Go to Repository'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = githubURL;
            }
        });

    });

    // 5. Manejo de SweetAlert2 para Login
    document.getElementById('btn-submit-login').addEventListener('click', () => {

        Swal.fire({
            title: 'Welcome Back!',
            text: 'You have logged in successfully.',
            icon: 'info',
            confirmButtonColor: '#00adb5',
            confirmButtonText: 'Go to Repository'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = githubURL;
            }
        });

/*/