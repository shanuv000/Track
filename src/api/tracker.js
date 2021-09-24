import axios from "axios";
const apiss = process.env.REACT_APP_API_KEY;
export default axios.create({
  baseURL: apiss,
});
