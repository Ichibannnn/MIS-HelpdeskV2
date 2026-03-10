import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    title: "",
    message: "",
    severity: "success",
  });

  const showToast = (title, message, severity = "success") => {
    setToast({
      open: true,
      title,
      message,
      severity,
    });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Snackbar open={toast.open} autoHideDuration={1500} anchorOrigin={{ vertical: "top", horizontal: "right" }} onClose={closeToast}>
        <Alert severity={toast.severity} variant="filled" onClose={closeToast} sx={{ width: "100%" }}>
          {toast.title && <AlertTitle>{toast.title}</AlertTitle>}
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};
