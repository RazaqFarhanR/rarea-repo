## Ringkasan

Proyek full-stack yang menggabungkan aplikasi web, aplikasi mobile, dan perangkat Internet of Things (IoT) untuk mendeteksi pengemudi yang mengalami microsleep. Sistem ini dirancang untuk memberikan peringatan dini secara real-time guna mencegah kecelakaan yang disebabkan oleh kantuk saat berkendara.

**Peran:** Full-Stack Backend & Mobile Developer

---

## Tantangan

Salah satu tantangan terbesar adalah bagaimana memastikan data sensor dari perangkat keras IoT (kamera/sensor pada kendaraan) dapat dikirimkan dan diproses secara real-time ke server, lalu diteruskan ke aplikasi seluler pengemudi atau dashboard web administrator tanpa delay yang berarti. Dalam konteks keselamatan berkendara, keterlambatan sepersekian detik saja bisa berakibat fatal.

---

## Arsitektur dan Pendekatan

Untuk mengatasi tantangan latensi, dipilih **Protokol MQTT** yang jauh lebih ringan dan cepat dibandingkan HTTP konvensional untuk lalu lintas data sensor IoT. Arsitektur sistem terdiri dari empat komponen utama:

1. **Hardware (IoT)** — Mengirimkan data telemetri mata pengemudi secara streaming via MQTT.
2. **Backend API** — Dibangun menggunakan ExpressJS dan database MySQL untuk menampung log deteksi, menyimpan profil pengemudi, dan mengelola routing data.
3. **Frontend Web** — Dashboard admin berbasis ReactJS untuk memantau status armada kendaraan secara keseluruhan.
4. **Aplikasi Mobile** — Aplikasi peringatan berbasis React Native yang terpasang di smartphone pengemudi, yang akan membunyikan alarm keras saat sinyal bahaya diterima dari server.

---

## Fitur Utama

- **Deteksi Real-time via MQTT:** Streaming data telemetri dari sensor ke server menggunakan protokol ringan untuk memastikan latensi minimal.
- **Dashboard Monitoring Armada:** Panel admin berbasis web untuk memantau status seluruh kendaraan dan riwayat kejadian microsleep.
- **Alarm Mobile Otomatis:** Aplikasi mobile yang langsung membunyikan peringatan keras saat sinyal deteksi microsleep diterima.
- **Logging & Analisis:** Pencatatan seluruh kejadian deteksi untuk keperluan analisis pola dan pelaporan.

---

## Tech Stack

- **Backend:** Node.js, ExpressJS
- **Database:** MySQL
- **Frontend Web:** ReactJS
- **Mobile App:** React Native
- **IoT Protocol:** MQTT

---

## Hasil dan Dampak

Sistem ini berhasil mengurangi rata-rata waktu respon (latensi) pengiriman peringatan dari sensor ke aplikasi mobile hingga di bawah 200ms, menjadikannya sistem deteksi yang andal untuk digunakan secara real-time. Arsitektur berbasis MQTT terbukti jauh lebih efisien dibandingkan polling HTTP untuk kasus penggunaan IoT berfrekuensi tinggi.
