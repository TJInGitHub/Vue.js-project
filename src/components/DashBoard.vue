<template>
  <div class="dashboard">
    <nav class="dashboard-nav">
      <h2>Dashboard</h2> 
      <ul>
        <li><router-link to="/profile">My Profile</router-link></li>
        <li><router-link to="/showcase">Showcase</router-link></li>
        <li><router-link to="/creative">Creative</router-link></li>
        <li><router-link to="/contact">Contact Me</router-link></li>
        <li @click="logout" class="logout">Logout</li> <!-- Logout option -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  methods: {
    logout() {
      // Logic for logging out
      alert("You have been logged out."); // Placeholder for logout logic
      // Redirect to login page or perform any other logout actions
      this.$router.push('/'); // Adjust the route according to your app
    }
  }
};
</script>

<style scoped>
.dashboard {
  width: 150px;
  background-color: #333;
  color: white;
  height: 100vh;
  position: fixed; 
  top: 0;
  left: 0; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.dashboard-nav h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.dashboard-nav ul {
  list-style-type: none;
  padding: 0;
}

.dashboard-nav li {
  margin-bottom: 1rem;
}

.dashboard-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;
  padding: 0.5rem;
  border-radius: 5px;
  display: block;
}

.dashboard-nav a:hover {
  background-color: rgba(255, 255, 255, 0.692);
  color: black;
  font-weight: 600;
}

/* Style for the logout option */
.logout {
  cursor: pointer; /* Change cursor to pointer */
  color: #ff4444; /* Change text color to indicate logout */
}

.logout:hover {
  background-color: rgba(255, 255, 255, 0.5); /* Add hover effect */
}
</style>
