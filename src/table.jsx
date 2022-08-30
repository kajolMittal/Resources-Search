import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import appStore from "./appStore";
// To showcase the fetch data based on search bar in tabular format
export default function DenseTable() {
  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {appStore?.animals?.length > 0 &&
              Object.keys(appStore?.animals?.[0]).map(function (rowvalue) {
                return <TableCell>{rowvalue}</TableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {appStore.animals?.map((row) => (
            <TableRow key={row.API}>
              <TableCell component="th" scope="row">
                {row.API}
              </TableCell>
              <TableCell align="left">{row.Description}</TableCell>
              <TableCell align="left">{row.Auth}</TableCell>
              <TableCell align="left">{row.HTTPS}</TableCell>
              <TableCell align="left">{row.Cors}</TableCell>
              <TableCell align="left">{row.Link}</TableCell>
              <TableCell align="left">{row.Category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
