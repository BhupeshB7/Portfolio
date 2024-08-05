import axios from "axios";
export async function getProjects() {
    try {
      const response = await axios.get(
        "https://portfolio-backend-red.vercel.app/api/getAllprojects?page=1"
      );
  
      if (!response.data || !response.data.data || !response.data.data.allProjects) {
        throw new Error('Unexpected response format');
      }
  
      if (response.data.data.allProjects.length === 0) {
        return [];
      }
    //   console.log("Project Id:"+response.data.data.allProjects._id);
    //   console.log(response.data.data.allProjects);
      return response.data.data.allProjects;
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data || 'No data', error.message);
        throw new Error(`API Error: ${error.response?.status} - ${error.message}`);
      } else {
        console.error('Error:', error.message);
        throw new Error(`Error: ${error.message}`);
      }
    }
  }
  






