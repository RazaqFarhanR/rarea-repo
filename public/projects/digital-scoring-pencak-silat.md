## Ringkasan

Sistem penilaian digital berbasis web yang dirancang khusus untuk pertandingan olahraga bela diri Pencak Silat, menggantikan sistem pencatatan skor manual dengan kertas. Sistem ini memastikan kecepatan dan akurasi input skor dari para wasit secara real-time.

**Peran:** Backend Developer

---

## Tantangan

Dalam pertandingan Pencak Silat, kecepatan dan akurasi input skor dari para wasit (juri) adalah hal mutlak. Jika sistem mengalami delay saat juri menekan tombol poin, hasil agregasi di layar utama (scoreboard) akan tertunda dan bisa memicu protes dari pelatih atau penonton. Selain itu, sistem manual berbasis kertas sangat rentan terhadap human error dan membutuhkan waktu rekapitulasi yang lama setelah pertandingan selesai.

---

## Arsitektur dan Pendekatan

Fokus utama proyek ini ada pada kehandalan Backend API yang mampu menangani ribuan request kecil (skor poin) per detiknya tanpa mengalami bottleneck.

- **ExpressJS** digunakan sebagai framework server karena sifatnya yang non-blocking dan ringan untuk menangani request berfrekuensi tinggi.
- **MySQL** sebagai basis data relasional untuk menjaga integritas data pertandingan, jadwal atlet, dan rekapitulasi poin akhir.
- **REST API** dengan arsitektur yang rapi memungkinkan aplikasi juri (penginput skor) dan layar monitor penonton menerima pembaruan data secara konsisten.

---

## Fitur Utama

- **Input Skor Real-time:** Antarmuka khusus untuk wasit/juri yang dioptimalkan agar setiap penekanan tombol langsung tersinkronisasi ke scoreboard utama.
- **Manajemen Pertandingan:** Pengaturan jadwal, bracket, dan data atlet yang terstruktur dalam database relasional.
- **Scoreboard Publik:** Layar monitor yang menampilkan skor terkini secara otomatis tanpa perlu refresh manual.
- **Rekapitulasi Otomatis:** Sistem kalkulasi poin akhir yang menghilangkan kebutuhan rekapitulasi manual pasca pertandingan.

---

## Tech Stack

- **Backend:** Node.js, ExpressJS
- **Database:** MySQL
- **Arsitektur:** REST API

---

## Hasil dan Dampak

Sistem ini sukses digunakan secara langsung dalam turnamen lokal tanpa hambatan server (zero downtime). Transparansi penjurian meningkat secara signifikan karena skor ditampilkan secara real-time di layar publik, dan waktu rekapitulasi skor berkurang drastis dari hitungan jam menjadi instan.
