const axios = require('axios'); // Import Axios if you're using modules (only needed in Node.js environments)

// Import Axios if you're using modules (only needed in Node.js environments)
// const axios = require('axios');

class BandSiteApi {
    constructor(apiKey) {
      // Store the API key and base URL as instance properties
      this.apiKey = apiKey;
      this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com'; // Hardcoded base URL
    }
  
    // Method to post a comment
    async postComment(comment) {
      try {
        const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`; // Construct the full URL
        const response = await axios.post(url, comment); // Make a POST request with the comment object
        console.log('Comment posted:', response.data); // Log the response
        return response.data; // Return the response data if needed
      } catch (error) {
        console.error('Error posting comment:', error); // Handle errors
        throw error;
      }
    }
  
    // Method to get comments
    async getComments() {
      try {
        const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`; // Construct the full URL
        const response = await axios.get(url); // Make a GET request to fetch comments
        const comments = response.data; // Get the comments array from the response
        
        // Sort the comments by date from newest to oldest
        comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log('Sorted comments:', comments); // Log the sorted comments
        return comments; // Return the sorted comments
      } catch (error) {
        console.error('Error fetching comments:', error); // Handle errors
        throw error;
      }
    }
  
    // Method to get show data
    async getShows() {
      try {
        const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`; // Construct the full URL
        const response = await axios.get(url); // Make a GET request to fetch show data
        const shows = response.data; // Get the show data array from the response
        console.log('Shows:', shows); // Log the shows
        return shows; // Return the shows
      } catch (error) {
        console.error('Error fetching shows:', error); // Handle errors
        throw error;
      }
    }
  }
  
  // Example usage of the BandSiteApi class


  // Initialize the class with your API key
const api = new BandSiteApi('fa6e790b-d7fb-4871-ab78-f68f9e16eafe');

console.log(api.getShows()); // Log the BandSiteApi instance

export { api };