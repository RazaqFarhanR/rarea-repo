## Summary

EHydroTel is an end-to-end smart IoT ecosystem designed to monitor, control, and automate hydroponic farming systems. The system allows users to monitor water quality (pH, nutrients/PPM, and temperature) in real-time, manage crop cycles, and execute precise nutrient dosing and pH adjustments.

**Role:** Backend Developer & Frontend Web Admin Developer

---

## Challenges

Hydroponic farming systems generate sensor data in extremely high volumes—pH, PPM, and temperature readings occur every few seconds. The main challenge was how to ingest, store, and display millions of data points without degrading database performance or causing dashboard latency. Additionally, precise two-way communication between the server and the hardware (microcontroller) was required to trigger nutrient pump execution in real-time.

---

## Architecture and Approach

The project was built with a modular architecture consisting of several key components:

1. **Backend API & IoT Gateway** — Core service handling business logic, database operations, device management, and MQTT communication with the hardware.
2. **Web Admin Dashboard** — A web-based portal for administrators to monitor overall metrics, manage devices, users, and configure master data (such as the plant database).
3. **Mobile App** — A Flutter-based mobile application used by customers to monitor their crops.
4. **IoT Edge Node** — Physical hardware based on a microcontroller deployed in the field to collect sensor data and directly trigger actuators.

To address the high data volume, daily summary aggregation cron jobs were implemented (calculating Min, Max, and Avg), ensuring that graph queries remain fast even as sensor data grows continuously.

---

## Key Features

**Backend & IoT Integration**
- **Database Architecture (Prisma ORM):** Complex relational schema covering Users, Devices, Crop Cycles, Plant Database, Sensor Logs, and Calibration Sessions.
- **Two-Way IoT Integration (MQTT):** A persistent MQTT communication gateway between the server and microcontroller to receive real-time telemetry data and send pump execution commands (Nutrient A/B, pH Up/Down).
- **Dynamic Sensor Calibration System:** A state-machine based sensor calibration workflow (pH & TDS) on the backend that ensures periodic sensor reading accuracy.
- **Smart Notification System:** An early warning engine that monitors pH/PPM thresholds and triggers Firebase Push Notifications to the mobile app when anomalies occur.
- **Security & Authentication:** JWT, Role-based Access Control (Admin vs Customer), and OTP management for password resets.

**Frontend Web Admin**
- **Real-Time Dashboard:** An interactive admin interface built with React and Vite, integrated with Socket.io-client to display instant sensor data updates.
- **Data Visualization:** Analytics for historical crop cycles, water quality trends, and device performance using Recharts.
- **Master Data Management:** CRUD interfaces to manage the global plant database, ideal pH & PPM references, and IoT device inventory.

---

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database & ORM:** PostgreSQL, Prisma ORM
- **IoT & Real-time:** MQTT (Eclipse Mosquitto), Socket.io (WebSockets)
- **Frontend (Web Admin):** React.js, Vite, TailwindCSS, DaisyUI, Recharts
- **Background Jobs:** node-cron
- **Third-Party Services:** Firebase Admin, Google Auth, Nodemailer

---

## Results and Impact

The system successfully automated the entire monitoring and control cycle of hydroponics. By implementing daily data aggregation via cron jobs, graph query performance improved drastically despite the ever-growing volume of sensor data. The two-way MQTT integration ensured low communication latency between the server and hardware, while the smart notification system provided users with early warnings before crop conditions became critical.
