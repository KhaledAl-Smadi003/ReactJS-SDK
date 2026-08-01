import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="sticky" sx={{bgcolor:"#9f0000"}}>
        <Toolbar sx={{justifyContent:"space-between", p:3}}>
          <Typography variant="h3">Logo</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">Login</Typography>
            <Typography variant="h6">Registar</Typography>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="h6">About Us</Typography>
            <Button variant="contained" onClick={() => navigate ("/register")}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
