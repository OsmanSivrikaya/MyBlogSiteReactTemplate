import api from "../helpers/api";

/**
 * Category kayıdını gerçekleştirir.
 */
const createCategoryAsync = async (categoryName) => {
    try {
        const response = await api.post("/api/v1/BlogType", {
            typeName: categoryName,
        });
        const { data } = response;
        // Kullanıcı doğru bir şekilde giriş yaparsa
        if (data.success) {
            return { success: true, data: data.data };
        } else {
            return { success: false, data: null };
        }
    } catch (error) {
        console.error("Category Creation Error:", error);
        return { success: false, data: null, message: error.message };
    }
};

const getAllCategoryAsync = async (page, pageSize) => {
    try {
        const response = await api.get(
            `/api/v1/BlogType?pageNumber=${page}&pageSize=${pageSize}`,
        );

        const { data } = response;
        var result = data;
        // Kullanıcı doğru bir şekilde giriş yaparsa
        if (result.success) {
            return { success: true, data: result.data };
        } else {
            return { success: false, data: null };
        }
    } catch (error) {
        console.error("Category Creation Error:", error);
        return { success: false, data: null, message: error.message };
    }
};

export default { createCategoryAsync, getAllCategoryAsync };
