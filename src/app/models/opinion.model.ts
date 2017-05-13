import {User} from '../landing/user.model';
export class Opinion {
  public date: Date;
  public user: User;
  public content: string;

  constructor(date: Date, user: User, content: string) {
    this.date = date;
    this.user = user;
    this.content = content;
  }
}
