import React, { useState } from "react";
import "./Searchable.css";

function Searchable({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(items);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedOption(item);
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = items.filter((item) =>
      item.toLowerCase().startsWith(query)
    );
    setFilteredOptions(filtered);
  };

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-header" onClick={handleToggle}>
          {selectedOption || "Select an items"}
        </div>
        {isOpen && (
          <div className="dropdown-list">
            <input
              type="text"
              placeholder="Search..."
              className="dropdown-search"
              onChange={handleSearch}
            />
            {filteredOptions.map((item) => (
              <div
                key={item}
                className="dropdown-option"
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Searchable;
