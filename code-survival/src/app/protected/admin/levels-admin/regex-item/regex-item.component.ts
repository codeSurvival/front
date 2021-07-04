import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Regex} from '../../../../shared/models/levels/regex';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';
import {timer} from 'rxjs';
import {LevelsService} from '../../../../core/services/levels.service';
import {RegexCreateDto} from '../../../../shared/dtos/levels/regex-create-dto';
import Swal from "sweetalert2";

@Component({
  selector: 'app-regex-item',
  templateUrl: './regex-item.component.html',
  styleUrls: ['./regex-item.component.scss']
})
export class RegexItemComponent implements OnInit {


  @Input()
  languagesList!: LanguageResponse[];

  @Input()
  levelId!: number;
  @Input()
  constraintId!: string;

  @Input()
  regex!: Regex;

  loading = false;

  regexPatternFormControl = new FormControl('', [
    Validators.required,
    Validators.min(4), Validators.max(20)
  ]);

  constructor(private levelsService: LevelsService ) { }

  ngOnInit(): void {
  }

  onSaveClick(regex: Regex): void {
    this.loading = true;
    const creationDTO = new RegexCreateDto(regex.pattern, regex.language.id);
    this.levelsService.saveRegex(this.levelId, this.constraintId, creationDTO, regex.id  ).subscribe(
      value => {
        timer(300).subscribe(x => {

          this.loading = false;
        });
      }, error => {
        timer(300).subscribe(x => {
          this.loading = false;
          this.unknownError();
        });
      }
    );
  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }

}
