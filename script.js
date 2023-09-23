// Add book
document.getElementById('addBook').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookYear = document.getElementById('bookYear').value;
  const isCompletedBook = document.getElementById('isCompletedBook').checked;

  // Instantiate book
  const book = {
    id: +new Date(),
    title: bookTitle,
    author: bookAuthor,
    year: bookYear,
    isComplete: isCompletedBook
  }

  // Get Data from localStorage
  let books = JSON.parse(localStorage.getItem('books')) || [];

  // Add book to array
  books.push(book);

  // Set back to localStorage
  localStorage.setItem('books', JSON.stringify(books));

  // Show alert
  alert('Book added');

  // Re-fetch books
  displayBooks();

  // Clear form
  document.getElementById('addBook').reset();

});

// Fungsi untuk menampilkan semua data buku dari localStorage
function displayBooks() {
  // Ambil data buku dari localStorage
  const books = JSON.parse(localStorage.getItem('books')) || [];

  // Menampilkan book dari buku yang terbaru ditambahkan  
  books.reverse();

  // Ambil elemen di mana Anda ingin menampilkan data buku (misalnya, sebuah div dengan id "bookList")
  const bookListIsCompleted = document.getElementById('bookListIsCompleted');
  const bookListUnCompleted = document.getElementById('bookListUnCompleted');

  // Bersihkan konten yang sudah ada di elemen tersebut
  bookListIsCompleted.innerHTML = '';
  bookListUnCompleted.innerHTML = '';

  // Buku yang sudah selesai dan belum selesai
  books.forEach(book => {
    const bookHtml = `
      <div class="p-4 mb-2 bg-slate-800 rounded-lg text-white">    
        <h5 class="text-xl font-bold">${book.title}</h5>
        <p class="text-md"><span class="font-semibold">Penulis</span> : ${book.author}</p>
        <p class="text-md"><span class="font-semibold">Tahun terbit</span> : ${book.year}</p>
        <div class="gap-x-4 flex mt-2">
          <button class="rounded-md p-2 bg-green-500" onclick="markAsComplete(${book.id})">
            ${book.isComplete ? 'Selesai' : 'Belum selesai'}
          </button>
          <button class="rounded-md p-2 bg-red-500" onclick="deleteBook(${book.id})">
              Hapus
          </button>
        </div>
      </div>
    `;

    if (book.isComplete) {
      bookListIsCompleted.innerHTML += bookHtml;
    } else {
      bookListUnCompleted.innerHTML += bookHtml;
    }
  });

  // Tampilkan pesan "Buku belum ada" jika tidak ada buku yang sesuai
  if (bookListIsCompleted.innerHTML === '') {
    bookListIsCompleted.innerHTML = '<p class="text-center">Buku belum ada</p>';
  }
  if (bookListUnCompleted.innerHTML === '') {
    bookListUnCompleted.innerHTML = '<p class="text-center">Buku belum ada</p>';
  }
}

// function untuk menghapus buku berdasaarkan id
function deleteBook(id) {
  // Konfirmasi pengguna
  if (!confirm('Are you sure?')) return;

  // Ambil data buku dari localStorage
  let books = JSON.parse(localStorage.getItem('books')) || [];

  // Filter buku yang tidak memiliki id yang sama dengan id yang diberikan
  books = books.filter(book => book.id !== id);

  // Set kembali ke localStorage
  localStorage.setItem('books', JSON.stringify(books));

  // Re-fetch books
  displayBooks();
}

// function untuk menandai buku sebagai selesai berdasarkan id
function markAsComplete(id) {
  // Ambil data buku dari localStorage
  let books = JSON.parse(localStorage.getItem('books')) || [];

  // Temukan buku dengan id yang diberikan
  const book = books.find(book => book.id === id);

  // Tandai buku sebagai selesai (balikkan nilainya)
  book.isComplete = !book.isComplete;

  // Set kembali ke localStorage
  localStorage.setItem('books', JSON.stringify(books));

  // Re-fetch books
  displayBooks();
}

// fitur mencari buku
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Ambil data buku dari localStorage
  const books = JSON.parse(localStorage.getItem('books')) || [];

  // Ambil nilai dari input pencarian
  const searchValue = document.getElementById('searchInput').value;

  // Filter buku berdasarkan judul atau penulis
  const filteredBooks = books.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(searchValue.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(searchValue.toLowerCase());

    return titleMatch || authorMatch;
  });

  // Ambil elemen di mana Anda ingin menampilkan hasil pencarian (misalnya, sebuah div dengan id "searchResults")
  const searchResults = document.getElementById('searchResult');

  // Bersihkan konten yang sudah ada di elemen tersebut
  searchResults.innerHTML = '';

  // Tampilkan hasil pencarian
  filteredBooks.forEach(book => {
    const bookHtml = `
      <div class="p-4 mb-2 bg-slate-800 rounded-lg text-white">    
        <h5 class="text-xl font-bold">${book.title}</h5>
        <p class="text-md"><span class="font-semibold">Penulis</span> : ${book.author}</p>
        <p class="text-md"><span class="font-semibold">Tahun terbit</span> : ${book.year}</p>
        <div class="gap-x-4 flex mt-2">
          <button class="rounded-md p-2 bg-green-500" onclick="markAsComplete(${book.id})">
            ${book.isComplete ? 'Selesai' : 'Belum selesai'}
          </button>
          <button class="rounded-md p-2 bg-red-500" onclick="deleteBook(${book.id})">
              Hapus
          </button>
        </div>
      </div>
    `;

    searchResults.innerHTML += bookHtml;
  });

  // Tampilkan pesan "Tidak ada hasil" jika tidak ada buku yang sesuai
  if (searchResults.innerHTML === '') {
    searchResults.innerHTML = '<p class="text-center">Tidak ada hasil</p>';
  }

  // reset form
  document.getElementById('searchForm').reset();
});



let year = new Date().getFullYear();
document.getElementById('currentYear').textContent = year;

// Panggil fungsi displayBooks untuk menampilkan data saat halaman dimuat
window.onload = displayBooks;
