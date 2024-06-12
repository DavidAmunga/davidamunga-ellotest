import React from "react";
import { List } from "@mui/material";
import { BookListItem } from "./BookListItem";
import { Book } from "@/@types/Book";

interface BookListProps {
  books: Book[];
  readingList: string[];
  onAddToReadingList: (bookTitle: string) => void;
  onRemoveFromReadingList: (bookTitle: string) => void;
}

export const BookList: React.FC<BookListProps> = ({
  books,
  readingList,
  onAddToReadingList,
  onRemoveFromReadingList,
}) => {
  return (
    <List>
      {books.map((book) => (
        <BookListItem
          key={book.title}
          book={book}
          onAddToReadingList={onAddToReadingList}
          onRemoveFromReadingList={onRemoveFromReadingList}
          isInReadingList={readingList.includes(book.title)}
        />
      ))}
    </List>
  );
};
