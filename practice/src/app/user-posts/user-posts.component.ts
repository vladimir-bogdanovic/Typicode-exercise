import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../services/get-users.service';
import { PostModelInterface } from '../types/post-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  posts!: PostModelInterface[];

  constructor(
    private getUsersService: GetUsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsersService
      .getPosts()
      .subscribe((resData: PostModelInterface[]) => {
        this.posts = resData;
        console.log(resData);
      });
  }

  goToPost(id: number) {
    this.router.navigate(['posts/' + id]);
  }
}
