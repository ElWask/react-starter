import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.js";
import { restService } from "../../services/RestService";
import useStyles from "./Home.css";


const Row = (row) => {
  const classes = useStyles();
  console.log(row.row[0])
  return (
    <li className={classes.line}>{row.row.map(item=><p>{item}</p>)}</li>
  )
}

const Home = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([])

  const transformArray = (arr) => {
    const arrOfArr = []
    arr.forEach((item, index) => {
      if (arrOfArr[item.row] === undefined)
        arrOfArr[item.row] = [item.value]
      else arrOfArr[item.row] = [...arrOfArr[item.row], item.value]
    });
    console.log(arrOfArr)
    return arrOfArr
  }

  useEffect(() => {
    setLoading(true);
    //get the astrological info from the date sent
    restService.fetchAllInfo().then((arrResponse) => {
      console.log(arrResponse)
      setList(transformArray(arrResponse))
      setLoading(false);
    });
  }, []);

  return (
    <div className={classes.container}>
      {loading ? <LoadingSpinner /> : ""}
      <div className="inputContainerForm">
        <ul>
          {list.map(row=><Row {...{row}} />)}
        </ul>
      </div>
    </div>
  );
};

export default Home;
