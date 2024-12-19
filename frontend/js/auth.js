// User Registration 
async function registerUser(name, email, password) {
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        });

        const data = await response.json();

        console.log('Response status:', response.status);
        console.log('Response data:', data);


        if (response.ok) {
            alert('Registration successful!');
            window.location.href = './login.html';
        } else {
            alert(data.message || 'Registration failed!');
        }

    } catch (error) {
        console.error('Error registering user:', error);
        alert('An error occured. Please try again.');

    }
}

// User Login

async function loginUser(email, password) {
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            window.location.href = './index.html';
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        alert('An error occured. Please try again.');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    // User Registration Usage
    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Form submitted with:', { name, email, password });
        registerUser(name, email, password);
    });

    // User Login Usage
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password);
    });
});





