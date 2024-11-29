import { fetchProductData } from "../utils/fetchHelper.mjs";

export const getList = async (req, res) => {
  try {
    const result = await fetchProductData(BASE_URL);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("GET List Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while fetching product list.",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const param = req.params.id;
    const result = await fetchProductData(`${BASE_URL}/${param}`);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("GET by ID Error:", error.message);
    if (error.message === "Not Found") {
      res.status(404).json({
        success: false,
        message: `Product with ID ${param} not found.`,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Server error while fetching product by ID.",
      });
    }
  }
};
