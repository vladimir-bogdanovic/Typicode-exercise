import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../services/get-users.service';
import { UserModelInterface } from '../types/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users!: UserModelInterface[];
  constructor(
    private getUsersService: GetUsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsersService
      .getUsers()
      .subscribe((resData: UserModelInterface[]) => {
        //  console.log(resData);
        this.users = resData;
      });
  }

  goToAlbums(id: number) {
    this.router.navigate(['users/' + id + '/albums']);
  }

  goToTodos(id: number) {
    this.router.navigate(['users/' + id + '/todos']);
  }

  goToPosts(id: number) {
    this.router.navigate(['users/' + id + '/posts']);
  }
}
