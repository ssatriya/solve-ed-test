import { ReactNode } from "react";
import { Button, type ButtonProps } from "@mui/material";

type Props = ButtonProps & {
  children: ReactNode;
};

const CorrectButton = ({ children, ...props }: Props) => {
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
        backgroundColor: "rgb(76, 175, 80)",
        ":hover": {
          backgroundColor: "rgb(56, 142, 60)",
        },
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
};

export default CorrectButton;
