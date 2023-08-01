export interface UserModelInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface AlbumsTitleInterface {
  id: number;
  title: string;
  userId: number;
}

export interface AlbumPhotosInterface {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
