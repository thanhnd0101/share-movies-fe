import React, { useState } from "react";
import { toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
import { loginAsync } from "../apiCalls/login";
import { useDispatch } from "react-redux";
import { loginAC } from "../reducers";
import { registerAsync } from "../apiCalls/register";

export default function UnauthenticatedRightHeader({
  refresh,
}: {
  refresh: Function;
}) {
  const [username, setUsername] = useState("thanh");
  const [password, setPassword] = useState("@Niot1");

  const dispatch = useDispatch();

  function login() {
    loginAsync(username, password)
      .then((res) => {
        if (res.status == 200) {
          dispatch(loginAC({ token: res.data.auth_token, username: username }));
          refresh();
          toast.success("Login successful");
        } else {
          toast.error("Login failed");
        }
      })
      .catch((err) => {
        toast.error("error");
      });
  }

  function register() {
    registerAsync(username, password)
      .then((res) => {
        if (res.status == 201) {
          toast.success("Register successful");
        } else {
          toast.error("Register failed due to duplicated username");
        }
      })
      .catch((err) => {
        toast.error("Register failed due to duplicated username");
      });
  }

  return (
    <>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginRight: 5 }}
      />

      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginRight: 5 }}
      />

      <Button
        variant="contained"
        color="success"
        style={{ marginRight: 5 }}
        onClick={login}
      >
        Login
      </Button>

      <Button variant="contained" color="secondary" onClick={register}>
        Register
      </Button>

    
    </>
  );
}
