import { realtimeRepository } from "../../repositories/realtime.repository";
import { Book } from "../../repositories/types/book";
import { uploadFileUsecase } from "./upload-file.usecase";

export const createBookUsecase = {
  execute: async (payload: Book) => {
    try {
      if (payload.file) {
        const result = await uploadFileUsecase.execute(payload.file);
        payload.image = result;
      }
      const { author, image, title } = payload;
      await realtimeRepository.createBook({ author, image, title });
      return payload;
    } catch (error) {
      console.log(
        "🚀 ~ file: create-book.usecase.ts:15 ~ execute: ~ error:",
        error
      );
      return null;
    }
  },
};
