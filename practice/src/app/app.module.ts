import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAlbumComponent } from './user-album/user-album.component';
import { UserTodosComponent } from './user-todos/user-todos.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PhotosComponent } from './user-album/photos/photos.component';
import { UserPostComponent } from './user-posts/user-post/user-post.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserAlbumComponent,
    UserTodosComponent,
    UserPostsComponent,
    PhotosComponent,
    UserPostComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
