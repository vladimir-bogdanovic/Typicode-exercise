import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../services/get-users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlbumsTitleInterface } from '../types/user-model';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css'],
})
export class UserAlbumComponent implements OnInit {
  param!: string;
  albumTitles!: AlbumsTitleInterface[];
  constructor(
    private getUsersService: GetUsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.param = params.id;
    });
    this.getUsersService
      .getUsersAlbum(this.param)
      .subscribe((resData: AlbumsTitleInterface[]) => {
        console.log(resData);
        this.albumTitles = resData;
      });
  }

  goToAlbumDetails(id: number) {
    this.router.navigate(['albums/' + id + '/photos']);
  }
}
