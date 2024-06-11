export interface BookRes {
  data: BookResData;
}
export interface BookResData {
  books: Book[];
}

export interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}
