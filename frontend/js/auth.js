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

        if (response.ok) {
            alert('Registration successful!');
            window.location.href = '/login.html';
        } else {
            alert(data.message || 'Registration failed!');
        }

    } catch (error) {
        console.error('Error registering user:', error);
        alert('An error occured. Please try again.');

    }
}

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    registerUser(name, email, password);

});