import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
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
  return (
    <ListItem>
      <ListItemText primary={book.title} secondary={`by ${book.author}`} />
      <ListItemSecondaryAction>
        {isInReadingList ? (
          <IconButton
            edge="end"
            onClick={() => onRemoveFromReadingList(book.title)}
          >
            <RemoveCircle />
          </IconButton>
        ) : (
          <IconButton edge="end" onClick={() => onAddToReadingList(book.title)}>
            <AddCircle />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
