document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Placeholder function for database check
    function checkCredentials(email, password) {
        // Replace this with actual database logic
        var users = [
            { email: 'abc@gmail.com', password: 'Password123!' }
        ];
        
        return users.find(user => user.email === email && user.password === password);
    }
    
    var user = checkCredentials(email, password);
    
    if (user) {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        alert('Wrong password or user not registered.');
    }
});
