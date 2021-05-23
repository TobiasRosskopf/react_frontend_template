// Import modules
import axios from "axios";
import { IAuthTokens, applyAuthTokenInterceptor } from "axios-jwt";

// Base Url
const BASE_URL = "http://0.0.0.0:8000";

// Create API
const API = axios.create({ baseURL: BASE_URL });

// Token refresh function
async function requestRefresh(refreshToken: string): Promise<IAuthTokens | string> {
  const response = await axios.post(`${BASE_URL}/token/refresh/`, { token: refreshToken });
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
}

// Add interceptor with configuration
applyAuthTokenInterceptor(API, {
  requestRefresh,
  header: "Authorization",
  headerPrefix: "Bearer ",
});

export default API;
