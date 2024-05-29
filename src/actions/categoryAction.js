import categoryService from "../services/categoryService";
import { addCategory } from "../redux/categorySlice"; // import yolu düzenlendi

// Category oluşturma işlemini gerçekleştiren action fonksiyonu
export const createCategory = (categoryName) => {
  return (dispatch) => {
    categoryService
      .createCategoryAsync(categoryName)
      .then((data) => {
        if (data.success) {
          console.log("create success");
          dispatch(addCategory(data.data));
        } else {
          console.log("create failed");
        }
      })
      .catch((error) => {
        console.error("Category Creation Error:", error);
      });
  };
};
