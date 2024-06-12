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
import EmptyBookState from "@/components/BookList/EmptyBookState";

const Home: React.FC = () => {
  const { books, loading, error } = useBooks();
  const { readingList, addBook, removeBook } = useReadingList();

  const [searchValue, setSearchValue] = useState("");

  const [showReadingList, setShowReadingList] = useState(false);

  const theme = useTheme();

  const getBooks = (): Book[] => {
    return (books ?? [])
      .filter((book) =>
        showReadingList
          ? readingList.includes(`${book.title}-${book.readingLevel}`)
          : true
      )
      .filter((book) =>
        searchValue && searchValue.length > 0
          ? book.title.toLowerCase().includes(`${searchValue.toLowerCase()}`)
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
          position: "sticky",
          top: 0,
          zIndex: 3,
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

        <SearchBooks
          books={books}
          handleSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </Stack>
      <Container maxWidth={"md"} sx={{ py: 2 }}>
        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={2}
          sx={{ mb: 2 }}
          alignItems="center"
        >
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

        {searchValue && searchValue.length > 0 && (
          <Stack justifyContent="center" sx={{ py: 2 }}>
            <Typography variant="body2">
              Showing Results for &apos;{`${searchValue}`}&apos;
            </Typography>
          </Stack>
        )}

        <BookList
          books={getBooks()}
          readingList={readingList}
          onAddToReadingList={addBook}
          onRemoveFromReadingList={removeBook}
        />

        {getBooks().length == 0 && <EmptyBookState searchValue={searchValue} />}
      </Container>
    </Box>
  );
};

export default Home;
