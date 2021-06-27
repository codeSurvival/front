export class ConnectedUser{
  id: string;
  username: string;
  email: string;
  role: string;

  constructor(id: string, username: string, email: string, role: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
  }
  isAdmin(): boolean{
    return this.role === 'ADMIN';
  }
}
