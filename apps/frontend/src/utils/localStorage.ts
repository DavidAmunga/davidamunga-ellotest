export const getReadingList = (): string[] => {
  const readingList = localStorage.getItem("readingList");
  return readingList ? JSON.parse(readingList) : [];
};

export const addToReadingList = (bookTitle: string) => {
  const readingList = getReadingList();
  if (!readingList.includes(bookTitle)) {
    readingList.push(bookTitle);
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }
};

export const removeFromReadingList = (bookTitle: string) => {
  const readingList = getReadingList();
  const updatedReadingList = readingList.filter((title) => title !== bookTitle);
  localStorage.setItem("readingList", JSON.stringify(updatedReadingList));
};
