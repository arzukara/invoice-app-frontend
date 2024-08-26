import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination, PaginationItem, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setPageSize } from "../../features/invoiceSlice";
import "./MuiTable.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "createdAt", headerName: "Created At", width: 130 },
  { field: "clientName", headerName: "Client Name", width: 130 },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <StatusCell status={params.row.status} sx={{ display: 'flex'}}plotType="bar" />
    ),
  },
];

function StatusCell({ status }) {
  return (
    <div className="invoice__status-container">
      <div
        className={`invoice__status-wrap`}
      >
        <div
          className={`invoice__status-dot invoice__status-dot_type_${status}`}
        ></div>
        <p className={`invoice__status invoice__status_type_${status}`}>
          {status}
        </p>
      </div>
      <i className="invoice__status-icon"></i>
    </div>
  );
}

const CustomPagination = () => {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { activePage, pageSize, invoicesCount } = useSelector(
    (state) => state.invoice
  );

  useEffect(() => {
    const totalPages = Math.ceil(invoicesCount / pageSize);
    setPageCount(totalPages);
  }, [invoicesCount, pageSize]);

  const handleChange = (event, value) => {
    dispatch(setActivePage(value));
  };

  const handlePageSizeChange = (event) => {
    dispatch(setPageSize(event.target.value));
  };

  return (
    <div className="pagination-container">
      <div className="pagination-select-page-size">
        <Typography variant="body2">Rows per page:</Typography>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      <Pagination
        count={pageCount}
        page={activePage}
        onChange={handleChange}
        showFirstButton
        showLastButton
        renderItem={(item) => <PaginationItem {...item} component="button" />}
      />
    </div>
  );
};
export default function MuiTable() {
  const dispatch = useDispatch();
  const { activePage, pageSize, invoices, invoicesCount } = useSelector(
    (state) => state.invoice
  );

  return (
    <div style={{ display: "table", width:'-webkit-fill-available', height:'250px' }}>
      <DataGrid
        rows={invoices}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: activePage - 1, pageSize: pageSize },
          },
        }}
        paginationMode="server"
        rowCount={invoicesCount}
        pageSizeOptions={[3, 5, 10]}
        onPaginationModelChange={(paginationModel) => {
          if (paginationModel.pageSize !== pageSize) {
            dispatch(setPageSize(paginationModel.pageSize));
          }
        }}
        checkboxSelection
        slots={{
          pagination: CustomPagination,
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              No rows in DataGrid
            </Stack>
          ),
          NoResultsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              Local filter returns no result
            </Stack>
          )
        }}
      />
    </div>
  );
}
