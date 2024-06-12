import { LibraryBooks } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

interface Props {
  searchValue: string;
}

const EmptyBookState = ({ searchValue }: Props) => {
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
        No books{" "}
        {searchValue && searchValue.length > 0 ? (
          <>with the title &apos;{searchValue}&apos;</>
        ) : (
          ""
        )}
        &nbsp;found
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

export default EmptyBookState;
