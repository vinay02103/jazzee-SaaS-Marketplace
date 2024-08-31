import React from "react";

function AuctionResult({ result }) {
  return (
    <div className="auction-result">
      <h3>Auction Results</h3>
      <ul>
        {result.map((product, index) => (
          <li key={index}>
            <strong>Product:</strong> {product.name} <br />
            <strong>Vendor:</strong> {product.vendor} <br />
            <strong>Initial Price:</strong> ${product.initialPrice} <br />
            <strong>Final Price:</strong> ${product.finalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionResult;
