# Todo

### 1. Mampu menambahkan data buku baru

Data buku yang di simpan harus punya struktur object javascript seperti ini

```javascript
{
  id: 3657848524,
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: 'J.K Rowling',
  year: 1997,
  isComplete: false,
}
```

### 2. Memiliki dua rak buku

Harus memiliki dua rak buku, yaitu "Belum Selesai Dibaca" & "Selesai Dibaca"

- [x] Rak buku yang belum selesai dibaca hanya menyimpan buku ketika properti `isComplete` bernilai `false`
- [x] Rak buku yang selesai dibaca hanya menyimpan buku ketika properti `isComplete` bernilai `true`

### 3. Dapat memindahkan antar rak

- [x] Buku yang ditampilkan pada rak, baik itu "Belum Selesai Dibaca" atau "Selesai Dibaca" harus dapat di pindah antar keduanya

### 4. Dapat menghapus data buku

- [x] Buku yang ditampilkan pada rak, baik itu "Belum Selesai Dibaca" atau "Selesai Dibaca" harus dapat dihapus

### 5. Manfaatkan localStorage dalam menyimpan data buku

- [x] Data buku yang ditambahkan akan tersimpan secara lokal di dalam browser
- [x] Data buku yang tersimpan secara lokal akan tetap ada walaupun halaman web di refresh

### BONUSES + 5 Star

- [x] Tambahkan fitur pencarian buku untuk memfilter berdasarkan judul buku
- [x] Bikin project tanpa starter pack project yang di buat oleh dicoding
- [x] Kode di tulis dengan clean code tanpa ada komen yang masih aktif di dalam nya
- [x] Ada improvisasi fitur seperti
  - [x] Custom dialog untuk konfirmasi hapus buku
- [x] Bikin page untuk about, berisi tentang developer yang buat aplikasi tersebut
- [x] Bikin page untuk contact, berisi tentang contact developer yang buat aplikasi tersebut
- [ ] Bikin nigt mode untuk aplikasi tersebut
