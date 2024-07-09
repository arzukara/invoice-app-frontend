import React, { useState, useRef } from 'react';
import { useClickOutside } from "../utils/utils";
import './Dropdown.css';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useClickOutside(dropdownRef, handleClickOutside);

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
                        {options.map(item => (
                            <div 
                                key={item} 
                                className="menu-item"
                                onClick={() => handleCheckboxChange(item)}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item)}
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
