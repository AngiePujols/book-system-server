export class Review {
  constructor({ id, bookId, userId, rating, comment, createdAt = new Date() }) {
    this.id = id;
    this.bookId = bookId;
    this.userId = userId;
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt;
  }
}