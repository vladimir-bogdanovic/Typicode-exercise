import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AlbumPhotosInterface,
  AlbumsTitleInterface,
  UserModelInterface,
} from '../types/user-model';
import { APIRoutes } from '../types/api-routes';
import { Observable } from 'rxjs';
import { TodoModelInterface } from '../types/todo-model';
import {
  CommenstModelInterface,
  PostModelInterface,
} from '../types/post-model';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModelInterface[]> {
    return this.http.get<UserModelInterface[]>(APIRoutes.baseUsersRoute);
  }

  getUsersAlbum(id: string): Observable<AlbumsTitleInterface[]> {
    return this.http.get<AlbumsTitleInterface[]>(
      APIRoutes.baseUsersRoute + id + '/albums'
    );
  }

  getAlbumPhotos(id: string): Observable<AlbumPhotosInterface[]> {
    return this.http.get<AlbumPhotosInterface[]>(
      APIRoutes.baseUsersAlbum + id + '/photos'
    );
  }

  getTodos(): Observable<TodoModelInterface[]> {
    return this.http.get<TodoModelInterface[]>(APIRoutes.baseTodosRoute);
  }

  getPosts(): Observable<PostModelInterface[]> {
    return this.http.get<PostModelInterface[]>(APIRoutes.basePostsRoute);
  }

  getPost(id: string): Observable<PostModelInterface> {
    return this.http.get<PostModelInterface>(APIRoutes.basePostsRoute + id);
  }

  getComments(id: string): Observable<CommenstModelInterface[]> {
    return this.http.get<CommenstModelInterface[]>(
      APIRoutes.basePostsRoute + id + '/comments'
    );
  }
}
