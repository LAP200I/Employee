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
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { login } from "../../api/AuthAPI";

export default function LoginModal({ handleOpenRegisterModal }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  //show/hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //if user already login
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      navigate("/employee");
    }
  }, []);
  //remember me
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
  //validation
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  //submit
  const handleSubmit = async (values) => {
    try {
      let response = await login(values);
      setUser(response);
      navigate("/employee");
      toast.success("Login successfully.");
      if (rememberMe) {
        sessionStorage.setItem("email", values.email);
        sessionStorage.setItem("password", values.password);
      } else {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("password");
      }
    } catch (error) {
      toast.error("Login failed.");
      console.log(error.response.data);
    }
  };

  return (
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
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{
                        backgroundColor: "#fff",
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
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
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(() => ({
  position: "absolute",
  top: "50%",

  transform: "translate(-0%, -50%)",
  boxShadow: 24,
  maxWidth: "80%",
  margin: "auto",
  width: 400,
  p: 4,
}));
