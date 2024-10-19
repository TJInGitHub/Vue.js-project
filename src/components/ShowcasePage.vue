<template>
  <div class="portfolio-page">
    <DashBoard /> <!-- Add the Dashboard Sidebar -->

    <div class="content">
      <h1 class="portfolio-title">Portfolio Showcase</h1>
      <div class="portfolio-carousel">
        <!-- Loop through projects to create individual portfolio cards -->
        <div v-for="project in projects" :key="project.id" class="portfolio-card">
          <img :src="project.image" alt="Project Image" class="project-image" />
          <div class="card-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="view-project-button">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoard from './DashBoard.vue'; // Import Dashboard component
// Import project images
import BusinessPlan from '../assets/Business Plan.png';
import WorkImmersion from '../assets/Work Immersion.png';
import SoftwareDesign from '../assets/Software Design.png';
import CPEDesign from '../assets/CPE Design.png';

export default {
  name: 'PortfolioPage',
  components: {
    DashBoard, // Register Dashboard component
  },
  data() {
    return {
      // Project data array for portfolio showcase
      projects: [
        {
          id: 1,
          title: 'Business Plan',
          description: 'Created in my Grade 10 Junior High School (JHS) in Imus Institute of Science and Technology (IIST), named Candela. I contributed in documentation and also served as the tester of the business ordering system created (as shown in the photo).',
          image: BusinessPlan, 
          link: 'https://drive.google.com/file/d/1l4uaVIo1r4AuN_J9cuEUcnf0TDJaSnq7/view?usp=drive_link'
        },
        {
          id: 2,
          title: 'Work Immersion',
          description: 'Created in my Grade 12 Senior High School in IIST, during the pandemic. It is a work immersion done from home due to the mode of learning that time in which I was tasked to learn soldering and PCB designing, and providing a documentation of it as shown in the picture.',
          image: WorkImmersion,
          link: 'https://drive.google.com/file/d/1YsxPTqn_DB5p39fgimqLk85jlpFZU8qj/view?usp=drive_link'
        },
        {
          id: 3,
          title: 'Software Design',
          description: 'Created in my 3rd year of college in TIP. Our group created an online mobile-compliant booking system for Barbers known as Grab A Cut. I served as the leader of my group, wrote the documentation of it, and also served as the tester of the functionalities of the system.',
          image: SoftwareDesign,
          link: 'https://drive.google.com/file/d/18rl-yOMw03jOxS6pzWRk83-96mNPfdzT/view?usp=drive_link'
        },
        {
          id: 4,
          title: 'CPE Design',
          description: 'This is the current project I am taking. Its goal is to identify problems in a specific agricultural industry and solve it through device creation. I also serve as the leader of my group and the photo above shows my client, although we are currently looking at other industry options.',
          image: CPEDesign,
          link: 'https://drive.google.com/file/d/1E3pWHMRXAsaScKTHyC7H49qI7oOTPbwY/view?usp=drive_link'
        },
      ],
    };
  },
};
</script>

<style scoped>
.portfolio-page {
  display: flex; /* Make the page flexible */
  min-height: 100vh; /* Ensure it takes full height of viewport */
  background-image: url('@/assets/background.jpg'); /* Background image */
  background-size: cover; /* Cover entire area */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent repeating the background image */
  color: #333; /* Default text color */
}

.content {
  margin-left: 250px; /* Leave space for the sidebar */
  padding: 2rem; /* Padding around content */
  text-align: center; /* Center align text */
  width: 100%; /* Full width */
}

.portfolio-title {
  font-size: 2.5rem; /* Title font size */
  margin-bottom: 2rem; /* Space below the title */
  font-weight: bold; /* Bold title */
  text-transform: uppercase; /* Uppercase letters */
  letter-spacing: 1px; /* Space between letters */
}

.portfolio-carousel {
  display: flex; /* Use flexbox for layout */
  overflow-x: auto; /* Allow horizontal scrolling */
  gap: 1.5rem; /* Space between cards */
}

.portfolio-card {
  min-width: 300px; /* Minimum width for each card */
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent card background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
  transition: transform 0.2s; /* Smooth transition for hover effect */
  overflow: hidden; /* Prevent overflow of content */
}

.portfolio-card:hover {
  transform: translateY(-5px); /* Lift card on hover */
}

.project-image {
  width: 100%; /* Full width image */
  height: 220px; /* Fixed height for images */
  object-fit: cover; /* Maintain aspect ratio */
}

.card-content {
  padding: 1rem; /* Padding around card content */
}

.project-title {
  font-size: 1.5rem; /* Font size for project title */
  margin: 0.5rem 0; /* Space above and below the title */
  font-weight: bold; /* Bold title */
}

.project-description {
  font-size: 1rem; /* Font size for project description */
  color: #555; /* Darker gray color for description */
  margin-bottom: 1rem; /* Space below the description */
}

.view-project-button {
  display: inline-block; /* Display as block for proper padding */
  padding: 0.5rem 1rem; /* Padding around the button */
  background-color: #000000; /* Black background */
  color: white; /* White text color */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s; /* Smooth transition for background color */
  font-weight: 600; /* Bold text */
}

.view-project-button:hover {
  background-color: #303131; /* Change background on hover */
}
</style>
