import React, { useState } from "react";
import CustomTextField from "../../atoms/TextField";
import { Typography } from "@mui/material";
import Button from "../../atoms/Button";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  margin: "20px",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { loginWithRedirect } = useAuth0();
  const handleSignIn = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    };
    const users = await axios.get("http://localhost:9191/users", { headers });
    const user = users.data.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (user) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container>
      <CustomTextField
        placeholder="Enter your Email"
        label="Email"
        style={{ width: "450px" }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomTextField
        placeholder="Enter your Password"
        label="Password"
        style={{ width: "450px" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
      <Button
        style={{ width: "240px", height: "50px", backgroundColor: "#00cc88" }}
        onClick={handleSignIn}
      >
        Sign In{" "}
      </Button>
      <Typography variant="h6" color="grey">
        OR
      </Typography>
      <Button
        style={{ width: "240px", height: "50px", backgroundColor: "#00cc88" }}
        onClick={() => loginWithRedirect()}
      >
        Continue with Google
      </Button>
    </Container>
  );
};

export default Login;
