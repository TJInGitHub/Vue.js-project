<template>
  <div class="profile-page">
    <DashBoard /> <!-- Add the Dashboard Sidebar -->
    
    <div class="content">
      <h1 class="page-name">My Profile</h1>
      <div class="profile-header">
        <img class="profile-photo" src="../assets/MyPhoto.jpg" alt="My Photo" />
        <div class="name-links">
          <h1 class="profile-name">TIMOTHY JHER G. EUSEBIO</h1>
          <div class="social-section">
            <label>My Links:</label>
            <ul class="social-links">
              <li>
                <a href="mailto:timothyeusebio1012@gmail.com" target="_blank">
                  <i class="bi bi-envelope"></i> Gmail
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/timothyjher.eusebio" target="_blank">
                  <i class="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://discord.com/users/tj10125639" target="_blank">
                  <i class="bi bi-discord"></i> Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/TJInGitHub" target="_blank">
                  <i class="bi bi-github"></i> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="bio-container">
        <!-- Bio section with personal introduction and details -->
        <p class="bio">
          Hello Sir/Ma’am, welcome to my website.
          I am TIMOTHY JHER G. EUSEBIO, the one who created this website to serve as my portfolio to allow you to know me and learn about my details. I am 22 years old and I live in Binakayan Kawit, Cavite. I am currently studying in Technological Institute of the Philippines (TIP) Manila for my 4th year course, to graduate as a computer engineer in the future. 
          Through my academic experiences, I learn how to code and program the following languages: HTML, CSS, C++, Kotlin, Java, JavaScript and Assembly language. Although, I have not mastered all of it yet as my skill level ranges from simple to moderate.
          I also have experience with CISCO networking, Cyber Security implementation, and Basic Occupational Safety and Health. 
          Aside from the following technical skills mentioned, I have leadership, problem-solving, and teamwork soft skills I gained through my academic years. 
          I know that I still have room to grow more skills and develop all of my other skills mentioned. Through trial and error, including accepting works that I can do as possible, I am developing it and learning something new.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoard from './DashBoard.vue'; // Import Dashboard component

export default {
  name: 'ProfilePage',
  components: {
    DashBoard, // Register Dashboard component
  }
};
</script>

<style scoped>
.profile-page {
  display: flex; /* Use flexbox for layout */
  min-height: 100vh; /* Ensure it takes full height of viewport */
  background-color: #f9f9f9; /* Light background color */
  background-image: url('@/assets/background.jpg'); /* Background image */
  background-size: cover; /* Cover entire area */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent repeating the background image */
}

.content {
  margin-left: 250px; /* Leave space for the sidebar */
  max-width: 1000px; /* Set maximum width for content area */
  width: 90%; /* Responsive width */
  padding: 2rem; /* Padding around content */
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  display: flex;
  flex-direction: column; /* Stack content vertically */
}

.profile-header {
  display: flex; /* Use flexbox for layout */
  align-items: flex-start; /* Align items at the start */
  justify-content: space-between; /* Space items evenly */
  margin-bottom: 1.5rem; /* Space below the header */
}

.profile-photo {
  width: 200px; /* Fixed width for the profile photo */
  height: 200px; /* Fixed height for the profile photo */
  border-radius: 30%; /* Rounded corners */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.name-links {
  display: flex;
  flex-direction: column; /* Stack name and links vertically */
  justify-content: center; /* Center the content */
  align-items: flex-start; /* Align items to the start */
}

.page-name {
  font-size: 3rem; /* Large font size for the page name */
  text-align: left; /* Align text to the left */
}

.profile-name {
  margin-top: 30px; /* Space above the profile name */
  font-size: 1.8rem; /* Font size for the profile name */
  color: #333; /* Text color */
  margin-bottom: 1rem; /* Space below the profile name */
  text-align: left; /* Align text to the left */
}

.bio-container {
  background-color: #ececec; /* Background color for the bio section */
  padding: 2rem; /* Padding around the bio */
  border-radius: 8px; /* Rounded corners */
  margin-bottom: 1.5rem; /* Space below the bio section */
  width: 100%; /* Full width */
  overflow: auto; /* Allow scrolling if content overflows */
}

.bio {
  text-align: justify; /* Justify text for better readability */
}

.social-section {
  margin-top: 10px; /* Space above the social links section */
}

.social-links {
  list-style: none; /* Remove bullet points from the list */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
  display: flex; /* Use flexbox for layout */
  gap: 15px; /* Space between social links */
}

.social-links a {
  text-decoration: none; /* Remove underline from links */
  color: #333; /* Text color for links */
  font-size: 1.2rem; /* Font size for links */
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.social-links a:hover {
  color: #007bff; /* Change color on hover */
}
</style>
