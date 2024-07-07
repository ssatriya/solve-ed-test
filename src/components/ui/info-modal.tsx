import Box from "@mui/material/Box";
import { Modal, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const InfoModal = ({ open, handleClose }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            boxShadow: 24,
            p: 4,
            background: "linear-gradient(0deg, #fff 76.89%, #ffe88a 101.58%)",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            doloribus?.
          </Typography>
          <Button
            variant="text"
            color="error"
            sx={{
              width: "85%",
              textTransform: "none",
              ":hover": {
                backgroundColor: "rgba(211, 47, 47, .1)",
              },
              px: "8px",
              py: "11px",
              borderRadius: "8px",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
