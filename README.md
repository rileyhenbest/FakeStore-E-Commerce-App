# FakeStore E-Commerce App (React CRUD Project)

A responsive e-commerce web application built with React that uses the FakeStoreAPI to simulate real-world product management. This project demonstrates full CRUD functionality (Create, Read, Update, Delete) using API requests along with modern React practices and component-based architecture.

---

## Features

- Home page with navigation
- Product listing page with API integration
- Product details page with dynamic routing
- Add new products using POST requests
- Edit existing products using PUT requests
- Delete products with confirmation modal
- Loading states and error handling
- Responsive UI using React Bootstrap

---

## Tech Stack

- React (Vite)
- React Router DOM
- Axios
- React Bootstrap
- Bootstrap 5
- FakeStoreAPI (mock REST API)

---

## Project Structure
src/
│
├── components/
│ ├── NavbarComponent.jsx
│ ├── ProductCard.jsx
│ ├── LoadingSpinner.jsx
│ └── DeleteModal.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Products.jsx
│ ├── ProductDetails.jsx
│ ├── AddProduct.jsx
│ └── EditProduct.jsx
│
├── services/
│ └── api.js
│
├── App.jsx
└── main.jsx
