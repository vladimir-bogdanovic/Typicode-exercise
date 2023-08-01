import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetUsersService } from 'src/app/services/get-users.service';
import { AlbumPhotosInterface } from 'src/app/types/user-model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  param!: string;
  albumPhotos!: AlbumPhotosInterface[];
  constructor(
    private route: ActivatedRoute,
    private getUsersService: GetUsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.param = params.id;
    });

    this.getUsersService
      .getAlbumPhotos(this.param)
      .subscribe((resData: AlbumPhotosInterface[]) => {
        console.log(resData);
        this.albumPhotos = resData;
      });
  }
}
