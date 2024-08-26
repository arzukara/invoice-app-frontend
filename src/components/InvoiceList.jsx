import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./common/Dropdown";
import api from "../services/api";
import Loader from "./common/Loader";
import MuiTable from "./table/MuiTable";
import './InvoiceList.css';
import { useSnackbar } from "../hooks/useSnackbar";
import {
  setInvoices,
  setActivePage,
  setInvoicesCount,
} from "../features/invoiceSlice";

export default function InvoiceList() {
  const [loading, setLoading] = useState(false);
  const [showSnackbar, SnackbarComponent] = useSnackbar();

  const dispatch = useDispatch();
  const { activePage, pageSize, invoices, selectedStatuses } = useSelector(
    (state) => state.invoice
  );

  useEffect(() => {
    async function fetchInvoiceData() {
      setLoading(true);
      try {
        const invoicesCountRes = await api.post("/invoice/count", {
          selectedStatuses,
        });
        dispatch(setInvoicesCount(invoicesCountRes.count));

        const invoicesRes = await api.post(
          `/invoice/page?page=1&limit=${pageSize}`,
          { selectedStatuses }
        );
        dispatch(setInvoices(invoicesRes));
        dispatch(setActivePage(1));
      } catch (error) {
        showSnackbar(error.response?.data?.error || "Failed to fetch invoice data", "error");
      } finally {
        setLoading(false);
      }
    }
    fetchInvoiceData();
  }, [selectedStatuses, pageSize, dispatch, showSnackbar]);

  useEffect(() => {
    async function fetchInvoicesByPage() {
      setLoading(true);
      try {
        const invoicesRes = await api.post(
          `/invoice/page?page=${activePage}&limit=${pageSize}`,
          { selectedStatuses }
        );
        dispatch(setInvoices(invoicesRes));
      } catch (error) {
        showSnackbar(error.response?.data?.error || "Failed to fetch invoices for the selected page", "error");
      } finally {
        setLoading(false);
      }
    }
    fetchInvoicesByPage();
  }, [activePage, pageSize, selectedStatuses, dispatch, showSnackbar]);

  return (
    <section className="invoices">
      <div className="invoices__container">
        <div className="invoices__top-container">
          <div className="invoices__title-wrap">
            <h1 className="invoices__title">Invoices</h1>
            <Dropdown options={["Draft", "Pending", "Paid"]}></Dropdown>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : invoices ? (
          <MuiTable></MuiTable>
        ) : (
          <div>No Invoice</div>
        )}
      </div>
      <SnackbarComponent />
    </section>
  );
}