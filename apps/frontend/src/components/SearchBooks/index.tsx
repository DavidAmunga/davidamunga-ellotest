import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Book } from "@/@types/Book";

interface Props {
  books: Book[];
}

export const SearchBooks: React.FC<Props> = ({ books }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Autocomplete
      options={books}
      getOptionLabel={(book) => book.title}
      renderInput={(params) => (
        <TextField {...params} label="Search books" variant="outlined" />
      )}
      inputValue={searchValue}
      onInputChange={(event, newValue) => {
        setSearchValue(newValue);
      }}
    />
  );
};
