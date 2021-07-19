import axios from "axios";

const RestService = () => {  
  return {
    fetchAllInfo: async () => {
      return await axios.get(`https://a.c-dn.net/b/2Me8Xl.json`)
        .then(response =>response.data.data)
        .catch((e) => {
          console.error(e);
        });
    },
  };
};

export const restService = RestService();
