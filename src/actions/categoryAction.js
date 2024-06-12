import categoryService from "../services/categoryService";
import { addCategory, addArrayCategory } from "../redux/categorySlice"; // import yolu düzenlendi
import {
  showSuccessMessage,
  showErrorMessage,
} from "/src/admin/components/helper-components/snackbar";

// Category oluşturma işlemini gerçekleştiren action fonksiyonu
export const createCategory = (categoryName) => {
  return (dispatch) => {
    categoryService
      .createCategoryAsync(categoryName)
      .then((data) => {
        if (data.success) {
          dispatch(addCategory(data.data));
          showSuccessMessage("Kategori eklendi.");
        } else {
          showErrorMessage("Kategori eklenemedi.");
        }
      })
      .catch((error) => {
        console.error("Category Creation Error:", error);
      });
  };
};

// Tüm kategorileri alma işlemini gerçekleştiren action fonksiyonu
export const getAllCategory = (page = 1, pageSize = 10) => {
  return (dispatch) => {
    categoryService
      .getAllCategoryAsync(page, pageSize)
      .then((data) => {
        if (data.success) {
          dispatch(addArrayCategory(data.data));
        } else {
        }
      })
      .catch((error) => {
        console.error("Category Creation Error:", error);
      });
  };
};
