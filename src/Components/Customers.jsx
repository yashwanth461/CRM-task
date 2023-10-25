import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

import "./Customer.css";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = customers.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <h1>Customer Page</h1>
      <div className="customercard-container">
        {currentCards.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <h2>{customer.name}</h2>
            <h4>{customer.occupation}</h4>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Website: {customer.website}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(customers.length / cardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}
