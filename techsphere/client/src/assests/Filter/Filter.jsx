import React, { useState } from "react";
import styled from "styled-components";
import {
  Monitor,
  MousePointer2,
  Play,
  DollarSign,
  Calendar
} from "lucide-react";



const FilterWrapper = styled.div`
  background: #111;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  color: #fff;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${(props) => (props.active ? "#7f00ff" : "#222")};
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#6b00cc" : "#333")};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: #222;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 0.85rem;
  color: #fff;

  &:hover {
    background: #333;
  }
`;



export function FilterRow() {

  const filtersData = [
    {
      key: "platform",
      label: "Platform",
      icon: <Monitor size={16} />,
      options: ["Web", "Mobile", "Cloud"]
    },
    {
      key: "type",
      label: "Type",
      icon: <MousePointer2 size={16} />,
      options: ["Hackathon", "Webinar", "Coding Contest"]
    },
    {
      key: "mode",
      label: "Mode",
      icon: <Play size={16} />,
      options: ["Online", "Offline", "Hybrid"]
    },
    {
      key: "cost",
      label: "Free/Paid",
      icon: <DollarSign size={16} />,
      options: ["Free", "Paid"]
    },
    {
      key: "date",
      label: "Date Range",
      icon: <Calendar size={16} />,
      options: ["Today", "This Week", "This Month"]
    }
  ];

  
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});


  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };


  const selectOption = (filterKey, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: option
    }));
    setActiveDropdown(null); 
  };


  const buildQuery = () => {
    const params = new URLSearchParams(selectedFilters).toString();
    return `/api/events?${params}`;
  };

  return (
    <FilterWrapper>
      <Title>Filters</Title>
      <FilterButtons>
        {filtersData.map((filter) => (
          <div key={filter.key} style={{ position: "relative" }}>
            <FilterButton
              active={!!selectedFilters[filter.key]}
              onClick={() => toggleDropdown(filter.key)}
            >
              {filter.icon}
              {selectedFilters[filter.key] || filter.label}
            </FilterButton>


            <Dropdown show={activeDropdown === filter.key}>
              {filter.options.map((option) => (
                <DropdownItem
                  key={option}
                  onClick={() => selectOption(filter.key, option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
        ))}
      </FilterButtons>


      <div style={{ marginTop: "1rem", color: "#aaa", fontSize: "0.85rem" }}>
        API URL: {buildQuery()}
      </div>
    </FilterWrapper>
  );
}
