function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Change these values to your desired username and password
    const correctUsername = 'Edward';
    const correctPassword = 'Edward';

    // Simple authentication check (for demonstration purposes only)
    if (username === correctUsername && password === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('report-container').style.display = 'block';
        document.getElementById('powerbi-report').src = 'https://app.powerbi.com/onedrive/open?pbi_source=ODSPViewer&driveId=b!t2aA4rjsPUCKdzv9bI_0Gw6DHP_AOYZKrzwB6-_w1mb9JEjJ0wRCTbYNsAeNYU7T&itemId=01GJWLVSZOXYKMC5KZ4REZWSSD26OS5A55';
    } else {
        alert('Invalid credentials');
    }
}
