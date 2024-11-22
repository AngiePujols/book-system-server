import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./books.db', (err) => {
  if (err) {
    console.error('Database opening error: ', err.message);
  } else {
    db.run('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, year INTEGER, genre TEXT, coverImage TEXT, rating REAL, isFavorite TINYINT, userId INTEGER)', (err) => {
      if (err) {
        console.error('Table creation error: ', err.message);
      } else {
        db.exec(`INSERT INTO books (title, author, year, genre, coverImage, rating, isFavorite, userId) VALUES 
          ("The Great Adventure", "John Doe", 1995, "Adventure, Fantasy", "cover1.jpg", 4.5, 1, 1),
          ("Mystery of the Old House", "Jane Smith", 2001, "Mystery, Thriller", "cover2.jpg", 4.0, 0, 2),
          ("Journey to the Unknown", "Alice Johnson", 2010, "Science Fiction", "cover3.jpg", 3.8, 1, 3),
          ("Love in the Time of War", "Robert Brown", 1987, "Romance, Historical", "cover4.jpg", 4.2, 0, 4),
          ("The Haunted Forest", "Emily Davis", 1999, "Horror, Fantasy", "cover5.jpg", 4.7, 1, 5),
          ("Secrets of the Universe", "Michael Wilson", 2005, "Science Fiction, Non-Fiction", "cover6.jpg", 4.1, 0, 6),
          ("The Last Kingdom", "Sarah Miller", 2015, "Fantasy, Adventure", "cover7.jpg", 4.9, 1, 7),
          ("The Art of Deception", "David Martinez", 1992, "Thriller, Mystery", "cover8.jpg", 3.9, 0, 8),
          ("Echoes of the Past", "Laura Garcia", 1985, "Historical, Drama", "cover9.jpg", 4.3, 1, 9),
          ("The Infinite Loop", "James Anderson", 2020, "Science Fiction, Thriller", "cover10.jpg", 4.6, 0, 10),
          ("The Hidden Truth", "Patricia Thomas", 1998, "Mystery, Non-Fiction", "cover11.jpg", 4.0, 1, 11),
          ("The Lost Treasure", "Christopher Lee", 2003, "Adventure, Fantasy", "cover12.jpg", 4.8, 0, 12),
          ("The Dark Prophecy", "Barbara Harris", 2012, "Fantasy, Horror", "cover13.jpg", 4.4, 1, 13),
          ("The Final Countdown", "Daniel Clark", 1990, "Thriller, Science Fiction", "cover14.jpg", 3.7, 0, 14),
          ("The Forgotten Realm", "Jessica Lewis", 1983, "Fantasy, Adventure", "cover15.jpg", 4.5, 1, 15),
          ("The Silent Witness", "Paul Walker", 2007, "Mystery, Drama", "cover16.jpg", 4.1, 0, 16),
          ("The Enchanted Garden", "Nancy Hall", 2018, "Fantasy, Romance", "cover17.jpg", 4.9, 1, 17),
          ("The Secret Society", "Steven Young", 1996, "Thriller, Mystery", "cover18.jpg", 4.2, 0, 18),
          ("The Time Traveler", "Karen King", 2002, "Science Fiction, Adventure", "cover19.jpg", 4.6, 1, 19),
          ("The Hidden Fortress", "Brian Wright", 1989, "Historical, Fantasy", "cover20.jpg", 4.3, 0, 20),
          ("The Eternal Flame", "Lisa Scott", 2011, "Fantasy, Romance", "cover21.jpg", 4.7, 1, 21),
          ("The Phantom Thief", "Kevin Green", 1994, "Mystery, Thriller", "cover22.jpg", 4.0, 0, 22),
          ("The Infinite Quest", "Sandra Adams", 2008, "Adventure, Science Fiction", "cover23.jpg", 4.5, 1, 23),
          ("The Dark Knight", "Edward Baker", 1986, "Fantasy, Horror", "cover24.jpg", 4.1, 0, 24)
          `, (err) => {
            if (err) {
              console.error('Data insertion error: ', err.message);
            }
          }
        );
      }
    });
  }
});