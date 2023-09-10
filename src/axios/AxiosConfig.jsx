import Axios from "axios";
const AxiosBaseURL = Axios.create({
  baseURL: "http://localhost:8000/",
});
export default AxiosBaseURL;
