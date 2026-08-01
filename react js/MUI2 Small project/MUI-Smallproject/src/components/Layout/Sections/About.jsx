import { Box, Container, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ margin: "auto" }}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            fugiat exercitationem eligendi commodi eveniet quis laborum. Quae,
            nemo, illum aspernatur ratione ipsum consequatur odit aliquid
            mollitia, magnam quis nisi ab?
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ margin: "auto" }}>
          <Box
            component={"img"}
            src="../../../../public/Burger.avif"
            sx={{borderRadius:"30px",width:{sm:"300px", md:"500px"}}}
          />
        </Grid>
        <Grid></Grid>
      </Grid>
    </>
  );
}
