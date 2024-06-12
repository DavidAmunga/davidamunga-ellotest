import React from "react";
import { Grid, Button, useTheme, Typography, Stack } from "@mui/material";
import { BookmarkAddRounded, RemoveCircle } from "@mui/icons-material";
import { Book } from "@/@types/Book";

interface Props {
  book: Book;
  onAddToReadingList: (bookTitle: string) => void;
  onRemoveFromReadingList: (bookTitle: string) => void;
  isInReadingList: boolean;
}

export const BookListItem: React.FC<Props> = ({
  book,
  onAddToReadingList,
  onRemoveFromReadingList,
  isInReadingList,
}) => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={6}
      md={3}
      style={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <img
        style={{ borderRadius: "4px" }}
        src={book.coverPhotoURL}
        width="100%"
        alt={book.title}
      />

      <Typography gutterBottom variant="body1">
        {book.title}
      </Typography>
      <Typography color={theme.palette.grey[500]} variant="body2">
        By {book.author}
      </Typography>
      <div style={{ flex: 1 }}></div>
      <Button
        variant={"outlined"}
        size="small"
        sx={{ borderRadius: "50px" }}
        color={isInReadingList ? `error` : `primary`}
        startIcon={isInReadingList ? <RemoveCircle /> : <BookmarkAddRounded />}
        onClick={() => {
          //Since there is no unique id - concat with book title and reading level
          let bookTitleReadingLevel = `${book.title}-${book.readingLevel}`;
          if (isInReadingList) {
            onRemoveFromReadingList(bookTitleReadingLevel);
          } else {
            onAddToReadingList(bookTitleReadingLevel);
          }
        }}
      >
        {isInReadingList ? `Remove` : "Add"}
      </Button>
    </Grid>
  );
};
