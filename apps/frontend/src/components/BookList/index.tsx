import React from "react";
import { Box, Grid, List, Paper, Stack, Typography } from "@mui/material";
import { BookListItem } from "./BookListItem";
import { Book } from "@/@types/Book";
import { LibraryBooks } from "@mui/icons-material";

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
    <Grid container spacing={4} alignItems="stretch">
      {books.map((book) => (
        <BookListItem
          key={`${book.title}-${book.readingLevel}`}
          book={book}
          onAddToReadingList={onAddToReadingList}
          onRemoveFromReadingList={onRemoveFromReadingList}
          isInReadingList={readingList.includes(
            `${book.title}-${book.readingLevel}`
          )}
        />
      ))}
    </Grid>
  );
};
