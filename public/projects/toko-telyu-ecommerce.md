## Ringkasan

Aplikasi e-commerce cross-platform yang dirancang untuk mempermudah pengalaman belanja dan manajemen toko secara digital. Aplikasi ini memiliki dua antarmuka terpisah untuk Pelanggan dan Pemilik Toko (Admin), dilengkapi dengan fitur chatbot cerdas berbasis AI dan sistem live chat customer service. Proyek ini dikembangkan sebagai bentuk implementasi praktis untuk memenuhi capaian pembelajaran mata kuliah, sekaligus mendemonstrasikan penguasaan standar pengembangan aplikasi tingkat industri.

**Peran:** Mobile Developer

---

## Tantangan

Membangun aplikasi mobile e-commerce yang lengkap dengan dua antarmuka terpisah (Customer dan Admin) yang harus tetap responsif dan intuitif. Selain itu, diperlukan integrasi layanan AI untuk menghadirkan chatbot yang mampu menjawab pertanyaan pelanggan secara otomatis 24/7, serta sistem chat real-time antara pelanggan dan customer service.

---

## Arsitektur dan Pendekatan

Aplikasi dibangun menggunakan Flutter sebagai framework cross-platform, dengan Firebase sebagai backend yang menyediakan database real-time (Cloud Firestore), autentikasi, dan penyimpanan file. Arsitektur aplikasi memisahkan modul Customer dan Admin secara jelas, dengan shared services untuk komponen yang digunakan bersama.

Integrasi Google Generative AI (Gemini) memungkinkan chatbot menjawab pertanyaan pelanggan secara natural, sementara Firebase Cloud Messaging memastikan notifikasi push terkirim secara instan ke perangkat pengguna.

---

## Fitur Utama

**Aplikasi Pelanggan**
- **Katalog & Checkout:** Eksplorasi produk, keranjang belanja, checkout, pelacakan pesanan, dan wishlist.
- **AI Chatbot:** Integrasi Google Generative AI untuk layanan pelanggan otomatis yang cerdas dan responsif.
- **Manajemen Profil:** Pengaturan akun dan alamat pengiriman.

**Aplikasi Admin**
- **Manajemen Produk & Kategori:** Pengelolaan inventaris produk dan kategori secara terstruktur.
- **Pemrosesan Pesanan:** Manajemen pesanan dari checkout hingga pengiriman.
- **Konfigurasi Pengiriman:** Manajemen area pengiriman dan metode pickup.

---

## Tech Stack

- **Frontend:** Flutter (Dart)
- **Backend & Database:** Firebase (Cloud Firestore, Authentication, Storage)
- **AI:** Google Generative AI (Gemini)
- **Notifikasi:** Firebase Cloud Messaging, Awesome Notifications
- **Keamanan:** Flutter Secure Storage

---

## Hasil dan Dampak

Aplikasi ini berhasil menghadirkan pengalaman e-commerce mobile yang komprehensif dengan fitur AI chatbot yang mampu menangani pertanyaan pelanggan secara otomatis. Integrasi Firebase sebagai backend real-time memastikan data pesanan dan chat selalu tersinkronisasi secara instan di seluruh perangkat.
