import React from "react";
import { CryptoState } from "../CryptoContext";
import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
function AlertDesc() {
  const { alert, setAlert } = CryptoState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
    // <Stack open={alert.open} autoHideDuration={3000} onClose={handleClose}>
    //   <Alert onClose={handleClose} elevation={10} variant="filled" severity={alert.type}>
    //     <AlertTitle>
    //       {alert.type}
    //       {alert.message}
    //     </AlertTitle>
    //   </Alert>
    // </Stack>
  );
}

export default AlertDesc;
