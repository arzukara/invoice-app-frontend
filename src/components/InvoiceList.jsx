import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import "./InvoiceList.css";
import Invoice from "./Invoice";
import api from "../services/api";

export default function InvoiceList() {
    const [invoices, setInvoices] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    useEffect(() => {
        async function getInvoices() {
            const invoicesRes = await api.get('/invoice');
            setInvoices(invoicesRes);
        }
        getInvoices();
        return;
    }, [selectedStatuses.length == 0]);

    useEffect(() => {
        async function getInvoicesByStatus() {
            const invoicesRes = await api.post('/invoice/filter', { selectedStatuses });
            setInvoices(invoicesRes);
        }
        if(selectedStatuses.length > 0){
            getInvoicesByStatus();
        }
        return;
    }, [selectedStatuses.length]);

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

                {invoices ? (
                    <ul className="invoices__list">
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
                    <></>
                )}
            </div>
        </section>
    );
}
