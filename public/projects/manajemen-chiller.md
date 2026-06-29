## Summary

A two-sided platform combining a Chiller Asset Management feature for internal operational use and an Ordering System for customers and ice cream resellers. The application unifies two previously separate business processes into a single modern and responsive interface.

**Role:** Frontend Developer

---

## Challenges

An F&B company was struggling to track the whereabouts and condition of chillers (refrigerators) loaned to various resellers. At the same time, the ice cream restock ordering process was still handled manually via text messages, which was highly prone to human error and made order history tracking very difficult.

---

## Architecture and Approach

This project placed a strong emphasis on the Frontend to deliver the best possible user experience:

- **Slicing with TailwindCSS** — The design was crafted to guarantee full responsiveness on both mobile devices and desktops. The use of utility classes enabled writing CSS that is minimal in bloat yet highly aesthetic.
- **State Management (ReactJS)** — When the order cart is updated, the state must be propagated to all related components (the cart indicator in the header, total price, etc.). ReactJS component management handles this seamlessly.
- **REST API Integration** — The frontend interface dynamically fetches the latest ice cream stock availability and chiller status data from the backend.

---

## Key Features

- **Chiller Asset Dashboard:** Tracking the status, location, and condition of all chiller units distributed across various resellers.
- **Online Ordering System:** An intuitive ice cream ordering interface with a dynamic shopping cart and automatic price calculation.
- **Real-time Stock Management:** An always-up-to-date product availability view based on backend data.
- **Multi-device Responsive:** An interface that functions optimally on laptops (for internal admins) and smartphones (for field resellers).

---

## Tech Stack

- **Frontend:** ReactJS, TailwindCSS
- **Integration:** REST API (Axios)
- **State Management:** React Hooks

---

## Results and Impact

The application successfully unified two business processes (logistics assets and sales) into a single modern platform. Its user-friendly design allows reseller agents to restock products independently without contacting an admin, significantly cutting order processing time.
