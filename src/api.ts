// Import modules
import axios from "axios";

// Helper fuction for authorization header
function authHeader(): {} {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  if (username && token) {
    return { Authorization: `JWT ${token}` };
  } else {
    return {};
  }
}

// Create API
export default axios.create({
  baseURL: "http://0.0.0.0:8000",
  headers: authHeader(),
  timeout: 1000,
});
