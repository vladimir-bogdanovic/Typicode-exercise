export interface PostModelInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface CommenstModelInterface {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
