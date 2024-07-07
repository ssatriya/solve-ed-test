import { ReactNode } from "react";
import { Button, type ButtonProps } from "@mui/material";

type Props = ButtonProps & {
  children: ReactNode;
};

const IncorrectButton = ({ children, ...props }: Props) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        width: "100%",
        fontSize: "15px",
        justifyContent: "start",
        color: "white",
        fontWeight: 700,
        borderRadius: "10px",
        backgroundColor: "#ef5350",
        ":hover": {
          backgroundColor: "#d32f2f",
        },
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
};

export default IncorrectButton;
