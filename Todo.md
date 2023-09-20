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

- [ ] Rak buku yang belum selesai dibaca hanya menyimpan buku ketika properti `isComplete` bernilai `false`
- [ ] Rak buku yang selesai dibaca hanya menyimpan buku ketika properti `isComplete` bernilai `true`

### 3. Dapat memindahkan antar rak

- [ ] Buku yang ditampilkan pada rak, baik itu "Belum Selesai Dibaca" atau "Selesai Dibaca" harus dapat di pindah antar keduanya

### 4. Dapat menghapus data buku

- [ ] Buku yang ditampilkan pada rak, baik itu "Belum Selesai Dibaca" atau "Selesai Dibaca" harus dapat dihapus

### 5. Manfaatkan localStorage dalam menyimpan data buku

- [ ] Data buku yang ditambahkan akan tersimpan secara lokal di dalam browser
- [ ] Data buku yang tersimpan secara lokal akan tetap ada walaupun halaman web di refresh

### BONUSES + 5 Star

- [ ] Tambahkan fitur pencarian buku untuk memfilter berdasarkan judul buku
- [ ] Bikin project tanpa starter pack project yang di buat oleh dicoding
- [ ] Kode di tulis dengan clean code tanpa ada komen yang masih aktif di dalam nya
- [ ] Ada improvisasi fitur seperti
  - [ ] Custom dialog untuk konfirmasi hapus buku
  - [ ] Custom dialog untuk menampilkan detail buku
  - [ ] Dapat edit data buku
