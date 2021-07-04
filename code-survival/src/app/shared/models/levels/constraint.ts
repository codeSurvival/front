import {Regex} from './regex';


export class Constraint {
  id: string | null;
  name: string;
  warning: string;
  regexes: Regex[];

  constructor(id: string | null, name: string, warning: string, regexes: Regex[]) {
    this.id = id;
    this.name = name;
    this.warning = warning;
    this.regexes = regexes;
  }

}
