import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import "./InvoiceList.css";
import Invoice from "./Invoice";
import api from "../services/api";
import Loader from "./Loader";

export default function InvoiceList() {
    const [loading, setLoading] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    useEffect(() => {
        async function getInvoices() {
            setLoading(true);
            const invoicesRes = await api.get('/invoice');
            setInvoices(invoicesRes);
            setLoading(false);
        }
        if (selectedStatuses.length === 0) { getInvoices(); }
        return;
    }, [selectedStatuses]);

    useEffect(() => {
        async function getInvoicesByStatus() {
            setLoading(true);
            const invoicesRes = await api.post('/invoice/filter', { selectedStatuses });
            setInvoices(invoicesRes);
            setLoading(false);
        }
        if (selectedStatuses.length > 0) {
            getInvoicesByStatus();
        }
        return;
    }, [selectedStatuses]);

    return (
        <section className="invoices">
            <div className="invoices__container">
                <div className="invoices__top-container">
                    <div className="invoices__title-wrap">
                        <h1 className="invoices__title">Invoices</h1>
                        <Dropdown
                            options={['Draft', 'Pending', 'Paid']}
                            selectedStatuses={selectedStatuses}
                            setSelectedStatuses={setSelectedStatuses}
                        ></Dropdown>
                    </div>
                </div>
                {loading ? (<Loader />) : (
                    invoices ? (
                        <ul className="invoices__list" >
                            {
                                invoices.map((invoice, id) => (
                                    <Invoice
                                        key={id}
                                        invoice={invoice}

                                    />
                                ))
                            }
                        </ul>
                    ) : (
                        <div>No Invoice</div>
                    )
                )}

            </div>
        </section >
    );
}
