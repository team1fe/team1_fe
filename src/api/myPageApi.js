import { apiRequest } from "./apiClient";

export const getMyPage = () => {
  return apiRequest("/api/v1/me");
};

export const getMyBenefitUsages = ({ page = 0, size = 20 } = {}) => {
  return apiRequest(`/api/v1/me/benefit-usages?page=${page}&size=${size}`);
};
