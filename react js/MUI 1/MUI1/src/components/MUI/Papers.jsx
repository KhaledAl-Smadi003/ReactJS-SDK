import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
export default function Papers() {
  return (
    <>
      <Box sx={{ my: 5, mx: 4, p: 5 }}>
        <Typography variant="h3">Login</Typography>
        <Avatar alt="Remy Sharp" src="../../../src/assets/hero.png" />
        <Paper
          sx={{
            height: "60vh",
            display: "flex",
            p: 3,
            gap: 4,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField label="Name" type="text" placeholder="Enter Your Name" />
          <TextField
            label="Email"
            type="email"
            placeholder="Enter Your Email"
          />
          <TextField
            label="Password"
            type="Password"
            placeholder="Enter Your Password"
          />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row aria-labelledby name="row-radio-buttons-group">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              py: 3,
            }}
          >
            <Button variant="contained" size="large">
              Login
            </Button>

            <Button variant="contained" size="large">
              Login
            </Button>

            <Button variant="contained" size="large">
              Login
            </Button>

            <Button variant="contained" size="large">
              Login
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
