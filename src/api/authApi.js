import { apiRequest } from "./apiClient";

export const sendEmailCode = (email) => {
  return apiRequest("/api/v1/auth/email/send-code", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
};

export const verifyEmailCode = ({ email, code }) => {
  return apiRequest("/api/v1/auth/email/verify", {
    method: "POST",
    body: JSON.stringify({ email, code }),
  });
};

export const signup = ({
  email,
  password,
  name,
  userType = "STUDENT",
  collegeId = null,
  departmentId = null,
  storeId = null,
}) => {
  return apiRequest("/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      name,
      userType,
      collegeId,
      departmentId,
      storeId,
    }),
  });
};

export const login = ({ email, password }) => {
  return apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
