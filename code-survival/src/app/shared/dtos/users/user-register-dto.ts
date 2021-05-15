export class UserRegisterDto {
  username: string;
  password: string;
  mail: string;

  constructor(obj: {username: string, password: string, mail: string}) {
    this.username = obj?.username;
    this.password = obj?.password;
    this.mail = obj?.mail;
  }
}
