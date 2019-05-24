export class User {
  email: string;
  passwordDigest?: string;
  name: string;
  provider?: string;
  token?: string;
  password: string;

  constructor(user: Partial<User>) {
    this.email = user.email.toLowerCase();
    this.name = user.name;

    if (user.password) {
      this.password = user.password;
      this.passwordDigest = User.hash(user.password);
    }

    this.provider = user.provider || 'email';
    this.token = user.token;
  }

  // tslint:disable:no-bitwise
  static hash(password: string): string {
    let hash = 0;
    if (password.length === 0) {
        return btoa(hash.toString());
    }

    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    return btoa(hash.toString());
  }

  authenticate(email, password): boolean {
    return (this.email.toLowerCase() === email.toLowerCase()) && this.compare(password, this.passwordDigest);
  }

  private compare(password, hash): boolean {
    return User.hash(password) === hash;
  }
}
