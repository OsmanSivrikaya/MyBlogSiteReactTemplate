import React, { useState, useEffect } from "react";
import ModalComponent from "../components/helper-components/modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createCategory, getAllCategory } from "/src/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import DataTableComponent from "../components/helper-components/datatable";
import Paper from "@mui/material/Paper";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Category = () => {
  const dispatch = useDispatch(); // Redux dispatch fonksiyonunu almak için kullanılır

  //redux state
  const { category, totalRecords, loading, error } = useSelector(
    (state) => state.categorySlice,
  );

  // paging stateleri
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const handlePageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    dispatch(getAllCategory(event.first / event.rows + 1, event.rows)); // Sayfa değiştiğinde API'yi çağır
  };

  useEffect(() => {
    dispatch(getAllCategory(first / rows + 1, rows));
  }, [dispatch, first, rows]);

  const handleFormSubmit = async (data) => {
    dispatch(createCategory(data.CategoryName));
  };

  const formBody = ({ register, errors }) => (
    <>
      <TextField
        margin="normal"
        fullWidth
        id="CategoryName"
        label="Kategori"
        name="CategoryName"
        autoComplete="CategoryName"
        autoFocus
        {...register("CategoryName", {
          required: "Kategori boş geçilemez.",
        })}
        error={!!errors.CategoryName}
        helperText={errors.CategoryName ? errors.CategoryName.message : ""}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Kaydet
      </Button>
    </>
  );

  const columns = [{ field: "title", header: "Kategori İsmi" }];

  return (
    <>
      <Paper
        className="mb-3"
        sx={{ p: 2, display: "flex", flexDirection: "column" }}
      >
        <ModalComponent
          btnName="Kategori Ekle"
          title="Kategori Ekle"
          func={handleFormSubmit}
          body={formBody}
        />
      </Paper>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <DataTable
          value={category}
          responsiveLayout="scroll"
          paginator
          rows={rows}
          totalRecords={totalRecords}
          rowsPerPageOptions={[5, 10, 20]}
          first={first}
          onPage={handlePageChange}
        >
          <Column field="typeName" header="Kategori İsmi" />
        </DataTable>
      </Paper>
    </>
  );
};

export default Category;
