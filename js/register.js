document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});
