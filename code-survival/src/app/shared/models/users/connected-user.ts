export class ConnectedUser{
  id: string;
  username: string;
  email: string;
  role: string;
  level: number;

  constructor(id: string, username: string, email: string, role: string, level: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
    this.level = level;
  }
  isAdmin(): boolean{
    return this.role === 'ADMIN';
  }
}
