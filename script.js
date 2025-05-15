document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    if (wrapper && registerLink && loginLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            wrapper.classList.add('active');
        });

        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.remove('active');
        });
    } else {
        console.warn('One or more required elements are missing in the DOM.');
    }

    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = this.querySelector('input[type="text"]').value.trim();
            const password = this.querySelector('input[type="password"]').value.trim();

            if (username.length < 3) {
                alert("Username must be at least 3 characters.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            alert("Login successful!");
            // Add login logic here
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value.trim();
            const username = this.querySelector('input[type="text"]').value.trim();
            const password = this.querySelector('input[type="password"]').value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert("Enter a valid email address.");
                return;
            }

            if (username.length < 3) {
                alert("Username must be at least 3 characters.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            alert("Registration successful!");
            // Add registration logic here
        });
    }
});
