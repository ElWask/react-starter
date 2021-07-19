import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.js";
import { restService } from "../../services/RestService";
import useStyles from "./Home.css";

const Home = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    //get the astrological info from the date sent
    restService.fetchAllInfo().then((resp) => {
      // do your things like set a state
      console.log(resp);
      setLoading(false);
    });
  }, []);

  return (
    <div className={classes.container}>
      {loading ? <LoadingSpinner /> : ""}
      <div>
        Hola que tal
      </div>
    </div>
  );
};

export default Home;
