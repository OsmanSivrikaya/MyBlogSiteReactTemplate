import api from "../helpers/api";

/**
 * Category kayıdını gerçekleştirir.
 */
const createCategoryAsync = async (categoryName) => {
    try {
        const response = await api.post("/products", {
            title: categoryName,
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
        });

        const { data } = response;
        // Kullanıcı doğru bir şekilde giriş yaparsa
        if (response.status === window.StatusCodes.SUCCESS) {
            return { success: true, data: data };
        } else {
            return { success: false, data: null };
        }
    } catch (error) {
        console.error("Category Creation Error:", error);
        return { success: false, data: null, message: error.message };
    }
};

export default { createCategoryAsync };
