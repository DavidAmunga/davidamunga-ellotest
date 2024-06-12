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
  if (!books?.length) return <EmptyState />;

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

const EmptyState: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <LibraryBooks sx={{ fontSize: 80, color: "#5EC5C0" }} />
      <Typography variant="h6" component="p" sx={{ marginTop: "20px" }}>
        No books found
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ marginTop: "10px", color: "text.secondary" }}
      >
        Try searching for a different title or check back later.
      </Typography>
    </Box>
  );
};
