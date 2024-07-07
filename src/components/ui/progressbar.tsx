import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/navigation";
import { IconButton, Box } from "@mui/material";
import { Close, InfoOutlined } from "@mui/icons-material";

const ProgressBar = (props: LinearProgressProps & { value: number }) => {
  const router = useRouter();

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}
    >
      <Box sx={{ minWidth: 35 }}>
        <IconButton
          onClick={() => router.replace("/")}
          aria-label="close"
          sx={{
            height: "40px",
            width: "40px",
            padding: "12px",
            ":hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
          }}
        >
          <Close sx={{ color: "black", height: "24x", widht: "24x" }} />
        </IconButton>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }} onClick={props.onClick}>
        <IconButton
          aria-label="info"
          sx={{
            height: "40px",
            width: "40px",
            padding: "12px",
            ":hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
          }}
        >
          <InfoOutlined sx={{ color: "black", height: "24x", widht: "24x" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProgressBar;
