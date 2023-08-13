import React, { useCallback, useState, useEffect } from "react";
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
/*eslint-disable*/
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Form, Field } from "react-final-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/api";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      navigate("/employee");
    }
  }, []);
  // "email": "eve.holt@reqres.in",
  // "password": "cityslicka"
  const handleSubmit = async (e) => {
    try {
      let item = { email, password };
      let response = await api("post", "/login", JSON.stringify(item));
      setUser(response);
      navigate("/employee");
      toast.success("Login successfully.");
    } catch (error) {
      toast.error("Login failed.");
    }
  };

  const validate = useCallback((value) => {
    const error = {};
    if (!value.email) {
      error.email = "Email is required";
    }
    if (!value.password) {
      error.password = "Password is required";
    }
    return error;
  }, []);

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
          <Form
            validate={validate}
            onSubmit={handleSubmit}
            render={({ handleSubmit, errors, hasValidationErrors }) => (
              <>
                <Grid container spacing={2}>
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          required
                          error={errors.email && meta.touched}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleSubmit();
                            }
                          }}
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        >
                          <FormLabel>
                            <Typography>Email</Typography>
                          </FormLabel>
                          <OutlinedInput
                            {...input}
                            sx={{
                              backgroundColor: "silver",
                            }}
                          />
                          {errors.email && meta.touched && (
                            <FormHelperText>{errors.email}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          required
                          error={errors.password && meta.touched}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleSubmit();
                            }
                          }}
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        >
                          <FormLabel>
                            <Typography>Password</Typography>
                          </FormLabel>
                          <OutlinedInput
                            {...input}
                            sx={{
                              backgroundColor: "silver",
                            }}
                          />
                          {errors.password && meta.touched && (
                            <FormHelperText>{errors.password}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                </Grid>
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{
                    mt: 1,
                  }}
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                  disabled={hasValidationErrors}
                >
                  Login
                </Button>
              </>
            )}
          />
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
