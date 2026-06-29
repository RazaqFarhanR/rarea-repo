## Summary

An integrated exam management platform designed to facilitate the evaluation and belt/level promotion process (UKT) for a Pencak Silat organization. The application digitizes all aspects of the examination, from participant registration, theory question management, real-time practical/physical scoring, to result tabulation and final score printing. The system was designed to handle a tiered organizational structure (Central/Branch, Sub-branch, and Chapter).

**Role:** Full-Stack Developer

---

## Challenges

The Pencak Silat belt promotion exam process involves many parties—admin, branch management, field examiners, and hundreds of participants—all working simultaneously at different locations. Practical assessment involves many specific parameters (Senam, Jurus, Physical, Technique, Sparring, Staff, Dagger, Kris) that were previously recorded on paper, making them error-prone and requiring a very long tabulation time. A system was needed that could instantly synchronize assessment data between field examiners and central management.

---

## Architecture and Approach

The system was built with a full-stack architecture that clearly separates the frontend and backend:

- **Frontend (Next.js & React)** — An interactive, responsive user interface on various devices, from laptops for management to tablets for field examiners.
- **Backend (Express & Sequelize ORM)** — A robust API with a multi-role authentication system using JWT for 4 user entities: Admin, Management, Examiner, and Student.
- **Real-time Sync (Socket.io)** — Instant synchronization of assessment data between field examiners and central management.

---

## Key Features

- **Role & Access Management (RBAC):** A secure multi-role system for Admin, Management (branch/sub-branch), Examiners (field assessment), and Students (exam participants).
- **Theory & Practical Assessment Digitization:** A theory exam module (questions, answer keys, automatic calculation) and a comprehensive practical assessment module with martial arts-specific parameters.
- **Bulk Data Processing:** Import and export of large student datasets using CSV & Excel formats, drastically cutting manual data entry time.
- **Real-time Monitoring:** Instant assessment data synchronization between examiners and management using Socket.io.

---

## Tech Stack

- **Frontend:** Next.js 13, Tailwind CSS, Axios, React ApexCharts
- **Backend:** Node.js, Express.js, Sequelize ORM, Socket.io
- **Database:** MySQL
- **Security:** JWT, Bcrypt
- **Tools:** Multer, ExcelJS, CSV Parser, jsPDF

---

## Results and Impact

The system successfully digitized the entire belt promotion exam process, reducing what previously took days to tabulate into a near-instant process. The real-time monitoring feature eliminated the need to wait for all examiners to finish before viewing results, and the PDF export feature enabled certificate printing immediately after the examination concluded.
