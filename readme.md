# 🇮🇩 Pancasila - Platform Edukasi Nasional

Platform edukasi interaktif yang dirancang untuk meningkatkan pemahaman tentang Pancasila dan nilai-nilai fundamental bangsa Indonesia. Website ini menyediakan materi edukatif lengkap dengan fitur kuis interaktif untuk mengujian pengetahuan pengguna.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Cara Instalasi](#cara-instalasi)
- [Cara Menggunakan](#cara-menggunakan)
- [Deployment ke GitHub Pages](#deployment-ke-github-pages)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## ✨ Fitur Utama

### 1. **Materi Edukatif Lengkap**
   - Pengenalan Pancasila dan sejarahnya
   - Penjelasan detail tentang Lima Sila
   - Nilai-nilai dan prinsip Pancasila
   - Konteks historis dan relevansi modern

### 2. **Fitur Kuis Interaktif**
   - Kuis tentang pemahaman Pancasila
   - Pertanyaan dengan pilihan ganda
   - Sistem scoring real-time
   - Feedback untuk setiap jawaban
   - Hasil akhir dengan persentase keberhasilan

### 3. **Desain Modern & Responsif**
   - Antarmuka yang menarik dan user-friendly
   - Fully responsive untuk semua ukuran layar
   - Animasi smooth dan transisi yang menyenangkan
   - Mode gelap dan terang (optional)

### 4. **Navigasi Mudah**
   - Menu navigasi yang intuitif
   - Scroll ke berbagai bagian halaman
   - Call-to-action yang jelas
   - Mobile-friendly menu

## 🛠️ Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Struktur semantik halaman web |
| **Tailwind CSS** | Framework CSS utility-first via CDN |
| **JavaScript (Vanilla)** | Interaktivitas dan logika kuis |
| **SVG** | Grafis vektor tanpa image eksternal |
| **GitHub Pages** | Platform hosting gratis |

## 📁 Struktur Proyek

```
pancasila-education/
│
├── index.html              # File utama HTML
├── README.md               # Dokumentasi proyek (file ini)
├── LICENSE                 # Lisensi proyek
└── .gitignore              # File yang diabaikan Git

```

### Struktur HTML dalam index.html:

```
index.html
├── Head (Meta, CDN Tailwind, Custom CSS)
├── Navigation Bar
│   ├── Logo & Branding
│   └── Menu Links
│
├── Hero Section
│   ├── Judul Utama
│   ├── Deskripsi
│   └── CTA Button
│
├── Pengenalan Pancasila
│   ├── Sejarah Singkat
│   ├── Definisi Pancasila
│   └── Nilai Fundamental
│
├── Lima Sila
│   ├── Sila 1 - Ketuhanan Yang Maha Esa
│   ├── Sila 2 - Kemanusiaan Yang Adil dan Beradab
│   ├── Sila 3 - Persatuan Indonesia
│   ├── Sila 4 - Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan
│   └── Sila 5 - Keadilan Sosial Bagi Seluruh Rakyat Indonesia
│
├── Kuis Interaktif
│   ├── Instruksi Kuis
│   ├── Container Pertanyaan
│   ├── Opsi Jawaban
│   ├── Tombol Next/Submit
│   └── Hasil Akhir
│
├── Footer
│   ├── Informasi Kontak
│   ├── Social Media Links
│   └── Copyright
│
└── Scripts
    ├── Navigasi dan Scroll
    ├── Logika Kuis
    ├── Event Listeners
    └── Animasi

```

## 💻 Cara Instalasi

### Prasyarat
- Text Editor (VS Code, Sublime Text, dll)
- Git (untuk version control)
- GitHub Account (untuk deployment)
- Browser modern (Chrome, Firefox, Safari, Edge)

### Langkah-langkah

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/pancasila-education.git
   cd pancasila-education
   ```

2. **Buka File Lokal**
   - Buka `index.html` langsung di browser, atau
   - Gunakan Live Server extension di VS Code

3. **Edit Konten (Opsional)**
   - Edit file `index.html` sesuai kebutuhan
   - Modify pertanyaan kuis di bagian JavaScript
   - Customize warna dan styling via Tailwind classes

## 🚀 Cara Menggunakan

### Browsing Konten Edukasi
1. Buka website di browser
2. Gunakan menu navigasi untuk berpindah antar bagian
3. Baca materi tentang Pancasila dan Lima Sila
4. Pahami nilai-nilai dan filosofi setiap sila

### Mengikuti Kuis
1. Scroll ke bagian "Kuis Interaktif"
2. Klik tombol "Mulai Kuis"
3. Baca pertanyaan dengan teliti
4. Pilih salah satu jawaban dari pilihan ganda
5. Klik "Jawab" atau "Lanjut" untuk pertanyaan berikutnya
6. Lihat hasil akhir dengan skor dan feedback

### Fitur Interaktif
- **Smooth Scroll**: Klik menu untuk langsung ke bagian yang diinginkan
- **Hover Effects**: Elemen akan bereaksi saat di-hover
- **Real-time Feedback**: Dapatkan umpan balik langsung untuk jawaban
- **Responsive Design**: Buka di mobile atau desktop, tampilan tetap optimal

## 📤 Deployment ke GitHub Pages

### Step 1: Push ke GitHub

```bash
# Initialize Git (jika belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit: Pancasila Education Website"

# Add remote repository
git remote add origin https://github.com/username/pancasila-education.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Step 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings**
3. Di sidebar, pilih **Pages**
4. Pada **Source**, pilih `main` branch
5. Folder pilih `/ (root)`
6. Klik **Save**

### Step 3: Akses Website

Website akan tersedia di: `https://username.github.io/pancasila-education/`

Tunggu beberapa menit hingga deploy selesai.

## 🔧 Customization

### Mengubah Konten Kuis
Edit array `quizQuestions` di bagian JavaScript:

```javascript
const quizQuestions = [
    {
        question: "Pertanyaan Anda?",
        options: ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
        correct: 0,
        explanation: "Penjelasan jawaban"
    }
];
```

### Mengubah Warna & Styling
Tailwind classes sudah built-in. Sesuaikan dengan preference:
- `bg-red-600` untuk warna merah
- `bg-blue-600` untuk warna biru
- `text-gray-800` untuk teks

### Menambah Konten Baru
Edit section di HTML dan tambahkan styling dengan Tailwind utility classes.

## 📊 Konten Website

### Bagian-bagian Utama:

1. **Hero Section** - Pembukaan menarik dengan call-to-action
2. **Pengenalan Pancasila** - Background historis dan definisi
3. **Lima Sila** - Penjelasan detail setiap sila dengan prinsip-prinsipnya
4. **Kuis Interaktif** - Soal-soal untuk menguji pemahaman
5. **Footer** - Informasi tambahan dan links

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📝 Lisensi

Project ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 👨‍💻 Author
- Rizky Kurnia Antasari

**Pancasila Education Platform**
- Platform edukasi interaktif untuk pembelajaran Pancasila
- Dibuat dengan ❤️ untuk bangsa Indonesia

## 📞 Kontak & Support

Jika ada pertanyaan atau saran:
- Buat Issue di GitHub
- Hubungi melalui social media
- Diskusi di bagian Discussion repository

## 🎯 Roadmap Masa Depan

- [ ] Tambah lebih banyak pertanyaan kuis
- [ ] Sistem leaderboard
- [ ] Multi-language support (English, etc)
- [ ] Video pembelajaran
- [ ] Fitur print/export hasil
- [ ] Dark mode toggle
- [ ] Mobile app version
