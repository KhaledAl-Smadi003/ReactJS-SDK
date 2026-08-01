import { Button, Container, Paper, TextField, Typography } from "@mui/material";

function Register() {

  return <>
    <Container sx={{ p: 4, margin: "auto" }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
          width: "100%",
        }}
      >
              <Typography variant="h3">Register</Typography>

        <TextField label="Name" fullWidth  required/>
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Password" type="password" fullWidth required />
        <TextField label="Confirm Password" type="password" fullWidth required />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Paper>
    </Container>
  </>;
}

export default Register;
