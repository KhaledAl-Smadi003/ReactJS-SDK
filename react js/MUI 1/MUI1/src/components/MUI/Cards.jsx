import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function Cards() {
  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ maxWidth: "400px" }}>
          <CardHeader title="Card" />
          <CardMedia component={"img"} src="../../../src/assets/hero.png" />
          <CardContent>
            <Typography variant="h2" sx={{color:"black"}}>Abo Smadi</Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              optio cumque eaque incidunt repellat illo, perferendis corporis
              architecto omnis soluta quae eligendi sapiente odio voluptatum
              voluptates nesciunt suscipit quos qui?
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined">View</Button>
            <Button variant="contained">Delete</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
