import {
  Container,
  TextField,
  debounce,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://reqres.in/api/users?page=1&per_page=12`
      );
      setSearchTerm(response.data.data);
    };
    fetchData();
  }, []);

  const handelSearch = debounce(async (value) => {
    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = searchTerm.filter((searchItem) => {
      return (
        searchItem.first_name.toLowerCase().includes(value.toLowerCase()) ||
        searchItem.last_name.toLowerCase().includes(value.toLowerCase()) ||
        searchItem.first_name.toLowerCase().includes(value.toLowerCase()) +
          " " +
          searchItem.last_name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setSearchResults(results);
  }, 500);

  const renderOption = (props, searchResults) => {
    return (
      <li
        {...props}
        key={searchResults.id}
        onClick={() => {
          navigate(`/employee/${searchResults.id}`);
        }}
      >
        <Box
          key={searchResults.id}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar alt="AVT" src={searchResults.avatar} />
          <Typography sx={{ ml: 2 }}>
            {searchResults.first_name + " " + searchResults.last_name}
          </Typography>
        </Box>
      </li>
    );
  };

  return (
    <Container
      sx={{
        padding: "10px 0 !important",
        margin: "0px",
        alignItems: "center",
        maxWidth: "100% !important",
        display: "flex",
      }}
    >
      <Autocomplete
        id="product-search"
        options={searchResults}
        getOptionLabel={(option) => option.first_name + " " + option.last_name}
        onInputChange={(event, value) => {
          handelSearch(value);
        }}
        sx={{
          marginRight: "auto",
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: "5px",
          width: "40%",
          height: "100%",
          boxShadow: "0 5px 5px rgba(0,0,0,0.75)",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Employee's name here"
            onChange={(e) => handelSearch(e.target.value)}
          />
        )}
        renderOption={renderOption}
      />

      {/* button add */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginLeft: "auto",
          padding: "10px 20px",
          boxShadow: "0 5px 5px rgba(0,0,0,0.75)",
        }}
        onClick={() => {
          navigate("/employee/add");
        }}
      >
        <AddRoundedIcon
          sx={{
            marginRight: "10px",
          }}
        />
        Add Employee
      </Button>
    </Container>
  );
}
