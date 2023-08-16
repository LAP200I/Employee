import { Button, Box, Tooltip } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { confirmAlert } from "react-confirm-alert";

export default function ButtonControl() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("user");
    // navigate("/", { replace: true });
    // toast.success("Logout successfully");
    confirmAlert({
      title: "Do you want to Logout?",
      message: "",
      buttons: [
        {
          label: "No",
          onClick: () => {
            //
          },
        },
        {
          label: "Yes",
          onClick: () => {
            localStorage.removeItem("user");
            navigate("/", { replace: true });
          },
        },
      ],
    });
  };
  return (
    <Box display="flex" justifyContent="space-between" margin={2}>
      <Tooltip title="Back" arrow>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackOutlinedIcon /> Back
        </Button>
      </Tooltip>
      <Tooltip title="Logout" arrow>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            handleLogout();
          }}
        >
          <ExitToAppRoundedIcon /> Logout
        </Button>
      </Tooltip>
    </Box>
  );
}
