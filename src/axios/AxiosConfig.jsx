import Axios from "axios";
const AxiosBaseURL = Axios.create({
  baseURL: "https://amin-traders-server.vercel.app/",
});
export default AxiosBaseURL;
