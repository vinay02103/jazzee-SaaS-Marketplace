import React, { useState } from "react";
import axios from "axios";

const AuctionForm = ({ selectedProducts, onAuctionComplete }) => {
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/auction", {
        selectedProducts,
        budget,
      });

      if (Array.isArray(response.data)) {
        onAuctionComplete(response.data);
      } else {
        setError("Invalid auction results received.");
      }
    } catch (err) {
      console.error("Error conducting auction:", err);
      setError("Error conducting auction.");
    }
  };

  return (
    <div className="auction-form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter your budget"
          required
        />
        <button type="submit">Start Auction</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default AuctionForm;
