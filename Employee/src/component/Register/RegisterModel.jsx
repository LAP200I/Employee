import React from "react";
import { toast } from "react-toastify";
import {
  Box,
  Modal,
  Typography,
  styled,
  Card,
  Avatar,
  Button,
  Grid,
  OutlinedInput,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../api/Auth";

export function RegisterModal({ open, onClose }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      await register(values);
      toast.success("Register successful");
      onClose();
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledCard>
        <Box
          className="regis--container"
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* BUTTON CLOSE */}
          <Button
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: 1,
            }}
            onClick={onClose}
          >
            <Typography>Close</Typography>
          </Button>

          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      required
                      error={errors.firstName && touched.firstName}
                    >
                      <FormLabel>
                        <Typography>First Name</Typography>
                      </FormLabel>
                      <OutlinedInput
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <FormHelperText>
                        <ErrorMessage name="firstName" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      required
                      error={errors.lastName && touched.lastName}
                    >
                      <FormLabel>
                        <Typography>Last Name</Typography>
                      </FormLabel>
                      <OutlinedInput
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <FormHelperText>
                        <ErrorMessage name="lastName" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      required
                      error={errors.email && touched.email}
                    >
                      <FormLabel>
                        <Typography>Email</Typography>
                      </FormLabel>
                      <OutlinedInput
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                      <FormHelperText>
                        <ErrorMessage name="email" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      required
                      error={errors.password && touched.password}
                    >
                      <FormLabel>
                        <Typography>Password</Typography>
                      </FormLabel>
                      <OutlinedInput
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                      <FormHelperText>
                        <ErrorMessage name="password" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={Object.keys(errors).length > 0}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </StyledCard>
    </Modal>
  );
}

const StyledCard = styled(Card)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
}));
