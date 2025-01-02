function searchEmail() {
    const searchValue = document.getElementById('searchEmail').value.toLowerCase();
    const rows = document.querySelectorAll('#adminTable tr');

    rows.forEach(row => {
        const email = row.cells[1].textContent.toLowerCase();
        if (email.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function refreshTable() {
    const rows = document.querySelectorAll('#adminTable tr');
    rows.forEach(row => {
        row.style.display = '';
    });
    document.getElementById('searchEmail').value = '';
}

function changeStatus(row) {
    const statusCell = row.cells[5];
    const currentStatus = statusCell.textContent;

    const newStatus = currentStatus === 'Approved' ? 'Pending' : 'Approved';
    statusCell.textContent = newStatus;
    alert(`Status changed to: ${newStatus}`);
}
