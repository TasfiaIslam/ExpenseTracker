import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Payment</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.type_of_expense}>
                <TableCell component="th" scope="row">
                  {expense.type_of_expense}
                </TableCell>
                <TableCell align="right">{expense.description}</TableCell>
                <TableCell align="right">{expense.payment}</TableCell>
                <TableCell align="right">{expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
export default Expenses;
