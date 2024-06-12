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
}

export const SearchBooks: React.FC<Props> = ({ books }) => {
  const [searchValue, setSearchValue] = useState("");

  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        alignItems={"start"}
        sx={{
          px: 2,
          borderRadius: "10px",
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
            setSearchValue(newValue);
          }}
        />
      </Stack>
    </Container>
  );
};
