import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FunctionAddUser } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

import {
  TextField,
  Button,
  Card,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

const UpdateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listEmp = useSelector((state) => state.user.userList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: crypto.randomUUID(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      job: job,
      createdAt: new Date(),
    };

    try {
      dispatch(FunctionAddUser(data));
      console.log("data", data);
      navigate("/employee");
    } catch (err) {
      toast.error("Fail to update.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            boxShadow: 3,
            maxWidth: "80%",
            margin: "20px auto",
          }}
        >
          <CardHeader title="Add User" style={{ textAlign: "left" }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job"
                  fullWidth
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions style={{ padding: "16px", textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginLeft: "auto",
              }}
              type="submit"
              disabled={
                firstName === "" ||
                lastName === "" ||
                email === "" ||
                job === ""
              }
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default UpdateEmployee;
