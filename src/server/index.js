const get = async (resource = "") => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${resource}`);
  return response.json();
};

export const api = { get };
