import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Form, Field } from "react-final-form";
import {
  Box,
  Modal,
  styled,
  Card,
  FormControlLabel,
  Grid,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "@fontsource/inter";
import { useCallback } from "react";
import { useEffect } from "react";
import { api } from "../../api/api";
import { useAuth } from "../../context/AuthContext";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        m: 2,
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

export default function LoginModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      history.push("/employee");
    }
  }, []);
  // "email": "eve.holt@reqres.in",
  // "password": "cityslicka"
  //onSubmit login
  const handleSubmit = async (e) => {
    // const errors = validate({ email, password });
    // if (Object.keys(errors).length === 0) {
    try {
      let item = { email, password };
      let response = await api("post", "/login", JSON.stringify(item));
      setUser(response);
      history.push("/employee");
      toast.success("Login successfully.");
      // window.location.reload();
    } catch (error) {
      toast.error("Login failed.");
    }
    // } else {
    //   setErrors(errors);
    // }
  };
  const validate = useCallback((value) => {
    const error = {};
    if (!value.email) {
      error.email = "Tên đăng nhập là bắt buộc";
    }
    if (!value.password) {
      error.password = "Mật khẩu là bắt buộc";
    }
    return error;
  }, []);

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <ModeToggle />
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit, errors, hasValidationErrors }) => (
              <>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    // html input attribute
                    required
                    name="email"
                    type="email"
                    value={email}
                    placeholder="johndoe@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSubmit();
                      }
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    // html input attribute
                    required
                    name="password"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSubmit();
                      }
                    }}
                  />
                </FormControl>
                <Button sx={{ mt: 1 }} type="submit" onClick={handleSubmit}>
                  Log in
                </Button>
              </>
            )}
          />

          <Typography
            endDecorator={<Link to="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
