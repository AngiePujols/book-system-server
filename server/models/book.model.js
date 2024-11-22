export class Book {
  constructor({ id, title, author, year, genre, coverImage, rating, isFavorite, userId,  createdAt = new Date(), updatedAt = new Date() }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.coverImage = coverImage;
    this.rating = rating;
    this.isFavorite = isFavorite;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}