import axios from "axios";
import axiosRetry from "axios-retry";

const RestService = () => {
  axiosRetry(axios, { retries: 3 });
  const PASS = "fulfilled";
  const _Links = ["western_zodiac", "chinese_zodiac", "horoscope"];
  
  return {
    fetchAllInfo: async (date) => {
      const listRequ = _Links.map((link) =>
        axios.get(link + "/" + date, {
          headers: { "X-API-KEY": "01c6cbd1-3aa4-4578-bebc-fb7225fbba39" },
        })
      );
      return await Promise.allSettled(listRequ)
        .then((responses) =>
          responses.map((rep) => (rep.status === PASS ? rep.value.data : ""))
        )
        .catch((e) => {
          console.error(e);
        });
    },
  };
};

export const restService = RestService();
