import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
  useQuery,
  gql
} from "@apollo/client";


const EXCHANGE_RATES = gql`
  query{
    users{
      data{
        id,
        created_at
      }
    }
  }
  `;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.data.map(({ id, created_at }) => (
            <TableRow>
              <TableCell component="th" scope="row">{created_at}</TableCell>
              <TableCell align="right">{id}</TableCell>
              <TableCell align="right">{id}</TableCell>
              <TableCell align="right">{id}</TableCell>
              <TableCell align="right">{created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function Identity() {
  return (
    <div>
      <h2>GraphQl Query</h2>
      <ExchangeRates />
    </div>
  );
}

export default Identity;
