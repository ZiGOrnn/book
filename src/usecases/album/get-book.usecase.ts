import { realtimeRepository } from "../../repositories/realtime.repository";

export const getBookUsecase = {
  execute: async (id: string) => {
    return await realtimeRepository.getBook(id);
  },
};
