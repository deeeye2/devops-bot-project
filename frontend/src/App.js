/* Add your CSS styles here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 1rem;
  align-items: center;
}

.nav-logo {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
}

.nav-links a:hover {
  background-color: #575757;
}

.nav-profile {
  color: #fff;
}

.nav-profile a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
}

.nav-profile a:hover {
  background-color: #575757;
}

.home-page {
  padding: 2rem;
  text-align: center;
}

.settings-page {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.settings-page input,
.settings-page textarea {
  width: 100%;
  display: block;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.settings-page button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

.settings-page button:hover {
  background-color: #575757;
}

.solution {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.solution h3 {
  margin: 0 0 0.5rem;
}

.solution p {
  margin: 0.5rem 0;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #575757;
}

input, textarea {
  width: 100%;
  display: block;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h2 {
  margin-top: 0;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #e0e0e0;
  border-radius: 4px;
  text-align: center;
}
