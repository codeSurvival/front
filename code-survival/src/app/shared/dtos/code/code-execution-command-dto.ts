export class CodeExecutionCommandDTO {
  code: string;
  // tslint:disable-next-line:variable-name
  language_id: string;

  constructor(code: string, languageId: string) {
    this.code = code;
    this.language_id = languageId;
  }

}
