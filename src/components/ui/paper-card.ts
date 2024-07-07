import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PaperCard = styled(Paper)(({ theme }) => ({
  width: "auto",
  height: "auto",
  padding: "16px",
  textAlign: "left",
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
}));

export default PaperCard;
