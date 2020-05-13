import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
 
const columns = [
  { 
  id: 'id', 
  label: '#', 
  minWidth: 30 
  },
  
  {
  id: 'name', 
  label: 'Style', 
  minWidth: 100 
  },

  {
    id: "abvMax",
    label: 'ABV MAX',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  
  {
    id: "abvMin",
    label: 'ABV MIN',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "ibuMax",
    label: 'IBU Max',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: "ibuMin",
    label: 'IBU Min',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: "srmMax",
    label: 'SRM Max',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: "srmMin",
    label: 'SRM Min',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: "fgMax",
    label: 'FG Max',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "fgMin",
    label: 'FG Min',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "ogMin",
    label: 'OG Min',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },


];

function createData(id, style, abvMax, abvMin, ibuMax, ibuMin, srmMax, srmMin, fgMax, fgMin, ogMin) {

  return {id, style, abvMax, abvMin, ibuMax, ibuMin, srmMax, srmMin, fgMax, fgMin, ogMin};
}

const rows = [
  createData(5, "Extra Special Bitter", 5.8, 4.8, 45, 30, 14, 8, 1.016,1.046,1.046),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



