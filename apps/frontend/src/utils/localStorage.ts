export const getReadingList = (): string[] => {
  const readingList = localStorage.getItem("readingList");
  return readingList ? JSON.parse(readingList) : [];
};

export const addToReadingList = (bookId: string) => {
  const readingList = getReadingList();
  if (!readingList.includes(bookId)) {
    readingList.push(bookId);
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }
};

export const removeFromReadingList = (bookId: string) => {
  const readingList = getReadingList();
  const updatedReadingList = readingList.filter((title) => title !== bookId);
  localStorage.setItem("readingList", JSON.stringify(updatedReadingList));
};
