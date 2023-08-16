import React, { useCallback, useState } from "react";
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
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Form, Field } from "react-final-form";
import { register } from "../../api/AuthAPI";

export function RegisterModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = useCallback(async (value) => {
    try {
      await register(value);
      toast.success("Register successful");
      onClose();
    } catch (err) {
      const errMess = err.response.data.error;
      toast.error(JSON.stringify(errMess));
    }
  }, []);

  const validate = useCallback((value) => {
    const error = {};
    switch (true) {
      case !value.firstName:
        error.firstName = "Required";
        break;
      case !value.lastName:
        error.lastName = "Required";
        break;
      case !value.email:
        error.email = "Required";
        break;
      case !value.password:
        error.password = "Required";
        break;
      case value.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email):
        error.email = "Email is invalid";
        break;
      case value.password && value.password.length < 6:
        error.password = "Password must be at least 6 characters";
        break;
      case value.confirmPassword !== value.password:
        error.confirmPassword = "Password must match";
        break;

      default:
        break;
    }
    return error;
  }, []);

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
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, errors, hasValidationErrors }) => (
              <>
                <Grid container spacing={2}>
                  <Field
                    name="firstName"
                    render={({ input, meta }) => (
                      <Grid item xs={6}>
                        <FormControl
                          fullWidth
                          required
                          error={errors.firstName && meta.touched}
                        >
                          <FormLabel>
                            <Typography>First Name</Typography>
                          </FormLabel>
                          <OutlinedInput {...input} />
                          {errors.firstName && meta.touched && (
                            <FormHelperText>{errors.firstName}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                  <Field
                    name="lastName"
                    render={({ input, meta }) => (
                      <Grid item xs={6}>
                        <FormControl
                          fullWidth
                          required
                          error={errors.lastName && meta.touched}
                        >
                          <FormLabel>
                            <Typography>Last Name</Typography>
                          </FormLabel>
                          <OutlinedInput {...input} />
                          {errors.lastName && meta.touched && (
                            <FormHelperText>{errors.lastName}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />

                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          required
                          error={errors.email && meta.touched}
                        >
                          <FormLabel>
                            <Typography>Email</Typography>
                          </FormLabel>
                          <OutlinedInput {...input} />
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
                        >
                          <FormLabel>
                            <Typography>Password</Typography>
                          </FormLabel>
                          <OutlinedInput
                            type={showPassword ? "text" : "password"}
                            {...input}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {errors.password && meta.touched && (
                            <FormHelperText>{errors.password}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                  <Field
                    name="confirmPassword"
                    render={({ input, meta }) => (
                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          required
                          error={errors.confirmPassword && meta.touched}
                        >
                          <FormLabel>
                            <Typography>Confirm Password</Typography>
                          </FormLabel>
                          <OutlinedInput
                            type={
                              showConfirmPassword ? "text" : "confirmPassword"
                            }
                            name="confirmPassword"
                            {...input}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowConfirmPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {errors.confirmPassword && meta.touched && (
                            <FormHelperText>
                              {errors.confirmPassword}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                  disabled={hasValidationErrors}
                >
                  Register
                </Button>
              </>
            )}
          />
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
