const BASE_URL = process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL;

const api = {
  get: async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    return response.json();
  },
  post: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }
    return response.json();
  },
  // Diğer HTTP metotları da eklenecek
};

export default api;
