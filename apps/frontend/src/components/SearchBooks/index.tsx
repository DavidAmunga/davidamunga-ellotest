import React, { useState } from "react";
import {
  Autocomplete,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Book } from "@/@types/Book";

interface Props {
  books: Book[];
  searchValue: string;
  handleSearchValue: (newValue: string) => void;
}

export const SearchBooks: React.FC<Props> = ({
  books,
  searchValue,
  handleSearchValue,
}) => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        alignItems={"start"}
        sx={{
          px: 2,
          borderRadius: "20px",
          border: `4px solid ${theme.palette.primary.main}`,
          py: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h6" gutterBottom>
          <strong>What book do you want to read today?📚</strong>
        </Typography>
        <div style={{ display: "flex", flex: 1 }}></div>
        <Autocomplete
          fullWidth
          options={books}
          groupBy={(option) => option.title.charAt(0)}
          noOptionsText={`No book exists called "${searchValue}"`}
          getOptionLabel={(book: Book) => book.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for Book by Title"
              variant="filled"
            />
          )}
          inputValue={searchValue}
          onInputChange={(event, newValue) => {
            handleSearchValue(newValue);
          }}
        />
      </Stack>
    </Container>
  );
};
