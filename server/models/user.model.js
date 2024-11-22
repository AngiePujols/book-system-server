export class User {
  constructor({ id, username, email, password, createdAt = new Date() }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
  }

  getDisplayName() {
    return this.name;
  }
}
