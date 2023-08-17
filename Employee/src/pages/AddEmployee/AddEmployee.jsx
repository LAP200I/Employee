import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FunctionAddUser } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { Validate } from "../../component/Validate/Validate";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const data = {
      id: crypto.randomUUID(),
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      job: values.job.trim(),
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
      <Form
        onSubmit={handleSubmit}
        validate={Validate}
        render={({ handleSubmit, errors, hasValidationErrors }) => (
          // <form onSubmit={handleSubmit}>
          <Card
            sx={{
              boxShadow: 3,
              maxWidth: "80%",
              margin: "auto",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CardHeader title="Add User" style={{ textAlign: "left" }} />
            <CardContent>
              <Grid container spacing={3}>
                <Field
                  name="firstName"
                  render={({ input, meta }) => (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        fullWidth
                        {...input}
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    </Grid>
                  )}
                />
                <Field
                  name="lastName"
                  render={({ input, meta }) => (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        fullWidth
                        {...input}
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    </Grid>
                  )}
                />
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        fullWidth
                        {...input}
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    </Grid>
                  )}
                />
                <Field
                  name="job"
                  render={({ input, meta }) => (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Job"
                        fullWidth
                        {...input}
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    </Grid>
                  )}
                />
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
                disabled={hasValidationErrors}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
          // </form>
        )}
      />
    </>
  );
};

export default UpdateEmployee;
