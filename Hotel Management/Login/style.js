function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username && password) {
        if (role === 'Admin' && username === 'admin' && password === 'admin123') {
            document.getElementById('loginPage').classList.add('d-none');
            document.getElementById('dashboardPage').classList.remove('d-none');
            document.getElementById('adminActions').classList.remove('d-none');
            document.getElementById('dashboardTitle').textContent = 'Admin Dashboard';
        } else if (role === 'Manager') {
            document.getElementById('loginPage').classList.add('d-none');
            document.getElementById('dashboardPage').classList.remove('d-none');
            document.getElementById('managerActions').classList.remove('d-none');
            document.getElementById('dashboardTitle').textContent = 'Manager Dashboard';
        } else {
            alert('Invalid credentials or role. Please try again.');
        }
    } else {
        alert('Please fill out all fields.');
    }
}