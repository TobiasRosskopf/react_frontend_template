// Import modules
import axios from "axios";

// Helper fuction for authorization header
function authHeader(): {} {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return { Authorization: `Bearer ${accessToken}` };
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
