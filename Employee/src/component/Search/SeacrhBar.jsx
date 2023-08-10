import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container
      width="50%"
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
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
    </Container>
  );
}
