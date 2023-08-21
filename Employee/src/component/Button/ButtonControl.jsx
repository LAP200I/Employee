import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { confirmAlert } from "react-confirm-alert";

export default function ButtonControl() {
  const navigate = useNavigate();
  const handleLogout = () => {
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
  const handleBack = () => {
    navigate(-1);
  };
  const path = window.location.pathname;
  // if (path === "/employee") { disable back button} else enable
  const isEmployeePath = path === "/employee";

  return (
    <Box
      display="flex"
      // alignItems="flex-end"
      justifyContent="space-between"
      margin={2}
    >
      <Button
        className="back-btn"
        disabled={isEmployeePath}
        variant="contained"
        onClick={handleBack}
      >
        <ArrowBackOutlinedIcon /> Back
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          handleLogout();
        }}
      >
        <ExitToAppRoundedIcon /> Logout
      </Button>
    </Box>
  );
}
