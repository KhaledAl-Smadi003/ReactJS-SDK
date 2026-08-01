import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "GrayText",
          height: "40vh",
          width: "500px",
          my: 4,
        }}
      ></Container>
      <Container
        sx={{
          backgroundColor: "RED",
          height: "40vh",
          width: "500px",
          my: 4,
        }}
      ></Container>
      <Box
        sx={{
          backgroundColor: "blue",
          height: "40vh",
          width: "500px",
          my: 4,
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "green",
          height: "40vh",
          width: "500px",
          my: 4,
        }}
      ></Box>
    </>
  );
}
