import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  topic: string,
  author: string,
  lastMessages: string,
  answer: number,
  
) {
  return { topic, author, lastMessages, answer};
}

const rows = [
  createData('Instead of asking for ugly monster races that 3 people will play','Yobs99', 'Vegetta77', 2),
  createData('Soar nerf big sad', 'cristo2001', 'milton19', 1),
  createData('What if Classic had a seperate sub?', 'killerman', 'Edmun', 1),
  createData('Conversation pit', 'WowSebas', 'Moonligth', 2),
  createData('What’s the one thing you go out of your way to kill?', 'Jesus', 'Jose99', 1),

];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Topic</StyledTableCell>
            <StyledTableCell align="left">Author</StyledTableCell>
            <StyledTableCell align="right">Last Messages</StyledTableCell>
            <StyledTableCell align="right">Answers</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.topic}>
              <StyledTableCell component="th" scope="row">
                {row.topic}
              </StyledTableCell>
              <StyledTableCell align="left">{row.author}</StyledTableCell>
              <StyledTableCell align="right">{row.lastMessages}</StyledTableCell>
              <StyledTableCell align="right">{row.answer}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
