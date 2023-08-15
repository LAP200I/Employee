import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  Card,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  FormControl,
  FormLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { login } from "../../api/Auth";

export default function LoginModal({ handleOpenRegisterModal }) {
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      navigate("/employee");
    }
  }, []);
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedPassword = sessionStorage.getItem("password");
    if (storedEmail && storedPassword) {
      initialValues.email = storedEmail;
      initialValues.password = storedPassword;
      setRememberMe(true);
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    if (rememberMe) {
      sessionStorage.setItem("email", values.email);
      sessionStorage.setItem("password", values.password);
      console.log(sessionStorage.getItem("email"));
    } else {
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("password");
    }
    try {
      let response = await login(values);
      setUser(response);
      navigate("/employee");
      toast.success("Login successfully.");
    } catch (error) {
      toast.error("Login failed.");
    }
  };

  return (
    <>
      <StyledCard>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main", margin: "0 auto" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Login to continue
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Grid container spacing={2}>
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
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        sx={{
                          backgroundColor: "#fff",
                        }}
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
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />
                      <FormHelperText>
                        <ErrorMessage name="password" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControlLabel
                  label="Remember me"
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      name="rememberMe"
                      color="primary"
                    />
                  }
                  sx={{
                    mt: 1,
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                  }}
                  disabled={Object.keys(errors).length > 0}
                >
                  Login
                </Button>{" "}
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    textAlign: "right",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#008080",
                    },
                  }}
                  onClick={handleOpenRegisterModal}
                >
                  Don't have an account? Register
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    textAlign: "right",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#008080",
                    },
                  }}
                >
                  Forgot password?
                </Typography>
              </Form>
            )}
          </Formik>
        </Box>
      </StyledCard>
    </>
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
