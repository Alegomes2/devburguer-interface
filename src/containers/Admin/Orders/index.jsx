

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";

import { Row } from "./row";

import { api } from "../../../services/api";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("/orders");

      setOrders(data);

      console.log(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order.id,
      date: order.createdAt,
      status: order.status,
      items: order.items,
    };
  }

  useEffect(() => {
    const newRows = orders.map((order) => createData(order));

    setRows(newRows);
  }, [orders]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell>Pedido</TableCell>

            <TableCell>Cliente</TableCell>

            <TableCell>Data do Pedido</TableCell>

            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

