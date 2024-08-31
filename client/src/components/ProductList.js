import React from "react";

function ProductList({ onProductSelect }) {
  const products = [
    {
      name: "GitHub",
      category: "Code Collaboration",
      price: 500,
      vendor: "GitHub",
    },
    {
      name: "GitLab",
      category: "Code Collaboration",
      price: 450,
      vendor: "GitLab",
    },
    {
      name: "Bitbucket",
      category: "Code Collaboration",
      price: 400,
      vendor: "Atlassian",
    },
    {
      name: "Slack",
      category: "Communication",
      price: 300,
      vendor: "Slack",
    },
    {
      name: "Zoom",
      category: "Video Conferencing",
      price: 250,
      vendor: "Zoom",
    },
    {
      name: "Jira",
      category: "Project Management",
      price: 350,
      vendor: "Jira",
    },
    {
      name: "Trello",
      category: "Project Management",
      price: 200,
      vendor: "Trello",
    },
    {
      name: "Asana",
      category: "Project Management",
      price: 300,
      vendor: "Asana",
    },
    {
      name: "Monday.com",
      category: "Project Management",
      price: 320,
      vendor: "Monday.com",
    },
    {
      name: "Figma",
      category: "Design Collaboration",
      price: 400,
      vendor: "Figma",
    },
    {
      name: "Adobe XD",
      category: "Design Collaboration",
      price: 450,
      vendor: "Adobe",
    },
    {
      name: "Notion",
      category: "Productivity",
      price: 250,
      vendor: "Notion",
    },
    {
      name: "Confluence",
      category: "Knowledge Management",
      price: 300,
      vendor: "Atlassian",
    },
    {
      name: "Dropbox",
      category: "File Storage",
      price: 200,
      vendor: "Dropbox",
    },
    {
      name: "Google Drive",
      category: "File Storage",
      price: 180,
      vendor: "Google",
    },
  ];

  return (
    <div className="product-list">
      <h3>Available Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => onProductSelect(product)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
