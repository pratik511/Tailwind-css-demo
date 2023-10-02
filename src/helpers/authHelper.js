import { getToken } from "./utils/auth.util";

const defaultHeaders = {
  contentType: "application/json",
  token: "Bearer " + getToken(),
};

export const authHeader = (header = defaultHeaders) => {
  let headers = {
    "Content-Security-Policy": "default-src 'self',frame-src 'self'",
    "ngrok-skip-browser-warning": true,
  };
  if (header.token) {
    headers["x-auth-token"] = header.token;
  }
  if (header.contentType) {
    headers["Content-Type"] = header.contentType;
  }
  return headers;
};
