## Ringkasan

Platform e-commerce berskala menengah-besar yang dirancang dengan arsitektur multi-app, memisahkan antarmuka untuk Pelanggan (Customer) dan Penjual (Merchant) guna memberikan pengalaman pengguna yang lebih fokus dan teroptimasi. Platform ini dibangun menggunakan teknologi web modern terbaru untuk mencapai performa tinggi, interaktivitas yang mulus, serta visualisasi data yang informatif.

**Peran:** Frontend Developer

---

## Tantangan

Membangun platform e-commerce yang mampu melayani dua jenis pengguna dengan kebutuhan yang sangat berbeda — pelanggan yang membutuhkan pengalaman belanja yang cepat dan intuitif, serta merchant yang membutuhkan dashboard analitik dan manajemen toko yang komprehensif. Arsitektur monolitik akan membuat kode terlalu kompleks dan memperlambat waktu muat, sehingga diperlukan pendekatan terpisah.

---

## Arsitektur dan Pendekatan

Proyek ini mengadopsi arsitektur multi-app yang memisahkan frontend Customer dan Merchant ke dalam aplikasi Next.js yang independen. Pendekatan ini mengurangi kompleksitas kode dan mempercepat waktu muat halaman karena setiap aplikasi hanya memuat modul yang relevan.

Data fetching dioptimasi menggunakan TanStack React Query v5 yang menyediakan caching otomatis dan mengurangi pemanggilan API yang berlebihan. Validasi form menggunakan kombinasi React Hook Form dan Zod untuk memastikan keamanan input di sisi klien secara type-safe.

---

## Fitur Utama

**Aplikasi Pelanggan**
- **Autentikasi & Profil:** Sistem login/registrasi yang aman dengan manajemen profil dan riwayat pesanan.
- **Eksplorasi Katalog & Toko:** Kemudahan dalam menelusuri katalog produk dan melihat detail toko (storefront).
- **Keranjang Belanja:** Manajemen cart yang dinamis dengan proses checkout yang lancar.
- **Animasi Interaktif:** Transisi dan animasi yang smooth menggunakan Framer Motion.

**Dashboard Merchant**
- **Analitik & Visualisasi Data:** Dashboard interaktif untuk memantau performa penjualan dan statistik pesanan menggunakan Recharts.
- **Manajemen Toko:** Fitur lengkap untuk mengelola produk (CRUD), memproses pesanan, dan melihat notifikasi.
- **Komunikasi Terpusat:** Modul chat untuk komunikasi langsung antara penjual dan pelanggan.
- **Dukungan Pemetaan:** Integrasi Leaflet untuk penandaan lokasi toko dan rute pengiriman.

---

## Tech Stack

- **Framework:** Next.js 15, React 19
- **Styling:** Tailwind CSS v4
- **Data Fetching:** TanStack React Query v5, Axios
- **Form & Validasi:** React Hook Form, Zod
- **Database Tooling:** Prisma ORM
- **UI Libraries:** Framer Motion, Recharts, Leaflet, Lucide React, React Toastify

---

## Hasil dan Dampak

Arsitektur frontend terpisah berhasil mengurangi kompleksitas kode secara signifikan dan mempercepat waktu muat halaman awal. Integrasi React Query mengoptimalkan caching data sehingga redundansi pemanggilan API berkurang drastis, sementara validasi form yang ketat menggunakan Zod meminimalisir kesalahan input pengguna sebelum data dikirim ke server.
