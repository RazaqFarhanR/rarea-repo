## Summary

A RESTful API service for a Planning Information System aimed at Regional Government Organizations (OPD). The system is designed to digitize the program planning workflow, real-time performance indicator monitoring, and the centralized, integrated, and transparent archiving of activity evidence and documentation.

**Role:** Backend Developer

---

## Challenges

The planning and performance reporting process within government agencies (OPD) was previously handled manually and scattered across various separate documents. This made it difficult to monitor performance indicator progress in real-time, was prone to data inconsistencies, and complicated the audit process because activity evidence was not centralized.

---

## Architecture and Approach

The backend was built with a robust RESTful architecture using TypeScript to ensure type safety and minimize runtime bugs. Data is stored using MongoDB with Mongoose as the ORM, which is well-suited for managing the flexible hierarchical planning data structure (Program → Indicator → Achievement Metrics).

A JWT-based authentication system secures every endpoint, while the multi-file upload feature using Multer enables the secure and structured archiving of activity evidence.

---

## Key Features

- **Planning Data Management:** Managing the data hierarchy between Planning Programs, Performance Indicators, and achievement metrics (Quantitative & Qualitative).
- **File Management System:** Multi-file upload and management feature for secure and structured activity evidence documentation.
- **Authentication & Security:** JWT-based authentication system and password encryption using Bcrypt.
- **Monitoring & Recapitulation:** Dedicated endpoints for monitoring performance and tracking the completion of performance indicators.
- **Amplification Module:** Management for publishing activity results to various media platforms.

---

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (Mongoose)
- **Security:** JWT, Bcrypt
- **File Management:** Multer

---

## Results and Impact

The system successfully centralized the entire OPD planning and reporting process into a single unified platform. Performance indicator monitoring, which previously required manually checking multiple documents, can now be done in real-time through a single endpoint, significantly improving reporting transparency and efficiency.
