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

    // ✅ Direct Supabase client (no env.json)
    const supabase = window.supabase.createClient(
        'https://glsmrulnkenelakgibkq.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsc21ydWxua2VuZWxha2dpYmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMjIzMjUsImV4cCI6MjA2Mjg5ODMyNX0.R0An3aRdVchtibEbgKvDNdlUeD-IcVJr8wI4C6O5gUw'
    );

    // ✅ Register logic
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
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

            const { data, error } = await supabase
                .from('users')
                .insert([{ email, username, password }]);

            if (error) {
                alert("❌ Registration failed: " + error.message);
                console.error(error);
            } else {
                alert("✅ Registration successful!");
                console.log("Inserted user:", data);
                wrapper.classList.remove('active'); // Switch to login view
            }
        });
    }

    // ✅ Login logic
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
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

            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .eq('password', password)
                .single();

            if (error || !data) {
                alert("❌ Invalid credentials.");
            } else {
                alert("✅ Login successful!");
                console.log("User:", data);
                // You can redirect or store user info here
            }
        });
    }
});
