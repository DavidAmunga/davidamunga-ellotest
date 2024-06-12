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

  const addBook = (bookTitle: string) => {
    addToReadingList(bookTitle);
    setReadingList(getReadingList());
  };

  const removeBook = (bookTitle: string) => {
    removeFromReadingList(bookTitle);
    setReadingList(getReadingList());
  };

  return {
    readingList,
    addBook,
    removeBook,
  };
};
