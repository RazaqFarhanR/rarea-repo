## Summary

A full-stack project combining a web application, mobile application, and Internet of Things (IoT) devices to detect drivers experiencing microsleep. The system is designed to deliver real-time early warnings to prevent accidents caused by drowsiness while driving.

**Role:** Full-Stack Backend & Mobile Developer

---

## Challenges

One of the biggest challenges was ensuring that sensor data from the IoT hardware (a camera/sensor mounted on the vehicle) could be transmitted and processed in real-time to the server, then forwarded to the driver's mobile app or the administrator's web dashboard without any meaningful delay. In the context of driving safety, even a fraction-of-a-second delay could be fatal.

---

## Architecture and Approach

To overcome the latency challenge, **MQTT Protocol** was chosen—far lighter and faster than conventional HTTP—for IoT sensor data traffic. The system architecture consists of four main components:

1. **Hardware (IoT)** — Streams driver eye telemetry data via MQTT.
2. **Backend API** — Built with ExpressJS and a MySQL database to store detection logs, save driver profiles, and manage data routing.
3. **Web Frontend** — A ReactJS-based admin dashboard for monitoring the overall fleet status.
4. **Mobile App** — A React Native alert application installed on the driver's smartphone that triggers a loud alarm when a danger signal is received from the server.

---

## Key Features

- **Real-time Detection via MQTT:** Streaming telemetry data from sensors to the server using a lightweight protocol to ensure minimal latency.
- **Fleet Monitoring Dashboard:** A web-based admin panel to monitor the status of all vehicles and microsleep incident history.
- **Automatic Mobile Alarm:** A mobile app that immediately sounds a loud alert when a microsleep detection signal is received.
- **Logging & Analysis:** Recording all detection events for pattern analysis and reporting purposes.

---

## Tech Stack

- **Backend:** Node.js, ExpressJS
- **Database:** MySQL
- **Web Frontend:** ReactJS
- **Mobile App:** React Native
- **IoT Protocol:** MQTT

---

## Results and Impact

The system successfully reduced the average alert delivery latency—from sensor to mobile app—to under 200ms, making it a reliable detection system for real-time use. The MQTT-based architecture proved far more efficient than HTTP polling for high-frequency IoT use cases.
