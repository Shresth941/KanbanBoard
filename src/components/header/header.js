import React, { useState } from 'react';
import './header.css';
import { FaList } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

function Headers({ setGroupBy, setSortBy, groupBy, sortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGroup,setIsOpenGroup]=useState(false);
  const [isOpensort,setIsOpensort]=useState(false);

  const toggleDropdown1 = () => setIsOpen(!isOpen);
  const toggleDropdown2 = () => setIsOpenGroup(!isOpenGroup);
  const toggleDropdown3 = () => setIsOpensort(!isOpensort);


  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown1}>
        <FaList style={{marginRight:'5px'}}/>
        Display
        <RiArrowDropDownLine />
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu-container">
          <div className="dropdown-group-sort">
            
              <button className="dropdown-toggle"onClick={toggleDropdown2}>
                
                Group By: {groupBy || 'Select'}
                <RiArrowDropDownLine />
              </button >
              <div>{isOpenGroup && ( <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setGroupBy('status')}
                  >
                    Status
                    <RiArrowDropRightLine />
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setGroupBy('priority')}
                  >
                    Priority
                    <RiArrowDropRightLine />
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setGroupBy('userId')}
                  >
                    User
                    <RiArrowDropRightLine />
                  </button>
                </li>
              </ul>)}
             
            </div>
            <div>
              <button className="dropdown-toggle"  onClick={toggleDropdown3}>

                Sort By: {sortBy || 'Select'}  <RiArrowDropDownLine />
              </button>
              {isOpensort && ( <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setSortBy('title')}
                  >
                    Title
                    <RiArrowDropRightLine />
                  </button>
                </li>
              </ul>)}
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Headers;
