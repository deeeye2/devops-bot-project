const apiBaseUrl = 'http://backend:5001'; // Use the service name 'backend'

export const login = async (email, password) => {
  const response = await fetch(`${apiBaseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};
