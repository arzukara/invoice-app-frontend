import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./InvoiceList.css";
import Invoice from "./Invoice";
import api from "../services/api";

export default function InvoiceList() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        async function getInvoices() {
            const invoicesRes = await api.get('/invoice');
            setInvoices(invoicesRes);
        }
        getInvoices();
        return;
    }, [invoices.length]);


    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="invoices">
            <div className="invoices__container">
                <div className="invoices__top-container">
                    <div className="invoices__title-wrap">
                        <h1 className="invoices__title">Invoices</h1>
                       <Dropdown options={['Draft', 'Pending', 'Paid']}></Dropdown>
                    </div>
                </div>

                {invoices.length ? (
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
