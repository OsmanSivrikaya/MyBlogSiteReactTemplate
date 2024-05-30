import { enqueueSnackbar } from "notistack";

export const showSuccessMessage = (message) => {
  return enqueueSnackbar(message, { variant: "success" });
};

export const showErrorMessage = (message) => {
  return enqueueSnackbar(message, { variant: "error" });
};
