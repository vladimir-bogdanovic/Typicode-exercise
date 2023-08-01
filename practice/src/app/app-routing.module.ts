import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAlbumComponent } from './user-album/user-album.component';
import { UserTodosComponent } from './user-todos/user-todos.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PhotosComponent } from './user-album/photos/photos.component';
import { UserPostComponent } from './user-posts/user-post/user-post.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/:id/albums',
    component: UserAlbumComponent,
  },
  {
    path: 'users/:id/todos',
    component: UserTodosComponent,
  },
  {
    path: 'users/:id/posts',
    component: UserPostsComponent,
  },
  {
    path: 'albums/:id/photos',
    component: PhotosComponent,
  },
  {
    path: 'todos',
    component: UserTodosComponent,
  },
  {
    path: 'posts',
    component: UserPostsComponent,
  },
  {
    path: 'posts/:postId',
    component: UserPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
