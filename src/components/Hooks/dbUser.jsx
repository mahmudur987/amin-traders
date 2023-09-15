import { useEffect, useState } from "react";
import AxiosBaseURL from "../../axios/AxiosConfig";

export const UsedbUser = (email) => {
  const [dbuser, setDbuser] = useState(null);

  useEffect(() => {
    if (email) {
      AxiosBaseURL.get(`/users/${email}`)
        .then((data) => {
          setDbuser(data.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email]);

  return [dbuser];
};
