## Ringkasan

Platform manajemen ujian terintegrasi yang dirancang khusus untuk memfasilitasi proses evaluasi dan kenaikan sabuk/tingkat (UKT) pada organisasi pencak silat. Aplikasi ini mendigitalisasi seluruh aspek ujian, mulai dari pendaftaran peserta, pengelolaan soal teori, penilaian praktik/fisik secara real-time, hingga rekapitulasi nilai dan pencetakan hasil akhir. Sistem ini dirancang untuk menangani struktur organisasi yang berjenjang (Pusat/Cabang, Ranting, dan Rayon).

**Peran:** Full-Stack Developer

---

## Tantangan

Proses ujian kenaikan tingkat pencak silat melibatkan banyak pihak (admin, pengurus cabang, penguji di lapangan, dan ratusan peserta) yang bekerja secara simultan di lokasi yang berbeda. Penilaian praktik memiliki banyak parameter spesifik (Senam, Jurus, Fisik, Teknik, Sambung, Toya, Belati, Kripen) yang sebelumnya dicatat di kertas, sehingga rawan kesalahan dan membutuhkan waktu rekapitulasi yang sangat lama. Diperlukan sistem yang dapat menyinkronkan data penilaian secara instan antara penguji di lapangan dan pengurus di meja pusat.

---

## Arsitektur dan Pendekatan

Sistem dibangun dengan arsitektur full-stack yang memisahkan frontend dan backend secara jelas:

- **Frontend (Next.js & React)** — Antarmuka pengguna interaktif yang responsif di berbagai perangkat, baik laptop untuk pengurus maupun tablet untuk penguji di lapangan.
- **Backend (Express & Sequelize ORM)** — API yang tangguh dengan sistem autentikasi multi-role menggunakan JWT untuk 4 entitas pengguna: Admin, Pengurus, Penguji, dan Siswa.
- **Real-time Sync (Socket.io)** — Sinkronisasi data penilaian secara instan antara penguji di lapangan dan pengurus di meja pusat.

---

## Fitur Utama

- **Manajemen Peran & Akses (RBAC):** Sistem multi-role yang aman untuk Admin, Pengurus (manajemen cabang/ranting), Penguji (penilaian lapangan), dan Siswa (peserta ujian).
- **Digitalisasi Penilaian Teori & Praktik:** Modul ujian teori (soal, kunci jawaban, kalkulasi otomatis) dan modul penilaian praktik komprehensif dengan parameter spesifik seni bela diri.
- **Pemrosesan Data Massal:** Fitur import dan export data siswa dalam jumlah besar menggunakan format CSV & Excel, memangkas waktu entri data manual secara drastis.
- **Monitoring Real-time:** Sinkronisasi data penilaian secara instan antara penguji dan pengurus menggunakan Socket.io.

---

## Tech Stack

- **Frontend:** Next.js 13, Tailwind CSS, Axios, React ApexCharts
- **Backend:** Node.js, Express.js, Sequelize ORM, Socket.io
- **Database:** MySQL
- **Keamanan:** JWT, Bcrypt
- **Tools:** Multer, ExcelJS, CSV Parser, jsPDF

---

## Hasil dan Dampak

Sistem ini berhasil mendigitalisasi seluruh proses ujian kenaikan tingkat yang sebelumnya memakan waktu berhari-hari untuk rekapitulasi menjadi proses yang hampir instan. Fitur monitoring real-time menghilangkan kebutuhan untuk menunggu semua penguji selesai sebelum melihat hasil, dan fitur export PDF memungkinkan pencetakan sertifikat langsung setelah ujian selesai.
