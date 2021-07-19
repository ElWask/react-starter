import axios from "axios";

const RestService = () => {  
  return {
    fetchAllInfo: async () => {
      return await axios.get(`https://catfact.ninja/fact`)
        .then(response =>response.data)
        .catch((e) => {
          console.error(e);
        });
    },
  };
};

export const restService = RestService();
