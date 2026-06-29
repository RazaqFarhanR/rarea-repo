## Summary

A cross-platform e-commerce application designed to simplify the online shopping and store management experience. The app features two separate interfaces for Customers and Store Owners (Admin), complete with an AI-powered smart chatbot and a live customer service chat system. This project was developed as a practical implementation to fulfill a course's learning outcomes, while simultaneously demonstrating mastery of industry-standard application development practices.

**Role:** Mobile Developer

---

## Challenges

Building a full-featured mobile e-commerce application with two separate interfaces (Customer and Admin) that must remain responsive and intuitive. Additionally, AI service integration was required to deliver a chatbot capable of automatically answering customer questions 24/7, alongside a real-time chat system between customers and customer service.

---

## Architecture and Approach

The application was built using Flutter as the cross-platform framework, with Firebase as the backend providing a real-time database (Cloud Firestore), authentication, and file storage. The application architecture clearly separates the Customer and Admin modules, with shared services for commonly used components.

Google Generative AI (Gemini) integration enables the chatbot to answer customer questions naturally, while Firebase Cloud Messaging ensures push notifications are delivered instantly to user devices.

---

## Key Features

**Customer Application**
- **Catalog & Checkout:** Product exploration, shopping cart, checkout, order tracking, and wishlist.
- **AI Chatbot:** Google Generative AI integration for an intelligent and responsive automated customer service.
- **Profile Management:** Account and shipping address settings.

**Admin Application**
- **Product & Category Management:** Structured management of product and category inventory.
- **Order Processing:** Order management from checkout through to delivery.
- **Shipping Configuration:** Management of delivery areas and pickup methods.

---

## Tech Stack

- **Frontend:** Flutter (Dart)
- **Backend & Database:** Firebase (Cloud Firestore, Authentication, Storage)
- **AI:** Google Generative AI (Gemini)
- **Notifications:** Firebase Cloud Messaging, Awesome Notifications
- **Security:** Flutter Secure Storage

---

## Results and Impact

The application successfully delivered a comprehensive mobile e-commerce experience with an AI chatbot capable of handling customer inquiries automatically. Firebase integration as a real-time backend ensured that order and chat data remained instantly synchronized across all devices.
