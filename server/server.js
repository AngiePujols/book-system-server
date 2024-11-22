import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
app.use(cors());

const PAGINATION_LIMIT = 8;

app.get('/books', (req, res) => {
  const db = new sqlite3.Database('books.db');

  // const books = [
  //   { id: 1, title: 'The Great Adventure', author: 'John Doe', year: 1995, genre: ['Adventure', 'Fantasy'], coverImage: 'cover1.jpg', rating: 4.5, isFavorite: true, userId: 1 },
  //   { id: 2, title: 'Mystery of the Old House', author: 'Jane Smith', year: 2001, genre: ['Mystery', 'Thriller'], coverImage: 'cover2.jpg', rating: 4.0, isFavorite: false, userId: 2 },
  //   { id: 3, title: 'Journey to the Unknown', author: 'Alice Johnson', year: 2010, genre: ['Science Fiction'], coverImage: 'cover3.jpg', rating: 3.8, isFavorite: true, userId: 3 },
  //   { id: 4, title: 'Love in the Time of War', author: 'Robert Brown', year: 1987, genre: ['Romance', 'Historical'], coverImage: 'cover4.jpg', rating: 4.2, isFavorite: false, userId: 4 },
  //   { id: 5, title: 'The Haunted Forest', author: 'Emily Davis', year: 1999, genre: ['Horror', 'Fantasy'], coverImage: 'cover5.jpg', rating: 4.7, isFavorite: true, userId: 5 },
  //   { id: 6, title: 'Secrets of the Universe', author: 'Michael Wilson', year: 2005, genre: ['Science Fiction', 'Non-Fiction'], coverImage: 'cover6.jpg', rating: 4.1, isFavorite: false, userId: 6 },
  //   { id: 7, title: 'The Last Kingdom', author: 'Sarah Miller', year: 2015, genre: ['Fantasy', 'Adventure'], coverImage: 'cover7.jpg', rating: 4.9, isFavorite: true, userId: 7 },
  //   { id: 8, title: 'The Art of Deception', author: 'David Martinez', year: 1992, genre: ['Thriller', 'Mystery'], coverImage: 'cover8.jpg', rating: 3.9, isFavorite: false, userId: 8 },
  //   { id: 9, title: 'Echoes of the Past', author: 'Laura Garcia', year: 1985, genre: ['Historical', 'Drama'], coverImage: 'cover9.jpg', rating: 4.3, isFavorite: true, userId: 9 },
  //   { id: 10, title: 'The Infinite Loop', author: 'James Anderson', year: 2020, genre: ['Science Fiction', 'Thriller'], coverImage: 'cover10.jpg', rating: 4.6, isFavorite: false, userId: 10 },
  //   { id: 11, title: 'The Hidden Truth', author: 'Patricia Thomas', year: 1998, genre: ['Mystery', 'Non-Fiction'], coverImage: 'cover11.jpg', rating: 4.0, isFavorite: true, userId: 11 },
  //   { id: 12, title: 'The Lost Treasure', author: 'Christopher Lee', year: 2003, genre: ['Adventure', 'Fantasy'], coverImage: 'cover12.jpg', rating: 4.8, isFavorite: false, userId: 12 },
  //   { id: 13, title: 'The Dark Prophecy', author: 'Barbara Harris', year: 2012, genre: ['Fantasy', 'Horror'], coverImage: 'cover13.jpg', rating: 4.4, isFavorite: true, userId: 13 },
  //   { id: 14, title: 'The Final Countdown', author: 'Daniel Clark', year: 1990, genre: ['Thriller', 'Science Fiction'], coverImage: 'cover14.jpg', rating: 3.7, isFavorite: false, userId: 14 },
  //   { id: 15, title: 'The Forgotten Realm', author: 'Jessica Lewis', year: 1983, genre: ['Fantasy', 'Adventure'], coverImage: 'cover15.jpg', rating: 4.5, isFavorite: true, userId: 15 },
  //   { id: 16, title: 'The Silent Witness', author: 'Paul Walker', year: 2007, genre: ['Mystery', 'Drama'], coverImage: 'cover16.jpg', rating: 4.1, isFavorite: false, userId: 16 },
  //   { id: 17, title: 'The Enchanted Garden', author: 'Nancy Hall', year: 2018, genre: ['Fantasy', 'Romance'], coverImage: 'cover17.jpg', rating: 4.9, isFavorite: true, userId: 17 },
  //   { id: 18, title: 'The Secret Society', author: 'Steven Young', year: 1996, genre: ['Thriller', 'Mystery'], coverImage: 'cover18.jpg', rating: 4.2, isFavorite: false, userId: 18 },
  //   { id: 19, title: 'The Time Traveler', author: 'Karen King', year: 2002, genre: ['Science Fiction', 'Adventure'], coverImage: 'cover19.jpg', rating: 4.6, isFavorite: true, userId: 19 },
  //   { id: 20, title: 'The Hidden Fortress', author: 'Brian Wright', year: 1989, genre: ['Historical', 'Fantasy'], coverImage: 'cover20.jpg', rating: 4.3, isFavorite: false, userId: 20 },
  //   { id: 21, title: 'The Eternal Flame', author: 'Lisa Scott', year: 2011, genre: ['Fantasy', 'Romance'], coverImage: 'cover21.jpg', rating: 4.7, isFavorite: true, userId: 21 },
  //   { id: 22, title: 'The Phantom Thief', author: 'Kevin Green', year: 1994, genre: ['Mystery', 'Thriller'], coverImage: 'cover22.jpg', rating: 4.0, isFavorite: false, userId: 22 },
  //   { id: 23, title: 'The Infinite Quest', author: 'Sandra Adams', year: 2008, genre: ['Adventure', 'Science Fiction'], coverImage: 'cover23.jpg', rating: 4.5, isFavorite: true, userId: 23 },
  //   { id: 24, title: 'The Dark Knight', author: 'Edward Baker', year: 1986, genre: ['Fantasy', 'Horror'], coverImage: 'cover24.jpg', rating: 4.1, isFavorite: false, userId: 24 },
  //   { id: 25, title: 'The Lost City', author: 'Rebecca Nelson', year: 2013, genre: ['Adventure', 'Historical'], coverImage: 'cover25.jpg', rating: 4.8, isFavorite: true, userId: 25 },
  //   { id: 26, title: 'The Final Battle', author: 'George Carter', year: 1991, genre: ['Fantasy', 'Science Fiction'], coverImage: 'cover26.jpg', rating: 4.4, isFavorite: false, userId: 26 },
  //   { id: 27, title: 'The Hidden Valley', author: 'Deborah Mitchell', year: 2000, genre: ['Adventure', 'Fantasy'], coverImage: 'cover27.jpg', rating: 4.6, isFavorite: true, userId: 27 },
  //   { id: 28, title: 'The Silent Assassin', author: 'Charles Perez', year: 1997, genre: ['Thriller', 'Mystery'], coverImage: 'cover28.jpg', rating: 4.3, isFavorite: false, userId: 28 },
  //   { id: 29, title: 'The Enchanted Forest', author: 'Stephanie Roberts', year: 2004, genre: ['Fantasy', 'Adventure'], coverImage: 'cover29.jpg', rating: 4.7, isFavorite: true, userId: 29 },
  //   { id: 30, title: 'The Secret Garden', author: 'Anthony Turner', year: 1988, genre: ['Fantasy', 'Romance'], coverImage: 'cover30.jpg', rating: 4.2, isFavorite: false, userId: 30 },
  //   { id: 31, title: 'The Hidden Treasure', author: 'Margaret Phillips', year: 2014, genre: ['Adventure', 'Historical'], coverImage: 'cover31.jpg', rating: 4.5, isFavorite: true, userId: 31 },
  //   { id: 32, title: 'The Dark Secret', author: 'Gregory Campbell', year: 1993, genre: ['Mystery', 'Thriller'], coverImage: 'cover32.jpg', rating: 4.0, isFavorite: false, userId: 32 },
  //   { id: 33, title: 'The Final Frontier', author: 'Cynthia Parker', year: 2009, genre: ['Science Fiction', 'Adventure'], coverImage: 'cover33.jpg', rating: 4.6, isFavorite: true, userId: 33 },
  //   { id: 34, title: 'The Enchanted Castle', author: 'Joshua Evans', year: 1984, genre: ['Fantasy', 'Historical'], coverImage: 'cover34.jpg', rating: 4.3, isFavorite: false, userId: 34 },
  //   { id: 35, title: 'The Hidden Kingdom', author: 'Sharon Edwards', year: 2016, genre: ['Fantasy', 'Adventure'], coverImage: 'cover35.jpg', rating: 4.7, isFavorite: true, userId: 35 },
  //   { id: 36, title: 'The Silent Guardian', author: 'Raymond Collins', year: 1995, genre: ['Thriller', 'Mystery'], coverImage: 'cover36.jpg', rating: 4.1, isFavorite: false, userId: 36 },
  //   { id: 37, title: 'The Enchanted Island', author: 'Kathleen Stewart', year: 2006, genre: ['Fantasy', 'Romance'], coverImage: 'cover37.jpg', rating: 4.9, isFavorite: true, userId: 37 },
  //   { id: 38, title: 'The Secret Passage', author: 'Walter Morris', year: 1982, genre: ['Adventure', 'Historical'], coverImage: 'cover38.jpg', rating: 4.2, isFavorite: false, userId: 38 },
  //   { id: 39, title: 'The Final Hour', author: 'Janet Rogers', year: 2017, genre: ['Thriller', 'Science Fiction'], coverImage: 'cover39.jpg', rating: 4.4, isFavorite: true, userId: 39 },
  //   { id: 40, title: 'The Hidden Path', author: 'Harold Reed', year: 1999, genre: ['Adventure', 'Fantasy'], coverImage: 'cover40.jpg', rating: 4.0, isFavorite: false, userId: 40 },
  //   { id: 41, title: 'The Enchanted Journey', author: 'Diane Cook', year: 2001, genre: ['Fantasy', 'Adventure'], coverImage: 'cover41.jpg', rating: 4.5, isFavorite: true, userId: 41 },
  //   { id: 42, title: 'The Secret Mission', author: 'Russell Morgan', year: 1990, genre: ['Thriller', 'Mystery'], coverImage: 'cover42.jpg', rating: 4.3, isFavorite: false, userId: 42 },
  //   { id: 43, title: 'The Final Escape', author: 'Marilyn Bell', year: 2003, genre: ['Adventure', 'Science Fiction'], coverImage: 'cover43.jpg', rating: 4.6, isFavorite: true, userId: 43 },
  //   { id: 44, title: 'The Enchanted Realm', author: 'Beverly Murphy', year: 1981, genre: ['Fantasy', 'Historical'], coverImage: 'cover44.jpg', rating: 4.1, isFavorite: false, userId: 44 },
  //   { id: 45, title: 'The Hidden World', author: 'Albert Bailey', year: 2010, genre: ['Fantasy', 'Adventure'], coverImage: 'cover45.jpg', rating: 4.7, isFavorite: true, userId: 45 },
  //   { id: 46, title: 'The Silent Warrior', author: 'Theresa Rivera', year: 1992, genre: ['Thriller', 'Mystery'], coverImage: 'cover46.jpg', rating: 4.2, isFavorite: false, userId: 46 },
  //   { id: 47, title: 'The Enchanted Forest', author: 'Ralph Cooper', year: 2005, genre: ['Fantasy', 'Romance'], coverImage: 'cover47.jpg', rating: 4.9, isFavorite: true, userId: 47 },
  //   { id: 48, title: 'The Secret of the Cave', author: 'Gloria Richardson', year: 1980, genre: ['Adventure', 'Historical'], coverImage: 'cover48.jpg', rating: 4.3, isFavorite: false, userId: 48 },
  //   { id: 49, title: 'The Final Showdown', author: 'Eugene Cox', year: 2018, genre: ['Thriller', 'Science Fiction'], coverImage: 'cover49.jpg', rating: 4.4, isFavorite: true, userId: 49 },
  //   { id: 50, title: 'The Hidden Treasure', author: 'Jeanette Howard', year: 1997, genre: ['Adventure', 'Fantasy'], coverImage: 'cover50.jpg', rating: 4.0, isFavorite: false, userId: 50 }
  // ];
  
  const { page = 1 } = req.query
  const offset = (page - 1) * PAGINATION_LIMIT

  const booksContainer = {
    books: [],
    total: 0
  }

  db.get("SELECT COUNT(*) as total FROM books", (err, { total }) => {
    if (err) {
      console.error('Database error: ', err.message);
    }
    booksContainer.total = total;
  });
  db.all("SELECT * FROM books LIMIT ? OFFSET ?", [PAGINATION_LIMIT, offset], (err, books) => {
    if (err) {
      console.error('Database error: ', err.message);
    }
    booksContainer.books = books;
    res.send(booksContainer);
  });
  db.close();
  return res;
});


app.get('/Getbooks', (req, res) => {
  const db = new sqlite3.Database('books.db');
  db.all("SELECT * FROM books",(err, books) => {
    if (err) {
      console.error('Database error: ', err.message);
    }
    res.send(books);
  });
  db.close();
  return res;
});


app.get('/books/:id', (req, res) => {
  const db = new sqlite3.Database('books.db');
  const { id } = req.params;
  db.get("SELECT * FROM books WHERE id = ?", [id], (err, book) => {
    if (err) {
      console.error('Database error: ', err.message);
    }
    res.send(book);
  });
  db.close();
  return res;
});


app.use(express.json());

app.post('/books/save', (req, res) => {
  const { title, author, year, genre, coverImage, rating, isFavorite, userId } = req.body;

  if (!title || !author || !year) {
    return res.status(400).send('Faltan datos requeridos.');
  }

  const db = new sqlite3.Database('books.db');

  const query = `
    INSERT INTO books (title, author, year, genre, coverImage, rating, isFavorite, userId)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [title, author, year, genre, coverImage, rating, isFavorite, userId], function (err) {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).send('Error al guardar el libro.');
    }

    res.status(201).send({ message: 'Libro guardado exitosamente!', bookId: this.lastID });
    console.log('Libro guardado exitosamente');
  });

  db.close();
});


app.put('/books/update/:id', (req, res) => {
  const { title, author, year, genre, coverImage, rating, isFavorite, userId } = req.body;
  const { id } = req.params; 

  if (!title || !author || !year) {
    return res.status(400).send('Faltan datos requeridos.');
  }

  const db = new sqlite3.Database('books.db');

  const query = `
    UPDATE books
    SET title = ?, author = ?, year = ?, genre = ?, coverImage = ?, rating = ?, isFavorite = ?, userId = ?
    WHERE id = ?
  `;

  db.run(query, [title, author, year, genre, coverImage, rating, isFavorite, userId, id], function (err) {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).send('Error al actualizar el libro.');
    }

    if (this.changes === 0) {
      return res.status(404).send('Libro no encontrado.');
    }
    res.status(200).send({ message: 'Libro actualizado exitosamente!' });
    console.log('Libro actualizado exitosamente');
  });
  db.close();
});

app.delete('/books/delete/:id', (req, res) => {
  const { id } = req.params;
  const db = new sqlite3.Database('books.db');

  db.run("DELETE FROM books WHERE id = ?", [id], function (err) {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).send('Error al eliminar el libro.');
    }

    if (this.changes === 0) {
      return res.status(404).send('Libro no encontrado.');
    }
    res.status(200).send({ message: 'Libro eliminado exitosamente!' });
    console.log('Libro eliminado exitosamente');
  });

  db.close();
});

app.listen(3005);