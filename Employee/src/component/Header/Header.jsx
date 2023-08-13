import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      textAlign={"center"}
      display={"flex"}
      flexDirection={"row"}
      sx={{ flexGrow: 1, mb: 2 }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
            color="#fff"
            onClick={() => {
              navigate("/");
            }}
            pointer="cursor"
            textTransform={"uppercase"}
          >
            Employee Management
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
