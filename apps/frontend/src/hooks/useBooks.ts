import { Book } from "@/@types/Book";
import { GET_BOOKS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export const useBooks = () => {
  const { data, loading, error } = useQuery<{ books: Book[] }>(GET_BOOKS);

  let books: Book[] = [];
  if (data) {
    books = [...data!.books].sort((a, b) => a.title.localeCompare(b.title));
  }
  return {
    books,
    loading,
    error,
  };
};
