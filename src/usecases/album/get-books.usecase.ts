import { DataSnapshot, onChildAdded } from "firebase/database";
import { realtimeRepository } from "../../repositories/realtime.repository";

export const getBooksUsecase = {
  execute: (callback: (snapshot: DataSnapshot) => void) => {
    onChildAdded(realtimeRepository.db, callback);
  },
};
