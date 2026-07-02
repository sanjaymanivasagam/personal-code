// Login Form Handler

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;
    
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Validation
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }

    if (password.length < 6) {
        showError('Password must be at least 6 characters long');
        return;
    }

    // Check if email is valid (basic validation)
    if (!isValidEmail(email) && !isValidUsername(email)) {
        showError('Please enter a valid email or username');
        return;
    }

    // Simulate login (in real application, this would send to server)
    if (email && password) {
        // Show success message
        showSuccess('Login successful! Redirecting...');
        
        // Store remember me preference
        if (rememberMe) {
            localStorage.setItem('rememberEmail', email);
        } else {
            localStorage.removeItem('rememberEmail');
        }

        // Simulate redirect after 1.5 seconds
        setTimeout(() => {
            console.log('User logged in:', email);
            // window.location.href = 'dashboard.html'; // Uncomment when you have a dashboard
            alert('Welcome ' + email + '! You are now logged in.');
        }, 1500);
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Username validation (simple check - alphanumeric and underscore)
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Show success message
function showSuccess(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
}

// Load remembered email on page load
window.addEventListener('DOMContentLoaded', function() {
    const rememberedEmail = localStorage.getItem('rememberEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }
});

// Forgot password link handler
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset functionality coming soon!');
    // window.location.href = 'forgot-password.html'; // Uncomment when you have this page
});

// Sign up link handler
document.querySelector('.signup-link a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Sign up page coming soon!');
    // window.location.href = 'signup.html'; // Uncomment when you have this page
});
