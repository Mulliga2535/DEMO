import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein};
  }
  
  const rows = [
    createData('ก123','HONDA'),
    createData('ข123'),
    createData('ค123'),
    createData('ง123'),
    createData('จ123'),
  ];

export default function Users() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p:2 }}>
      <Paper sx={{ p:2 }}>
    <Box display="flex">
    <Box sx={{flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
        รายละเอียด
        </Typography>
        </Box>
    <Box>
    <Link href="Create">
        <Button variant="contained">Create</Button>
        </Link> 
</Box>
    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ทะเบียนรถยนต์</TableCell>
            <TableCell align="right">ยี่ห้อรถยนต์</TableCell>
            <TableCell align="right">รุ่นรถยนต์</TableCell>
            <TableCell align="right">หมายเหตุ</TableCell>
            <TableCell align="right">etc...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
      </Container>
    </React.Fragment>
  );
}