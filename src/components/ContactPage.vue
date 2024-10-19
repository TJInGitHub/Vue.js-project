<template>
  <div class="contact-page">
    <DashBoard /> <!-- Add the Dashboard Sidebar -->

    <div class="container">
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" class="form-control" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" class="form-control" v-model="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
      <div class="social-section">
        <label>You can also contact me through:</label>
        <ul class="social-links">
          <li>
            <a href="mailto:timothyeusebio1012@gmail.com" target="_blank" aria-label="Gmail">
              <i class="bi bi-envelope"></i> Gmail
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/timothyjher.eusebio" target="_blank" aria-label="Facebook">
              <i class="bi bi-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://discord.com/users/tj10125639" target="_blank" aria-label="Discord">
              <i class="bi bi-discord"></i> Discord
            </a>
          </li>
          <li>
            <a href="https://github.com/TJInGitHub" target="_blank" aria-label="GitHub">
              <i class="bi bi-github"></i> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoard from './DashBoard.vue'; // Import Dashboard component

export default {
  name: 'ContactPage',
  components: {
    DashBoard, // Register the Dashboard component
  },
  data() {
    return {
      name: '', // Bind name input to this variable
      email: '', // Bind email input to this variable
      message: '' // Bind message input to this variable
    };
  },
  methods: {
    submitForm() {
      // Alert with the user's name upon form submission
      alert(`Message sent from ${this.name}`);
      // Reset the form fields after submission
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  display: flex; /* Use flexbox for layout */
  position: fixed; /* Fixed position for full viewport coverage */
  top: 0; 
  left: 0; 
  height: 100%; /* Full height of viewport */
  width: 100%; /* Full width of viewport */
  padding: 50px; /* Padding around the page */
  color: #000000; /* Default text color */
  background-image: url('@/assets/background.jpg'); /* Background image */
  background-size: cover; /* Cover entire area */
  background-position: center; /* Center the background image */
}

.container {
  max-width: 400px; /* Maximum width of the container */
  margin: auto; /* Center the container */
  margin-left: 250px; /* Adjust to match the width of the sidebar */
  text-align: left; /* Left-align text in container */
  background-color: rgb(255, 255, 255); /* Background color of the container */
  padding: 20px; /* Padding within the container */
  border-radius: 8px; /* Rounded corners */
  border: 2px solid #000000; /* Outline for the contact container */
}

h1 {
  text-align: center; /* Center the header text */
  margin-bottom: 20px; /* Margin below the header */
}

.contact-form {
  display: flex; /* Flexbox for form layout */
  flex-direction: column; /* Stack form elements vertically */
}

.form-group {
  margin-bottom: 15px; /* Margin between form groups */
}

.form-control {
  width: 100%; /* Full width for input fields */
  padding: 3px; /* Padding within input fields */
  font-size: 1rem; /* Font size for input fields */
}

button {
  width: 100%; /* Full width for the submit button */
}

.social-section {
  margin-top: 20px; /* Margin above social section */
  text-align: left; /* Left-align text in social section */
}

.social-links {
  list-style: none; /* Remove list styling */
  padding: 0; /* Remove padding */
  margin: 10px 0 0; /* Margin above social links */
  display: flex; /* Flexbox for social links */
  justify-content: space-between; /* Space between links */
}

.social-links li {
  flex: 1; /* Flex property for equal spacing */
  text-align: center; /* Center text in list items */
}

.social-links a {
  text-decoration: none; /* Remove underline from links */
  color: #333; /* Default color for links */
  font-size: 1rem; /* Font size for links */
  transition: color 0.3s; /* Transition effect for link color */
}

.social-links a:hover {
  color: #000000; /* Color change on hover */
}
</style>
