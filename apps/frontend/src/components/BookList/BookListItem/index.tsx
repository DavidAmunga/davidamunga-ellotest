import React from "react";
import { Grid, Button, useTheme, Typography, Stack } from "@mui/material";
import { BookmarkAddRounded, RemoveCircle } from "@mui/icons-material";
import { Book } from "@/@types/Book";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Book Image */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "4px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <motion.img
              src={book.coverPhotoURL}
              alt={book.title}
              style={{
                width: "100%",
                display: "block",
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <span
            style={{
              position: "absolute",
              right: 5,
              top: -10,
              textAlign: "center",
              borderRadius: "2px",
              border: `3px solid ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.common.white,
              color: theme.palette.primary.main,
              padding: 4,
            }}
          >
            {book.readingLevel}
          </span>
        </div>

        <Typography gutterBottom variant="body1">
          {book.title}
        </Typography>
        <Typography color={theme.palette.grey[500]} variant="body2">
          By {book.author}
        </Typography>
        <div style={{ flex: 1 }}></div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          style={{ width: "100%" }}
        >
          <Button
            variant={"outlined"}
            size="small"
            fullWidth
            sx={{ borderRadius: "50px" }}
            color={isInReadingList ? `error` : `primary`}
            startIcon={
              isInReadingList ? <RemoveCircle /> : <BookmarkAddRounded />
            }
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
        </motion.div>
      </motion.div>
    </Grid>
  );
};
