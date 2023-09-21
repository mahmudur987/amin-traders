import Axios from "axios";
// const AxiosBaseURL = Axios.create({
//   baseURL: "https://amin-traders-server.vercel.app/",
// });

const AxiosBaseURL = Axios.create({
  baseURL: "http://localhost:8000/",
});

export default AxiosBaseURL;
