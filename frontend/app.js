const apiBaseUrl = 'http://backend:5000'; // Use the service name 'backend'

// Example login function
async function login(username, password) {
  const response = await fetch(`${apiBaseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (response.ok) {
    // Handle successful login
    console.log('Login successful:', data);
  } else {
    // Handle login error
    console.error('Login error:', data);
  }
}

// Example usage
login('admin@example.com', 'admin');
