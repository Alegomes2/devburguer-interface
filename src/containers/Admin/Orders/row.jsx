import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { formatDate} from "../../../utils/formatDate";

export function Row({ row }) {
  const [open, setOpen] = useState(false);

  const detailsId = `details-${row.orderId}`;

  return (
    <>
      <TableRow sx={{ "& > .MuiTableCell-root": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label={open ? "collapse row" : "expand row"}
            aria-expanded={open}
            aria-controls={detailsId}
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          #{row.orderId}
        </TableCell>

        <TableCell>{row.name}</TableCell>

        <TableCell>
          {formatDate(row.date)}
        </TableCell>

        <TableCell>{row.status}</TableCell>
      </TableRow>

      <TableRow id={detailsId}>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Produtos do pedido
              </Typography>

              <Table size="small" aria-label="produtos do pedido">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Preço</TableCell>
                    <TableCell>Imagem</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.quantity}</TableCell>

                      <TableCell>
                        {item.product.name}
                      </TableCell>

                      <TableCell>
                        {formatPrice(item.product.price)}
                      </TableCell>

                      <TableCell>
                        <img
                          src={`http://localhost:3001/product-file/${item.product.path}`}
                          alt={item.product.name}
                          width="60"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]).isRequired,
          path: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};