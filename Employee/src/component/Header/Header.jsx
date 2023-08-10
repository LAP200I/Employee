import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box display={"flex"} flexDirection={"row"} sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Employee Management
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
