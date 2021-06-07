import { Component, OnInit } from '@angular/core';
import {ConnectedUserResponse} from '../../../../shared/models/users/connected-user-response';
import {UsersService} from '../../../../core/services/users.service';
import Swal from 'sweetalert2';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-users-admin-root',
  templateUrl: './users-admin-root.component.html',
  styleUrls: ['./users-admin-root.component.scss']
})
export class UsersAdminRootComponent implements OnInit {

  users: ConnectedUserResponse[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersList().subscribe( async (value) => {
      this.users = value;
    });
  }

  removeUser(id: string): void {
    this.usersService.removeUser(id).subscribe(  () => {
      this.userRemovedSuccessfully();
    }, (err: HttpErrorResponse) => {
      if (err.status === 404) {
        this.userNotFound();
      } else {
        console.log(err);
        this.unknownError();
      }
    });
  }
  private userRemovedSuccessfully(): void {
    Swal.fire({
      text: 'Utilisateur Supprimé',
      icon: 'success'
    });
  }

  private userNotFound(): void {
    Swal.fire({
      text: 'Utilisateur Inexistant',
      icon: 'error'
    });
  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }


  actionOnUser(): void {

  }
}
