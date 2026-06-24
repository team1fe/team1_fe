const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiRequest = async (path, options = {}) => {
  const headers = {
    ...options.headers,
  };

  const token = localStorage.getItem("accessToken");

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (options.body) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const result = await response.json();

  console.log("API 원본 응답:", result);

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "API 요청 실패");
  }

  return result.data;
};
