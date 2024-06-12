import { useState, useEffect } from "react";
import {
  getReadingList,
  addToReadingList,
  removeFromReadingList,
} from "@/utils/localStorage";

export const useReadingList = () => {
  const [readingList, setReadingList] = useState<string[]>([]);

  useEffect(() => {
    setReadingList(getReadingList());
  }, []);

  const addBook = (bookId: string) => {
    addToReadingList(bookId);
    setReadingList(getReadingList());
  };

  const removeBook = (bookId: string) => {
    removeFromReadingList(bookId);
    setReadingList(getReadingList());
  };

  return {
    readingList,
    addBook,
    removeBook,
  };
};
