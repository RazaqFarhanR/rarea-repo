## Ringkasan

EHydroTel adalah ekosistem IoT cerdas end-to-end yang dirancang untuk memonitor, mengontrol, dan mengotomatisasi sistem pertanian hidroponik. Sistem ini memungkinkan pengguna untuk memantau kualitas air (pH, nutrisi/PPM, dan suhu) secara real-time, mengatur siklus tanam, serta melakukan otomatisasi pemberian nutrisi dan penyesuaian pH secara presisi.

**Peran:** Backend Developer & Frontend Web Admin Developer

---

## Tantangan

Sistem pertanian hidroponik menghasilkan data sensor dalam volume sangat tinggi — pembacaan pH, PPM, dan suhu terjadi setiap beberapa detik. Tantangan utamanya adalah bagaimana menerima, menyimpan, dan menampilkan jutaan baris data ini tanpa membuat database lambat atau dashboard menjadi tidak responsif. Selain itu, diperlukan komunikasi dua arah yang presisi antara server dan perangkat keras (microcontroller) untuk mengirimkan perintah eksekusi pompa nutrisi secara real-time.

---

## Arsitektur dan Pendekatan

Proyek ini dibangun dengan arsitektur modular yang terdiri dari beberapa komponen utama:

1. **Backend API & IoT Gateway** — Core service yang menangani logika bisnis, database, manajemen perangkat, dan komunikasi MQTT dengan hardware.
2. **Web Admin Dashboard** — Portal manajemen berbasis web untuk admin memantau metrik keseluruhan, mengelola perangkat, pengguna, dan konfigurasi master data (seperti database tanaman).
3. **Mobile App** — Aplikasi mobile berbasis Flutter yang digunakan oleh pelanggan untuk memonitor tanaman mereka.
4. **IoT Edge Node** — Perangkat keras (hardware) fisik berbasis mikrokontroler yang terpasang di lapangan untuk mengambil data sensor dan mengeksekusi aktuator secara langsung.

Untuk mengatasi masalah volume data, diimplementasikan cron jobs yang mengagregasi data sensor mentah menjadi Daily Summary (Min, Max, Avg), sehingga query grafik tetap cepat meskipun data terus bertambah setiap detik.

---

## Fitur Utama

**Backend & IoT Integration**
- **Arsitektur Database (Prisma ORM):** Skema relasional kompleks yang mencakup entitas Pengguna, Perangkat, Siklus Tanam, Database Tanaman, Log Sensor, dan Sesi Kalibrasi.
- **Integrasi IoT Dua Arah (MQTT):** Gateway komunikasi MQTT yang persisten antara server dan microcontroller untuk menerima data telemetri secara real-time dan mengirimkan perintah eksekusi pompa (Nutrisi A/B, pH Up/Down).
- **Sistem Kalibrasi Sensor Dinamis:** Alur kerja kalibrasi sensor (pH & TDS) berbasis state-machine di backend yang memastikan akurasi pembacaan alat secara berkala.
- **Sistem Notifikasi Cerdas:** Engine peringatan dini yang memonitor ambang batas pH/PPM dan memicu Firebase Push Notification ke aplikasi mobile ketika terjadi anomali.
- **Keamanan & Autentikasi:** JWT, Role-based Access Control (Admin vs Customer), dan manajemen OTP untuk password reset.

**Frontend Web Admin**
- **Dashboard Real-time:** Antarmuka admin interaktif menggunakan React dan Vite, terintegrasi dengan Socket.io-client untuk menampilkan perubahan data sensor secara instan.
- **Visualisasi Data:** Grafik analitik historis siklus panen, tren kualitas air, dan performa alat menggunakan Recharts.
- **Manajemen Master Data:** Antarmuka CRUD untuk mengelola basis data tanaman global, referensi pH & PPM ideal, serta inventaris perangkat IoT.

---

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database & ORM:** PostgreSQL, Prisma ORM
- **IoT & Real-time:** MQTT (Eclipse Mosquitto), Socket.io (WebSockets)
- **Frontend (Web Admin):** React.js, Vite, TailwindCSS, DaisyUI, Recharts
- **Background Jobs:** node-cron
- **Layanan Pihak Ketiga:** Firebase Admin, Google Auth, Nodemailer

---

## Hasil dan Dampak

Sistem ini berhasil mengotomatisasi seluruh siklus monitoring dan kontrol hidroponik. Dengan mengimplementasikan agregasi data harian melalui cron jobs, performa query grafik meningkat drastis meskipun volume data sensor terus bertambah. Integrasi MQTT dua arah memastikan latensi komunikasi antara server dan perangkat keras tetap rendah, sementara sistem notifikasi cerdas memberikan peringatan dini kepada pengguna sebelum kondisi tanaman menjadi kritis.
