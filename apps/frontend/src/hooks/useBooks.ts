import { Book } from "@/@types/Book";
import { GET_BOOKS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export const useBooks = () => {
  const { data, loading, error } = useQuery<{ books: Book[] }>(GET_BOOKS);

  return {
    books: data?.books || [],
    loading,
    error,
  };
};
