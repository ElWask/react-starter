import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.js";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AstroCard from "../../components/AstroCard/AstroCard";
import { restService } from "../../services/RestService";
import useStyles from "./Home.css";

//Check if date is valid or not
const isValidDate = (date) => date instanceof Date && !isNaN(date);

//Format a date into an ISO date (yyy-MM-dd)
const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const Home = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [astro, setAstro] = useState({
    wZodiac: "",
    birthstone: "",
    cZodiac: "",
    horo: "",
  });

  useEffect(() => {
    if (!isValidDate(date)) return;
    setLoading(true);
    //get the astrological info from the date sent
    restService.fetchAllInfo(formatDate(date)).then((responses) => {
      setAstro({
        wZodiac: responses[0].sign,
        birthstone: responses[0].birthstone,
        cZodiac: responses[1].sign,
        horo: responses[2].horoscope,
      });
      setLoading(false);
    });
  }, [date]);

  return (
    <div className={classes.container}>
      {loading ? <LoadingSpinner /> : ""}
      <div className="inputContainerForm">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Pick your birth date"
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            autoOk={true}
          />
        </MuiPickersUtilsProvider>
        <AstroCard {...{ astro }} />
      </div>
    </div>
  );
};

export default Home;
