// Fungsi untuk menampilkan semua data buku dari localStorage
function displayBooks() {
  // Ambil data buku dari localStorage
  const books = JSON.parse(localStorage.getItem('books')) || [];

  // Menampilkan book dari buku yang terbaru ditambahkan  
  books.reverse();

  // Ambil elemen di mana Anda ingin menampilkan data buku (misalnya, sebuah div dengan id "bookList")
  const bookListDiv = document.getElementById('bookList');

  // Bersihkan konten yang sudah ada di elemen tersebut
  bookListDiv.innerHTML = '';

  // Loop melalui setiap buku dan tambahkan mereka ke elemen yang sesuai serta hanya tampilkan buku yang belum selesai
  books.forEach(book => {
    if (!book.isComplete) {
      bookListDiv.innerHTML += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
            <p class="card-text">${book.year}</p>
            <a href="#" class="card-link" onclick="markAsComplete(${book.id})">Mark as complete</a>
            <a href="#" class="card-link" onclick="deleteBook(${book.id})">Delete</a>
          </div>
        </div>
      `;
    }
  });

  // Loop melalui setiap buku dan tambahkan mereka ke elemen yang sesuai serta hanya tampilkan buku yang selesai
  books.forEach(book => {
    if (book.isComplete) {
      bookListDiv.innerHTML += `      
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
            <p class="card-text">${book.year}</p>
            <a href="#" class="card-link" onclick="markAsUncomplete(${book.id})">Mark as uncomplete</a>
            <a href="#" class="card-link" onclick="deleteBook(${book.id})">Delete</a>
          </div>
        </div>
      `;
    }
  });
}
