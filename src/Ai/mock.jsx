
export const fetchData = async (prompt) => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `<p>Results for "${prompt}"</p>` });
    }, 1000);
  });
};

