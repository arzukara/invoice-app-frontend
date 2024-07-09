import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./InvoiceList.css";
import Invoice from "./Invoice";


export default function InvoiceList() {
    const [invoices, setInvoices] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getInvoices() {
            const response = await fetch(`https://invoice-app-backend-jn90.onrender.com/invoice/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const invoicesRes = await response.json();
            setInvoices(invoicesRes);
        }
        getInvoices();
        return;
    }, [invoices.length]);


    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // This following section will display the table with the records of individuals.
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
