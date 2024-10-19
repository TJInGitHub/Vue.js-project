import { createApp } from 'vue'; // Import the createApp function from Vue
import App from './App.vue'; // Import the root App component
import router from './router'; // Import the router instance for handling navigation

// Create a Vue application instance
createApp(App)
  .use(router) // Install the router for the application
  .mount('#app'); // Mount the app to the DOM element with id 'app'

