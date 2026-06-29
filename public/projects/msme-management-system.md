## Summary

A comprehensive business management platform designed specifically for Micro, Small, and Medium Enterprises (MSMEs). The system digitizes daily operations ranging from stock management, sales transaction recording, financial management, to automatic profit/loss reporting. It is paired with a mobile companion app to deliver real-time notifications to business owners. This project was developed as a course final assignment while adopting production-grade software architecture standards.

**Role:** Full-Stack Laravel & Mobile Developer

---

## Challenges

Many MSME operators still manage stock, transactions, and finances manually—using paper records or disconnected spreadsheets. This leads to inaccurate stock data, difficulty tracking profit/loss, and no early warning when stock runs low. An integrated system was needed to connect the web admin dashboard with mobile notifications in real-time.

---

## Architecture and Approach

The system was built with two main interconnected components:

- **Web Application (Laravel)** — RESTful API backend and admin dashboard using Laravel 12 with Laravel Blade and AdminLTE templates. All business logic (stock, transactions, financials) is processed server-side.
- **Mobile Companion (Flutter)** — A lightweight mobile application serving as a push notification receiver. Integrated with Firebase Cloud Messaging (FCM) to send automated alerts when stock is running low or a goods mutation occurs.

---

## Key Features

- **Stock & Supplier Management:** Structured tracking of incoming goods, outgoing goods, and supplier data.
- **Point of Sales (POS) & Returns:** Recording daily sales transactions and managing product returns.
- **Financial Tracking:** Expense recording and automatic profit/loss report generation exportable to PDF.
- **Real-time Push Notifications:** Automatic alerts to the mobile app when stock is low or critical, via Firebase Cloud Messaging.
- **Admin Dashboard:** An intuitive and responsive web interface to manage all business operations.

---

## Tech Stack

- **Backend:** PHP, Laravel 12
- **Web Frontend:** Laravel Blade, AdminLTE
- **Mobile:** Flutter, Dart
- **Notifications:** Firebase Cloud Messaging (FCM)
- **Reporting:** barryvdh/laravel-dompdf (PDF Export)

---

## Results and Impact

The system successfully delivered a real-world business solution for MSMEs by combining organized stock management, automatic financial tracking, and real-time mobile notifications. Business owners now gain instant awareness of their business conditions—from low stock levels to profit/loss summaries—directly from their smartphones, without needing to open a laptop or check manual records.
