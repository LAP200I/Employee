import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container
      sx={{
        // width: "100%",
        // maxWidth: "80%",
        padding: "10px 0 !important",
        margin: "0px",
        alignItems: "center",
        maxWidth: "100% !important",
        display: "flex",
      }}
    >
      <TextField
        id="search"
        type="search"
        label="Enter search Employee here"
        value={searchTerm}
        onChange={handleChange}
        sx={{
          marginRight: "auto",
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: "5px",
          width: "40%",
          height: "100%",
          boxShadow: "0 5px 5px rgba(0,0,0,0.75)",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {/* button add */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginLeft: "auto",
          padding: "10px 20px",
        }}
        onClick={() => {
          navigate("/employee/add");
        }}
      >
        Add Employee
      </Button>
    </Container>
  );
}
