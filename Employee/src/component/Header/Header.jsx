import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      textalign={"center"}
      display={"flex"}
      flexDirection={"row"}
      sx={{ flexGrow: 1, mb: 2 }}
    >
      <AppBar position="static" className="header">
        <Toolbar textalign={"center"}>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
              maxWidth: "max-content",
              width: "100%",
              margin: "auto",
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
