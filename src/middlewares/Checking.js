import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

//file for checking that the middleware is working

const Checking = () => {

  const history = useHistory();

  const callCheckingPage = async () => {
      try {
          const res = await fetch('/checking', {
            method: "GET",
            headers:{
              "Content-Type": 'application/json',
              Accept: 'application/json'
            },
            credentials:"include"
          });
          console.log("IN");

          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }

      } catch (err) {
          console.error(err);
          history.push("/news");
      }
  }

  useEffect(() => {
    callCheckingPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>checking</div>
  )
}

export default Checking