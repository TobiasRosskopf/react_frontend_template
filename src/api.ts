// Import modules
import axios from "axios";

// Helper fuction for authorization header
function authHeader(): Record<string, unknown> {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return { Authorization: `Bearer ${accessToken}` };
  } else {
    return {};
  }
}

// Create API
const API = axios.create({
  baseURL: "http://0.0.0.0:8000",
  headers: authHeader(),
  timeout: 1000,
});

// API.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (err) => {
//     console.log(err.message);
//     return new Promise((resolve, reject) => {
//       const originalReq = err.config;
//       if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
//         originalReq._retry = true;

//         const res = fetch("http://0.0.0.0:8000/token/refresh/", {
//           method: "POST",
//           mode: "cors",
//           cache: "no-cache",
//           credentials: "same-origin",
//           redirect: "follow",
//           referrer: "no-referrer",
//           body: JSON.stringify({
//             refresh: localStorage.getItem("refreshToken"),
//           }),
//         })
//           .then((res) => res.json())
//           .then((res) => {
//             console.log(res);
//             localStorage.setItem("accessToken", res.access);
//             originalReq.headers["Authorization"] = `Bearer ${res.access}`;

//             return axios(originalReq);
//           });

//         resolve(res);
//       }

//       return Promise.reject(err);
//     });
//   }
// );

export default API;
