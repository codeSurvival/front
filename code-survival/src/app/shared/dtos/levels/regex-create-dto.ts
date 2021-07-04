export class RegexCreateDto {
  pattern: string;
  // tslint:disable-next-line:variable-name
  language_id: string;

  constructor(pattern: string, languageId: string) {
    this.pattern = pattern;
    this.language_id = languageId;
  }
}
