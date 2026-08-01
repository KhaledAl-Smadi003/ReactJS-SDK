import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function Tables() {
  return (
    <>
      <Container>
        <TableContainer  component={Paper} sx={{bgcolor:"red",my:4,p:4}} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Number </TableCell>
                <TableCell>Name </TableCell>
                <TableCell>Email </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1 </TableCell>
                <TableCell>Khaled </TableCell>
                <TableCell>A@asd </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2 </TableCell>
                <TableCell>moh </TableCell>
                <TableCell>rr@asd </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3 </TableCell>
                <TableCell>led </TableCell>
                <TableCell>Aadas@asd </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4 </TableCell>
                <TableCell>KszAFXhaled </TableCell>
                <TableCell>Adasdfa@asd </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
