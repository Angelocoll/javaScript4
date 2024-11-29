export const fetchProductData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        response.status === 404 ? "Not Found" : "Failed to fetch data."
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
