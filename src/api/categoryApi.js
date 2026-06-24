import { apiRequest } from "./apiClient";

export const getColleges = () => {
  return apiRequest("/api/v1/colleges");
};

export const getDepartments = (collegeId) => {
  const params = new URLSearchParams();

  if (collegeId) {
    params.append("collegeId", collegeId);
  }

  const queryString = params.toString();

  return apiRequest(
    queryString ? `/api/v1/departments?${queryString}` : "/api/v1/departments",
  );
};
