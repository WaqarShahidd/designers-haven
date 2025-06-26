import React, { useState, useEffect } from "react";
import { Box, Modal, Typography, Button, Fade, Backdrop } from "@mui/material";
import { fonts } from "../../theme/theme";

const EarlyAccessModal = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("modalDismissed");
    if (dismissed === "true") {
      setOpen(false);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("modalDismissed", "true");
  };

  if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 300 } }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
            width: "90%",
            maxWidth: 500,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, fontFamily: fonts.styreneLight }}
          >
            🚧 Designer’s Haven is in Early Access
          </Typography>
          <Typography
            sx={{ fontSize: 14, mb: 2, fontFamily: fonts.styreneLight }}
          >
            For now, all orders are placed directly with designers via WhatsApp.
            Features like in-app payments, delivery partnerships, and custom
            dashboards are coming soon — guided by feedback and demand.
          </Typography>
          <Box textAlign="right">
            <Button variant="contained" onClick={handleClose}>
              Got it
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EarlyAccessModal;
