<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <!-- Login form with two input fields for username and password -->
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>

        <button type="submit" class="btn btn-primary">Login</button>

        <!-- Display error message if credentials are invalid -->
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '', // Bound to the username input field
      password: '', // Bound to the password input field
      error: ''     // Holds error messages for invalid credentials
    };
  },
  methods: {
    /* Method to handle the login process */
    login() {
      const validUsername = 'Timothy'; // Hardcoded valid username
      const validPassword = 'Eusebio';  // Hardcoded valid password

      /* Check if entered credentials match valid credentials */
      if (this.username === validUsername && this.password === validPassword) {
        this.$router.push('/profile'); // Redirect to dashboard on successful login
      } else {
        this.error = 'Invalid credentials'; // Set error message for invalid login
      }
    }
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.login-container {
  position: fixed; 
  top: 0; 
  left: 0; 
  height: 100%;
  width: 100%; 
  background-color: white; 
  background-image: url('@/assets/login-bg.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 

  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.login-box {
  background-color: rgba(206, 200, 200, 0.8); 
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%; 
  max-width: 300px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  font-size: 0.9rem;
  color: #333;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #000; /* Change border color on focus */
}

.btn {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.btn:hover {
  background-color: rgba(0, 255, 0, 0.692); /* Change background color on hover */
  color: black;
  font-weight: 600; /* Bold text on hover */
}

.error-message {
  color: red; /* Color for error messages */
  margin-top: 1rem;
  font-size: 0.9rem; /* Font size for error message */
}
</style>
