
# Jazzee SaaS Marketplace

The SaaS Marketplace is a platform that allows users to browse, select, and initiate a Dutch reverse auction for SaaS products. The marketplace is designed for enterprises seeking to purchase SaaS products at the best prices through an automated auction process. Users can choose from a curated list of 15 SaaS products, select up to 3 products, and receive competitive quotes from vendors.


## Features

- Product Listing: View a curated list of 15 SaaS products.
- Product Selection: Choose up to 3 products for the auction.
- Dutch Reverse Auction: Initiate an auction to get the best
  quotes from vendors.
- Results Display: View final prices and vendor details for the    selected products.




## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- CSS: Responsive design using custom styles
- Tools: Axios for API requests, dotenv for environment variables
## Project Structure

```
saas-marketplace-project/
│
├── client/                   # Frontend React application
│   ├── public/               # Public assets (index.html, etc.)
│   ├── src/                  # Source files
│   │   ├── components/       # React components (ProductList, AuctionForm, etc.)
│   │   ├── styles/           # CSS styles
│   │   ├── App.js            # Main App component
│   │   ├── index.js          # Entry point for React
│   └── package.json          # Frontend dependencies and scripts
│
├── server/                   # Backend Express application
│   ├── models/               # Mongoose models (Product.js, Auction.js)
│   ├── routes/               # Express routes (productRoutes.js, auctionRoutes.js)
│   ├── controllers/          # Controllers for handling business logic
│   │   ├── auctionController.js
│   │   └── productController.js
│   ├── .env                  # Environment variables (e.g., MongoDB URI)
│   ├── server.js             # Entry point for Express server
│   └── package.json          # Backend dependencies and scripts
│
├── .gitignore                # Git ignore file
├── README.md                 # This file



```


## Installation

1.Clone the repository:
```bash
git clone https://github.com/vinay02103/jazzee-SaaS-Marketplace/tree/master.git

```
2.Navigate to the Client directory and run:
 ```bash
npm install

```
3.Navigate to the server directory and run:

```bash
 npm install

```


4.Run the Application:

- Start the server:
```bash
 node server.js

```
- Start the client:
```bash
  npm  start

```

    
## API Endpoints
- Get Products:

   - Endpoint: GET /api/products
    - Description: Retrieves the list of available products in the marketplace.
- Start Auction:

    - Endpoint: POST /api/auction
    - Description: Starts a Dutch reverse auction with selected products and budget. Returns the auction results with final prices.
## Assumptions

- Implement real-time auction updates using WebSockets.
- Add user authentication and account management.
- Integrate with real vendor APIs for live pricing and negotiations.
- Enhance the UI with more detailed product and vendor information
## Usage

- Home Page: View and select from a list of available SaaS products.
- Select Products: Choose up to 3 products to compare.
- Auction: Provide your budget and start the auction to get the best quotes.
- Results: Review the auction results showing the best prices, vendors, and product details.
## Dependencies

- Backend
  - express: Web framework for Node.js
   - mongoose: MongoDB object modeling tool
   - cors: Middleware for enabling Cross-Origin Resource Sharing
   - dotenv: Loads environment variables from a .env file
- Frontend
   - react: JavaScript library for building user interfaces
    - axios: Promise-based HTTP client for the browser and Node.js 
