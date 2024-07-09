import "./Invoice.css";
import { Link } from "react-router-dom";

const Invoice = ({ invoice }) => {
  
    const handleInvoiceClick = () => {
     // onInvoiceClick(invoice);
    };
  
    return (
      <li className="invoice">
        <Link
          className="invoice__container"
          to="/reciept"
          onClick={handleInvoiceClick}
        >
          <div className="invoice__left-container">
            <p className="invoice__info">
              #<span className="invoice__info_bold">{invoice.id}</span>
            </p>
            <p className="invoice__info">{invoice.createdAt}</p>
            <p className="invoice__info">{invoice.clientName}</p>
          </div>
  
          <div className="invoice__right-container">
            <p className="invoice__moeny">{`£ ${invoice.total}`}</p>
  
            <div className="invoice__status-container">
              <div className={`invoice__status-wrap invoice__status-wrap_type_${invoice.status}`}>
                <div className={`invoice__status-dot invoice__status-dot_type_${invoice.status}`}></div>
                <p className={`invoice__status invoice__status_type_${invoice.status}`}>
                  {invoice.status}
                </p>
              </div>
  
              <i className="invoice__status-icon"></i>
            </div>
          </div>
        </Link>
      </li>
    );
  };
  export default Invoice;