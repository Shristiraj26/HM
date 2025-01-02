document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (!passwordPattern.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    alert('Registration successful!');
});