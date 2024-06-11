# Inventory Management System

 This project implements a basic inventory management system for an e-commerce store. It provides APIs for adding/removing items to/from the inventory, adding items to the cart, and applying discount coupons.

# Getting Started

# To run the server locally, follow these steps:

 1. Clone the repository:

    ```bash
    git clone https://github.com/SIDDHESH1564/DevDynamics_Problem_Statement_2.git
    ```

 2. Install dependencies:

    ```bash
    npm install
    ```

 3. Start the server:

    ```bash
    npm start
    ```

    The server will start running on `http://localhost:3002` by default.



## Postman collection as a shareable link

    https://www.postman.com/aerospace-astronomer-66584240/workspace/sidd/collection/31104175-e9e9c095-ec0f-4226-9e53-3984ab9e30a6?action=share&creator=31104175
    

# API Endpoints

 - `POST /addItemToInventory`: Add an item to the inventory.
  
   Request Body:
   ```json
   {
     "productId": "product1",
     "quantity": 100
   }
   ```

 - `POST /removeItemFromInventory`: Remove an item from the inventory.
  
   Request Body:
   ```json
   {
     "productId": "product1",
     "quantity": 50
   }
   ```

 - `POST /addItemToCart`: Add an item to the cart.
  
   Request Body:
   ```json
   {
     "customerId": "customer1",
     "productId": "product1",
     "quantity": 2
   }
   ```

 - `POST /applyDiscountCoupon`: Apply a discount coupon to the cart.
  
   Request Body:
   ```json
   {
     "cartValue": 1000,
     "discountId": "DISCOUNT10"
   }
   ```

## Discount Coupons

 The following discount coupons are available:

 - `DISCOUNT10`: 10% discount with a maximum discount of 50 Rs.

## Dependencies

 - `express`: Web server framework for Node.js
 - `joi`: Schema validation library for JavaScript objects

## Authors

 - Siddhesh Khairnar

## License

- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
