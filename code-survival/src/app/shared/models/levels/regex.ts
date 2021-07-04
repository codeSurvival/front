import {LanguageResponse} from '../languages/language-response';

export class Regex {
  id: string | null;
  pattern: string;
  language: LanguageResponse;

  constructor(id: string | null, pattern: string, language: LanguageResponse) {
    this.id = id;
    this.pattern = pattern;
    this.language = language;
  }
}
