import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Expenses = (props) => {
  const { expenses } = props;
  const classes = useStyles();
  if (!expenses || expenses.length === 0)
    return <p>Can not find any expense data, sorry</p>;
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Payment</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <StyledTableRow key={expense.type_of_expense}>
                <StyledTableCell component="th" scope="row">
                  {expense.type_of_expense}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {expense.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {expense.payment}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {expense.amount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
export default Expenses;
