import { Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import styled from "@emotion/styled";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  margin: "20px",
});

const Home = () => {
  const { logout } = useAuth0();

  return (
    <Container>
      <Typography>Welcome to home page </Typography>
      <Button
        style={{ width: "240px", height: "50px", backgroundColor: "#00cc88" }}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </Button>
    </Container>
  );
};

export default Home;
