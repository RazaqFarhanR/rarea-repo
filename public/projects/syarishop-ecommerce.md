## Summary

A medium-to-large scale e-commerce platform built with a multi-app architecture, separating the interfaces for Customers and Merchants to deliver a more focused and optimized user experience for each. The platform was built using the latest modern web technologies to achieve high performance, smooth interactivity, and informative data visualization.

**Role:** Frontend Developer

---

## Challenges

Building an e-commerce platform capable of serving two types of users with vastly different needs—customers who require a fast and intuitive shopping experience, and merchants who need a comprehensive analytics dashboard and store management system. A monolithic architecture would make the codebase too complex and slow down load times, necessitating a separated approach.

---

## Architecture and Approach

The project adopted a multi-app architecture that separates the Customer and Merchant frontends into independent Next.js applications. This approach reduces code complexity and speeds up page load times since each application only loads the modules relevant to it.

Data fetching was optimized using TanStack React Query v5, which provides automatic caching and reduces redundant API calls. Form validation uses a combination of React Hook Form and Zod to ensure type-safe client-side input security.

---

## Key Features

**Customer Application**
- **Authentication & Profile:** A secure login/registration system with profile management and order history.
- **Catalog & Store Exploration:** Easy browsing of product catalogs and viewing store details (storefronts).
- **Shopping Cart:** Dynamic cart management with a smooth checkout flow.
- **Interactive Animations:** Smooth transitions and animations using Framer Motion.

**Merchant Dashboard**
- **Analytics & Data Visualization:** An interactive dashboard to monitor sales performance and order statistics using Recharts.
- **Store Management:** A full suite of features to manage products (CRUD), process orders, and view notifications.
- **Centralized Communication:** A chat module for direct communication between sellers and customers.
- **Mapping Support:** Leaflet integration for store location pinning and delivery routing.

---

## Tech Stack

- **Framework:** Next.js 15, React 19
- **Styling:** Tailwind CSS v4
- **Data Fetching:** TanStack React Query v5, Axios
- **Form & Validation:** React Hook Form, Zod
- **Database Tooling:** Prisma ORM
- **UI Libraries:** Framer Motion, Recharts, Leaflet, Lucide React, React Toastify

---

## Results and Impact

The separated frontend architecture successfully reduced code complexity significantly and improved initial page load times. React Query integration optimized data caching, drastically reducing redundant API calls, while strict Zod-based form validation minimized user input errors before data was sent to the server.
