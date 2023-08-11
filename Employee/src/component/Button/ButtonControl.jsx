import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function ButtonControl() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("user");
    // navigate("/", { replace: true });
    // toast.success("Logout successfully");
    confirmAlert({
      title: "Do you want to Logout",
      message: "",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            localStorage.removeItem("user");
            navigate("/", { replace: true });
            toast.success("Logout successfully");
          },
        },
        {
          label: "No",
          onClick: () => {
            //
          },
        },
      ],
    });
  };
  return (
    <>
      <Button
        variant="contained"
        color="error"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(-20%, 30%)",
        }}
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </Button>
      <Button
        variant="outlined"
        color="success"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(20%,30% )",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Return
      </Button>
    </>
  );
}
