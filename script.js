function showReport() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if ((username === 'admin' && password === 'password') ||
        (username === 'user1' && password === 'pass123') ||
        (username === 'user2' && password === 'mypassword')) {
        document.querySelector('.iframe-container').style.display = 'block';
        document.querySelector('.login-form').style.display = 'none';
    } else {
        alert('Invalid login credentials');
    }
    return false;
}

function addUser() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = newUsername;
    cell2.innerHTML = newPassword;
    cell3.innerHTML = '<button onclick="removeUser(this)">Remove</button>';

    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';

    return false; // Prevent form submission
}

function removeUser(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
