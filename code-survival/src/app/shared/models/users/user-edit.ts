import {UserRights} from '../../enums/users/user-rights.enum';

export class UserEdit {
  username: string;
  password: string;
  mail: string;
  rights?: UserRights;


  constructor(obj: {username: string, password: string, mail: string, rights: UserRights}) {
    this.username = obj?.username;
    this.password = obj?.password;
    this.mail = obj?.mail;
    this.rights = obj?.rights;
  }
}
