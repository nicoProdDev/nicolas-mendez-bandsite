class BandSiteApi {
    constructor(apiKey) {

      this.apiKey = apiKey;
      this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com'; 
    }
  

    async postComment(comment) {
      try {
          const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;
          const response = await axios.post(url, comment, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          console.log('Comment posted:', response.data);
          return response.data;
      } catch (error) {
          console.error('Error posting comment:', error);
          throw error;
      }
    } 
  

    async getComments() {
      try {
        const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`; 
        const response = await axios.get(url); 
        const comments = response.data; 
        
       
        comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log('Sorted comments:', comments); 
        return comments; 
      } catch (error) {
        console.error('Error fetching comments:', error); 
        throw error;
      }
    }
  

    async getShows() {
      try {
        const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`;
        const response = await axios.get(url); 
        const shows = response.data; 
        console.log('Shows:', shows); 
        return shows; 
      } catch (error) {
        console.error('Error fetching shows:', error); 
        throw error;
      }
    }
  }
  
 
const api = new BandSiteApi('fa6e790b-d7fb-4871-ab78-f68f9e16eafe');

console.log(api.getShows());

export { BandSiteApi, api };