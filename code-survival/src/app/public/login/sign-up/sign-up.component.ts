import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserEdit} from '../../../shared/models/users/user-edit';
import {AuthenticationService} from '../../../core/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  @Input()
  formFieldAppearance = 'outline';
  @Input()
  formFieldClass = 'w-75';
  @Input()
  resetAvailable = true;

  @Input()
  set user(user: UserEdit){
    this.localeUser = user;
    this.initForm();
  }

  constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) {
    this.initForm();
  }

  localeUser: UserEdit = {password: '', email: '', username: ''};

  @Output()
  userChanged = new EventEmitter<UserEdit>();

  userForm!: FormGroup;
  passwordForm!: FormGroup;

  usernameCtrl!: FormControl;
  emailCtrl!: FormControl;
  pwdCtrl!: FormControl;
  confirmPwdCtrl!: FormControl;

  static passwordMatch(group: FormGroup): {matchingError: boolean} | null {
    // @ts-ignore
    const password = group.get('password').value;
    // @ts-ignore
    const confirm = group.get('confirm').value;
    if (password === confirm) {
      return null;
    } else {
      return {matchingError: true};
    }
  }

  initForm(): void {
    this.usernameCtrl = this.fb.control(this.localeUser?.username,
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.emailCtrl = this.fb.control(this.localeUser?.email,
      [Validators.required, Validators.email]);
    this.pwdCtrl = this.fb.control('',
      [Validators.required, Validators.minLength(8)]);
    this.confirmPwdCtrl = this.fb.control('',
      [Validators.required]);

    this.passwordForm = this.fb.group(
      {password: this.pwdCtrl, confirm: this.confirmPwdCtrl},
      {validators: SignUpComponent.passwordMatch}
    );
    this.userForm = this.fb.group({
        username: this.usernameCtrl,
        email: this.emailCtrl,
        passwordForm: this.passwordForm
      }
    );
  }

  ngOnInit(): void {
  }


  isFormValid(): boolean {
    return this.userForm.valid;
  }

  reset(): void{
    this.userForm.reset({
      username: this.localeUser.username,
      email: this.localeUser.email
    });
    this.passwordForm.reset({
      password: '',
      confirm: ''
    });
  }

  onSubmitUser(): void {
    this.localeUser.email = this.emailCtrl.value;
    this.localeUser.username = this.usernameCtrl.value;
    this.localeUser.password = this.pwdCtrl.value;
    this.userChanged.emit(this.localeUser);
  }

}
