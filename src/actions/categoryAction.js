import categoryService from "../services/categoryService";
import { addCategory } from "../redux/categorySlice"; // import yolu düzenlendi
import { enqueueSnackbar } from "notistack";
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
