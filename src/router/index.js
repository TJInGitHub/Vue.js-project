import { createRouter, createWebHistory } from 'vue-router'; 
import Dashboard from '@/components/DashBoard.vue'; // Import the Dashboard component
import ProfilePage from '@/components/ProfilePage.vue'; // Import the Profile Page component
import ShowcasePage from '@/components/ShowcasePage.vue'; // Import the Showcase Page component
import CreativePage from '@/components/CreativePage.vue'; // Import the Creative Page component
import ContactPage from '@/components/ContactPage.vue'; // Import the Contact Page component
import LoginPage from '@/components/LoginPage.vue'; // Import the Login Page component

// Define the application routes
const routes = [
  { path: '/', component: LoginPage }, // Root path redirects to the Login Page
  { path: '/dashboard', component: Dashboard }, // Path for Dashboard component
  { path: '/profile', component: ProfilePage }, // Path for Profile Page component
  { path: '/showcase', component: ShowcasePage }, // Path for Showcase Page component
  { path: '/creative', component: CreativePage }, // Path for Creative Page component
  { path: '/contact', component: ContactPage }, // Path for Contact Page component
];

// Create the router instance with history mode and defined routes
const router = createRouter({
  history: createWebHistory(), // Use the HTML5 History API for navigation
  routes // Register the routes
});

export default router; // Export the router instance for use in the application