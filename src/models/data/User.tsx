export interface IUser {
  getId(): number;
  setId(id: number): void;
  getEmail(): string;
  setEmail(email: string): void;
  getToken(): string;
  setToken(token: string): void;
  getName(): string;
  setName(name: string): void;
  getFirstname(): string;
  setFirstname(firstname: string): void;
  getUsername(): string;
  setUsername(username: string): void;
}

export class User implements IUser {
  private id: number;
  private email: string;
  private token: string;
  private name: string;
  private firstname: string;
  private username: string;
  constructor(
    id: number,
    email: string,
    token: string,
    name: string,
    firstname: string,
    username: string
  ) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.name = name;
    this.firstname = firstname;
    this.username = username;
  }
  // Méthodes pour accéder aux attributs privés
  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }

  getToken(): string {
    return this.token;
  }
  setToken(token: string): void {
    this.token = token;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getFirstname(): string {
    return this.firstname;
  }
  setFirstname(firstname: string): void {
    this.firstname = firstname;
  }
  getUsername(): string {
    return this.username;
  }
  setUsername(username: string): void {
    this.username = username;
  }
}
