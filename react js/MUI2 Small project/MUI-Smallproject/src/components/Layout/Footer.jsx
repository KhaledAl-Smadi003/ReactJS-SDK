import { Box, TextField, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#9f0000",
          display: "flex",
          flexDirection: "row",
          alignItems:"center",
          flexWrap: {sm:"wrap", md:"nowrap"},
          p:2,
          justifyContent:"space-evenly",
          gap:4,
          py:4
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: "white",
            
          }}
        >
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Login</Typography>
          <Typography variant="body1">Registar</Typography>
          <Typography variant="body1">Contact</Typography>
          <Typography variant="body1">About Us</Typography>
        </Box>
        <Box sx={{ color: "white", width:"40%" }}>
          <Typography variant="body1">Why Us?</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum
            corrupti quis consequatur quibusdam quasi necessitatibus ipsa sunt
            deserunt? Quisquam quibusdam distinctio excepturi! Doloribus,
            praesentium at mollitia quisquam excepturi autem?
          </Typography>
        </Box>
        <Box>
            <TextField label="New"/>
        </Box>
      </Box>
    </>
  );
}
