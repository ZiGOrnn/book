// import { doc, setDoc } from "firebase/firestore";
// import { firestore } from "../adapter/firebase";

import { onValue, push, ref, set } from "firebase/database";
import { database } from "../config/firebase";
import { Book } from "./types/book";
import { Colllection } from "./types/colllection";

export const realtimeRepository = {
  db: ref(database, Colllection.Books),
  createBook: async (data: Book) => {
    const pushBooksRef = push(realtimeRepository.db);
    return await set(pushBooksRef, data);
  },
  getBook(id: string) {
    return new Promise<Book>((resolve) => {
      const starCountRef = ref(database, `${Colllection.Books}/${id}`);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    });
  },
};
