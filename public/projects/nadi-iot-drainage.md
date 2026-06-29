## Ringkasan

Sistem perangkat keras cerdas berbasis Internet of Things (IoT) menggunakan ESP32-CAM untuk memantau kapasitas tata air (drainase) dan mendeteksi potensi banjir secara real-time. Sistem ini mengintegrasikan pembacaan multi-sensor dengan kapabilitas tangkapan visual, dan mengirimkan paket data telemetri ke backend menggunakan protokol MQTT dan HTTP.

**Peran:** IoT Engineer

---

## Tantangan

Sistem pemantauan drainase konvensional hanya mengandalkan data angka ketinggian air, yang seringkali menghasilkan false alarm (alarm palsu) karena tidak ada bukti visual untuk memvalidasi kondisi sebenarnya. Selain itu, perangkat pemantauan di lapangan harus mampu beroperasi secara otonom di lokasi tanpa akses listrik (off-grid), sehingga diperlukan integrasi panel surya (solar panel) dan strategi manajemen daya yang cerdas.

---

## Arsitektur dan Pendekatan

Firmware dibangun dengan arsitektur Clean Architecture dan pola desain State Machine yang dinamis, meliputi empat mode operasi:

- **Commissioning** — Mode konfigurasi awal melalui Captive Portal untuk setup WiFi dan URL backend.
- **Operational** — Mode operasional utama dengan pembacaan sensor, capture kamera, dan transmisi data.
- **Maintenance** — Mode pemeliharaan untuk kalibrasi dan diagnostik.
- **Offline** — Mode hemat daya saat konektivitas tidak tersedia.

Pemisahan logika ini membuat firmware lebih tangguh dan mudah dipelihara. Algoritma interval dinamis mendayagunakan mode Deep Sleep mikrokontroler, menyesuaikan frekuensi wake-up berdasarkan kondisi cuaca (lebih sering aktif saat hujan) untuk mengoptimalkan efisiensi suplai daya dari solar panel.

---

## Fitur Utama

- **Telemetri & Kompresi Visual:** Pembacaan presisi terhadap level air dan status curah hujan, sekaligus capture dan kompresi gambar JPEG untuk validasi visual kondisi drainase.
- **Manajemen Daya & Tenaga Surya:** Algoritma Deep Sleep dinamis yang bekerja sama dengan sistem suplai daya panel surya (solar panel) untuk memastikan perangkat beroperasi non-stop secara otonom.
- **Portal Konfigurasi Mandiri (Captive Portal):** Web Server lokal di dalam ESP32-CAM menggunakan HTML/JS dan WebSockets, memungkinkan teknisi di lapangan mengkalibrasi alat dan mengatur kredensial tanpa proses flashing ulang.
- **Komunikasi Multi-protokol:** Transmisi data menggunakan MQTT (untuk telemetri real-time) dan HTTP (untuk pengiriman gambar).

---

## Tech Stack

- **Mikrokontroler:** ESP32-CAM (AI-Thinker), OV2640 Camera
- **Sensor:** Waterproof Ultrasonic Sensor (AJ-SR04M), Rain Sensor
- **Power Supply:** Solar Panel (Tenaga Surya)
- **Bahasa & Framework:** C++ (Arduino Framework), PlatformIO
- **Protokol:** WiFi, MQTT (JSON Payload), HTTP

---

## Hasil dan Dampak

Perangkat ini menghasilkan sistem pemantauan infrastruktur tata air jarak jauh yang cost-effective dan otonom. Adanya bukti foto real-time yang menyertai data angka ketinggian air berhasil menghilangkan false alarm, sehingga mempercepat respons dan pengambilan keputusan terkait peringatan dini banjir.
