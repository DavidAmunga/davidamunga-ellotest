import React, { useState } from "react";
import {
  Box,
  Container,
  useTheme,
  Typography,
  Stack,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { SearchBooks } from "@/components/SearchBooks";
import { BookList } from "@/components/BookList";
import { useBooks } from "@/hooks/useBooks";
import { Book } from "@/@types/Book";
import { useReadingList } from "@/hooks/useReadingList";

const Home: React.FC = () => {
  const { books, loading, error } = useBooks();
  const { readingList, addBook, removeBook } = useReadingList();

  const [showReadingList, setShowReadingList] = useState(false);

  const theme = useTheme();

  const getBooks = (): Book[] => {
    return (books ?? []).filter((book) =>
      showReadingList
        ? readingList.includes(`${book.title}-${book.readingLevel}`)
        : true
    );
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Box sx={{ m: 0 }}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{
          p: 2,
          background: theme.palette.primary.dark,
        }}
      >
        <Typography
          sx={{}}
          color="white"
          variant="h4"
          component="h1"
          gutterBottom
        >
          <strong>Ello Book List</strong>
        </Typography>

        <SearchBooks books={books} />
      </Stack>
      <Container maxWidth={"md"} sx={{ py: 2 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
          <ToggleButtonGroup
            value={showReadingList}
            exclusive
            onChange={(event, newValue: boolean) =>
              setShowReadingList(newValue)
            }
            aria-label="showBooks"
          >
            <ToggleButton value={false} aria-label="show-all-books">
              <strong> ALL BOOKS</strong>
            </ToggleButton>
            <ToggleButton value={true} aria-label="show-my-reading-list">
              <strong>
                MY READING LIST{" "}
                {readingList && readingList.length > 0
                  ? `(${readingList.length})`
                  : ``}
              </strong>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <BookList
          books={getBooks()}
          readingList={readingList}
          onAddToReadingList={addBook}
          onRemoveFromReadingList={removeBook}
        />
      </Container>
    </Box>
  );
};

export default Home;
