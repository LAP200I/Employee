//implement the form to add new user for function AddEmployee()
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { FunctionAddUser } from "../../Redux/Action";
import { toast } from "react-toastify";
import { makeStyles } from "@mui/styles";
import { Box, Button, Grid, TextField, Typography, Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#3f51b5",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3f51b5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3f51b5",
      },
      "&:hover fieldset": {
        borderColor: "#3f51b5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5",
      },
    },
  },
}));

export default function AddEmployee() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      toast.error("Please fill in all fields");
    } else {
      dispatch(FunctionAddUser({ ...employee, userId: user.id }));
      toast.success("Add Employee Success");
      navigate("/employee");
    }
  };

  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          width: "70%",
          height: "auto",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <Typography variant="h4" align="center">
          Add Employee
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="firstName"
                name="firstName"
                label="First name"
                value={firstName}
                onChange={(e) => onInputChange(e)}
                className={classes.root}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="lastName"
                name="lastName"
                label="Last name"
                value={lastName}
                onChange={(e) => onInputChange(e)}
                className={classes.root}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                className={classes.root}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
}
