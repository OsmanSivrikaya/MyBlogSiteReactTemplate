import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";

const FormComponent = ({ func, body }) => {
  const {
    register, // inputları kaydetmek için kullanılır
    handleSubmit, // form submit işlemini yönetmek için kullanılır
    formState: { errors }, // form hatalarını yönetmek için kullanılır
  } = useForm();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(func)} // Form submit edildiğinde onSubmit fonksiyonunu çalıştır
      sx={{ mt: 1 }}
      noValidate
      autoComplete="off"
    >
      {body({ register, errors })}
    </Box>
  );
};

export default FormComponent;
