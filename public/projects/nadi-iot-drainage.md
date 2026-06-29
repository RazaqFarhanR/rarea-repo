## Summary

An intelligent IoT hardware system based on an ESP32-CAM, designed to monitor drainage water capacity and detect potential flooding in real-time. The system integrates multi-sensor readings with visual capture capabilities, transmitting telemetry data packets to a backend using MQTT and HTTP protocols.

**Role:** IoT Engineer

---

## Challenges

Conventional drainage monitoring systems rely solely on numerical water level data, which often produces false alarms because there is no visual evidence to validate the actual conditions. Additionally, field monitoring devices must be capable of operating autonomously in locations without grid power (off-grid), requiring the integration of a solar panel and a smart power management strategy.

---

## Architecture and Approach

The firmware was built with a Clean Architecture and a dynamic State Machine design pattern, covering four operating modes:

- **Commissioning** — Initial configuration mode via a Captive Portal for WiFi and backend URL setup.
- **Operational** — The primary operational mode with sensor readings, camera capture, and data transmission.
- **Maintenance** — A maintenance mode for calibration and diagnostics.
- **Offline** — A low-power mode when connectivity is unavailable.

This separation of logic makes the firmware more robust and easier to maintain. A dynamic interval algorithm leverages the microcontroller's Deep Sleep mode, adjusting wake-up frequency based on weather conditions (waking up more frequently during rain) to optimize power efficiency from the solar panel supply.

---

## Key Features

- **Telemetry & Visual Compression:** Precise readings of water level and rainfall status, alongside JPEG image capture and compression for visual validation of drainage conditions.
- **Power Management & Solar Energy:** A dynamic Deep Sleep algorithm working in tandem with the solar panel power supply system to ensure non-stop autonomous operation.
- **Self-Configuration Portal (Captive Portal):** A local web server inside the ESP32-CAM using HTML/JS and WebSockets, allowing field technicians to calibrate the device and set credentials without any re-flashing.
- **Multi-Protocol Communication:** Data transmission using MQTT (for real-time telemetry) and HTTP (for image delivery).

---

## Tech Stack

- **Microcontroller:** ESP32-CAM (AI-Thinker), OV2640 Camera
- **Sensors:** Waterproof Ultrasonic Sensor (AJ-SR04M), Rain Sensor
- **Power Supply:** Solar Panel
- **Language & Framework:** C++ (Arduino Framework), PlatformIO
- **Protocols:** WiFi, MQTT (JSON Payload), HTTP

---

## Results and Impact

The device produced a cost-effective and autonomous remote water infrastructure monitoring system. The addition of real-time photographic evidence accompanying numerical water level data successfully eliminated false alarms, thereby accelerating the response and decision-making process for early flood warnings.
