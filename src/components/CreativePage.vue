<template>
  <div class="creative-page">
    <DashBoard /> <!-- Add the Dashboard Sidebar -->

    <div class="container">
      <h1>My Hobbies</h1>
      <div class="hobbies-list">
        <!-- List of hobbies -->
        <div class="hobby">
          <h2>Gaming</h2>
          <img src="../assets/Games.jpg" alt="Hobby 1" class="hobby-image" />
          <p>I play many games, mostly mobile games to relieve some stress in my studies. I like action-RPG games, especially those that allow me to customize my characters or those in anime style. I played those in an emulator as shown in the photo.</p>
        </div>
        <div class="hobby">
          <h2>Watching Anime</h2>
          <img src="../assets/anime.jpeg" alt="Hobby 2" class="hobby-image" />
          <p>I also watch anime from different kinds of genres like action, romance, fantasy, etc., depending on what interests me, although I seldom watch the horror genre.</p>
        </div>
        <div class="hobby">
          <h2>Music</h2>
          <img src="../assets/Guitar.jpg" alt="Hobby 3" class="hobby-image" />
          <p>I like to listen to music. My music album consists of OPMs, some English music, anime opening or ending music, and game BGMs, but it tends to lean towards music that can hype me up. Additionally, I can also play an acoustic guitar, although I’m not that good as I can only play a few songs.</p>
        </div>
        <div class="hobby">
          <h2>Family Bonding</h2>
          <img src="../assets/Family Bonding.jpg" alt="Hobby 4" class="hobby-image" />
          <p>Last but not least, I spend time with my family by going out on certain occasions like birthdays or road trips. Despite not being that outgoing, I am able to enjoy days like these (especially if there is food involved).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoard from './DashBoard.vue'; // Import Dashboard component

export default {
  name: "CreativePage",
  components: {
    DashBoard, // Register Dashboard component
  },
};
</script>

<style scoped>
.creative-page {
  display: flex; /* Make the page flexible */
  position: fixed; /* Position fixed for full viewport coverage */
  top: 0; 
  left: 0; 
  height: 100%; /* Full height of viewport */
  width: 100%; /* Full width of viewport */
  background-image: url('@/assets/background.jpg'); /* Background image */
  background-size: cover; /* Cover entire area */
  background-position: center; /* Center the background image */
  color: #000; /* Default text color */
}

.container {
  margin-left: 250px; /* Adjust this value to match the width of the sidebar */
  max-width: calc(100% - 450px); /* Ensure the container takes up the remaining space */
  margin: auto; /* Center the container */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding around the container */
}

.hobbies-list {
  display: flex; /* Use flexbox for layout */
  flex-wrap: nowrap; /* Prevent wrapping for horizontal scrolling */
  overflow-x: auto; /* Enable horizontal scrolling */
  padding-bottom: 1rem; /* Add some padding at the bottom */
  gap: 10px; /* Space between hobbies */
}

.hobby {
  flex: 0 0 auto; /* Ensure hobbies don't shrink */
  width: 300px; /* Fixed width for each hobby card */
  margin: 10px; /* Space around each hobby card */
  padding: 20px; /* Padding within each hobby card */
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent card background */
  border-radius: 8px; /* Rounded corners for cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.hobby-image {
  width: 100%; /* Full width image */
  height: 150px; /* Fixed height for images */
  border-radius: 5px; /* Rounded corners for images */
}
</style>
