import React from "react";
import { Container, Typography } from "@mui/material";
import { SearchBooks } from "@/components/SearchBooks";
import { BookList } from "@/components/BookList";
import { useBooks } from "@/hooks/useBooks";
import { Book } from "@/@types/Book";
import { useReadingList } from "@/hooks/useReadingList";

const Home: React.FC = () => {
  const { books, loading, error } = useBooks();
  const { readingList, addBook, removeBook } = useReadingList();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Book List
      </Typography>
      <SearchBooks books={books} />
      <BookList
        books={books}
        readingList={readingList}
        onAddToReadingList={addBook}
        onRemoveFromReadingList={removeBook}
      />
    </Container>
  );
};

export default Home;
