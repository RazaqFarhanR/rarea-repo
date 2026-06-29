## Ringkasan

Layanan RESTful API untuk Sistem Informasi Perencanaan yang ditujukan bagi Organisasi Perangkat Daerah (OPD). Sistem ini dirancang untuk mendigitalisasi alur kerja perencanaan program, pemantauan target indikator kinerja secara real-time, serta pengarsipan bukti dan dokumentasi kegiatan secara terpusat, terintegrasi, dan transparan.

**Peran:** Backend Developer

---

## Tantangan

Proses perencanaan dan pelaporan kinerja di instansi pemerintah (OPD) sebelumnya dilakukan secara manual dan tersebar di berbagai dokumen terpisah. Hal ini menyulitkan pemantauan progress indikator kinerja secara real-time, rentan terhadap inkonsistensi data, dan mempersulit proses audit karena bukti kegiatan tidak tersentralisasi.

---

## Arsitektur dan Pendekatan

Backend dibangun dengan arsitektur RESTful yang kuat menggunakan TypeScript untuk memastikan type safety dan meminimalisir bug saat runtime. Data disimpan menggunakan MongoDB dengan Mongoose sebagai ORM, yang cocok untuk mengelola hierarki data perencanaan yang fleksibel (Program → Indikator → Metrik Pencapaian).

Sistem autentikasi berbasis JWT mengamankan setiap endpoint, sementara fitur upload multi-file menggunakan Multer memungkinkan pengarsipan bukti kegiatan secara aman dan terstruktur.

---

## Fitur Utama

- **Manajemen Data Perencanaan:** Pengelolaan hierarki data antara Program Perencanaan, Indikator Kinerja, dan metrik pencapaian (Kuantitatif & Kualitatif).
- **Sistem Manajemen File:** Fitur upload dan manajemen multi-file untuk dokumentasi bukti kegiatan yang aman dan terstruktur.
- **Otentikasi & Keamanan:** Sistem autentikasi berbasis JWT dan enkripsi kata sandi menggunakan Bcrypt.
- **Monitoring & Rekapitulasi:** Endpoint khusus untuk memantau performa dan rekapitulasi penyelesaian indikator kinerja.
- **Modul Amplifikasi:** Manajemen publikasi hasil kegiatan ke berbagai platform media.

---

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (Mongoose)
- **Keamanan:** JWT, Bcrypt
- **File Management:** Multer

---

## Hasil dan Dampak

Sistem ini berhasil menyentralisasi seluruh proses perencanaan dan pelaporan OPD ke dalam satu platform terpadu. Pemantauan indikator kinerja yang sebelumnya memerlukan pengecekan manual ke berbagai dokumen kini dapat dilakukan secara real-time melalui satu endpoint, meningkatkan transparansi dan efisiensi pelaporan secara signifikan.
