import { apiRequest } from "./apiClient";

export const getStores = ({
  collegeId,
  departmentId,
  keyword,
  favoriteOnly,
  page = 0,
  size = 20,
} = {}) => {
  const params = new URLSearchParams();

  if (collegeId) params.append("collegeId", collegeId);
  if (departmentId) params.append("departmentId", departmentId);
  if (keyword) params.append("keyword", keyword);
  if (favoriteOnly !== undefined) {
    params.append("favoriteOnly", favoriteOnly);
  }

  params.append("page", page);
  params.append("size", size);

  return apiRequest(`/api/v1/stores?${params.toString()}`);
};

export const getMapStores = ({
  latitude,
  longitude,
  radiusMeters,
  collegeId,
  departmentId,
} = {}) => {
  const params = new URLSearchParams();

  if (
    latitude !== undefined &&
    longitude !== undefined &&
    radiusMeters !== undefined
  ) {
    params.append("latitude", latitude);
    params.append("longitude", longitude);
    params.append("radiusMeters", radiusMeters);
  }

  if (collegeId) params.append("collegeId", collegeId);
  if (departmentId) params.append("departmentId", departmentId);

  const queryString = params.toString();

  return apiRequest(
    queryString ? `/api/v1/stores/map?${queryString}` : "/api/v1/stores/map",
  );
};

export const getStoreAutocomplete = ({ keyword, limit = 10 }) => {
  const params = new URLSearchParams();

  params.append("keyword", keyword);
  params.append("limit", limit);

  return apiRequest(`/api/v1/stores/search?${params.toString()}`);
};

export const getStoreSummary = (storeId) => {
  return apiRequest(`/api/v1/stores/${storeId}/summary`);
};

export const getStoreDetail = (storeId) => {
  return apiRequest(`/api/v1/stores/${storeId}`);
};

export const addFavorite = (storeId) => {
  return apiRequest(`/api/v1/stores/${storeId}/favorite`, {
    method: "POST",
  });
};

export const deleteFavorite = (storeId) => {
  return apiRequest(`/api/v1/stores/${storeId}/favorite`, {
    method: "DELETE",
  });
};

export const getMyFavorites = ({ page = 0, size = 20 } = {}) => {
  return apiRequest(`/api/v1/me/favorites?page=${page}&size=${size}`);
};
