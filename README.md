# 🛒 Modern E-commerce App using React.js

A fully functional E-commerce web application built with **React.js** and **Vite**. This project demonstrates advanced frontend concepts including Global State Management, Routing, Form Handling, Localization, and Performance Optimization.

## ✨ Features

### 🛍️ Product Management
- **Product Listing:** Fetches data from a real API (DummyJSON) using **Axios**.
- **Server-side Pagination:** Efficiently handles large datasets using `limit` and `skip`.
- **Product Details:** Dynamic routing to view individual product details via `useParams`.
- **Stock Status:** Visual indicators for "In Stock" or "Out of Stock".

### 🛒 Shopping Cart (Redux Toolkit)
- **Global State:** Managed using **Redux Toolkit**.
- **Functionality:**
  - Add items to the cart.
  - Remove items.
  - Update quantities (+/-).
  - Real-time cart counter in the Navbar.
  - Calculate total price dynamically.

### 🌍 Localization (Context API)
- **Language Switcher:** Toggle between English (EN) and Arabic (AR).
- **RTL Support:** Full layout direction flip (`dir="rtl"`) when Arabic is selected.
- **Persistence:** Language preference managed via **Context API**.

### 📝 Forms & Validation
- **Registration Form:** Built with **Native React Validation** (Regex for password strength, confirm password matching).
- **Contact Us Form:** Built using **Formik** and **Yup** for schema validation and error handling.
- **Login Form:** Styled and centered using Bootstrap.

### ⚡ Performance & Architecture
- **Code Splitting:** Implemented **Lazy Loading** and `Suspense` for pages to optimize initial load time.
- **Environment Variables:** API URLs secured in `.env` files.
- **Responsive Design:** Fully responsive UI using **Bootstrap**.

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) (Vite)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & Context API
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Forms:** Formik & Yup
- **Icons:** FontAwesome

---

