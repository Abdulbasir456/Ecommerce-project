# Full-Stack E-Commerce Website  

## Overview  
This is a **fully functional e-commerce website** built using **HTML, CSS, JavaScript (Vanilla JS), Node.js, Express.js, and MongoDB**. It allows users to **register, log in, browse products, add them to the cart, and place orders**.  

The website uses **JWT (JSON Web Token) authentication with Bearer tokens** to ensure secure access to protected routes. Passwords are **hashed using bcrypt** for security.  

---

## Features  
✔️ **User Authentication** – Secure registration & login using JWT & Bearer tokens.  
✔️ **Product Management** – Products are dynamically fetched from MongoDB.  
✔️ **Shopping Cart** – Users can add/remove items before placing an order.  
✔️ **Order Processing** – Orders are stored securely in the database.  
✔️ **RESTful API** – Node.js and Express.js handle the backend.  
✔️ **Secure Transactions** – Bcrypt for password hashing & JWT for authentication.  
✔️ **Fully Responsive** – Designed for desktop & mobile views.  

---

## Tech Stack  
### **Frontend:**  
- HTML, CSS, JavaScript (Vanilla JS)  

### **Backend:**  
- Node.js, Express.js  
- MongoDB (Database)  
- JSON Web Tokens (**JWT**) for authentication  
- Bcrypt for password hashing  

---

## Authentication Flow (JWT & Bearer Token)  
- When a user **registers or logs in**, the server generates a **JWT token**.  
- This token is stored on the frontend and included in the **Authorisation header** using the **Bearer scheme** for protected API requests.  
- Users must send this token to access secured routes (e.g., viewing orders, adding items to the cart).  

```http
Authorisation: Bearer <your-jwt-token>
