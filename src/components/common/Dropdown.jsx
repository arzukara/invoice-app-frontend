import React, { useState, useRef } from 'react';
import { useClickOutside } from "../../utils/utils";
import './Dropdown.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedStatuses
} from '../../features/invoiceSlice';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const {
        selectedStatuses = [], 
    } = useSelector((state) => state.invoice);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (item) => {
        if (selectedStatuses.includes(item)) {
            dispatch(setSelectedStatuses(selectedStatuses.filter(i => i !== item)));
        } else {
            dispatch(setSelectedStatuses([...selectedStatuses, item]));
        }
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useClickOutside(dropdownRef, handleClickOutside);

    const handleSelectAllChange = () => {
        if (selectedStatuses.length === options.length) {
            dispatch(setSelectedStatuses([]));
        } else {
            dispatch(setSelectedStatuses(options));
        }
    };

    const allSelected = selectedStatuses.length === options.length;

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="dropdown-button"
            >
                Filter By Status
                <svg
                    className="dropdown-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <div className="menu">
                        <div
                            key={"all"}
                            className="menu-item"
                            onClick={() => handleSelectAllChange()}
                        >
                            <input
                                type="checkbox"
                                checked={allSelected}
                                onChange={handleSelectAllChange}
                                className="checkbox"
                            />
                            <label>Select All</label>
                        </div>
                        {options.map(item => (
                            <div
                                key={item}
                                className="menu-item"
                                onClick={() => handleCheckboxChange(item)}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedStatuses.includes(item)}
                                    onChange={() => handleCheckboxChange(item)}
                                    className="checkbox"
                                />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
