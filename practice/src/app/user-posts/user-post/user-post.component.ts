import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetUsersService } from 'src/app/services/get-users.service';
import {
  CommenstModelInterface,
  PostModelInterface,
} from 'src/app/types/post-model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit {
  param!: string;
  post!: string;
  comments!: CommenstModelInterface[];

  constructor(
    private getUsersService: GetUsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.param = params.postId;
    });

    this.getUsersService
      .getPost(this.param)
      .subscribe((resData: PostModelInterface) => {
        this.post = resData.title;
      });

    this.getUsersService
      .getComments(this.param)
      .subscribe((resData: CommenstModelInterface[]) => {
        this.comments = resData;
        console.log(resData);
      });
  }
}
