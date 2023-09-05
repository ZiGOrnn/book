import { storageRepository } from "../../repositories/storage.repository";

export const uploadFileUsecase = {
  execute: async (file: File) => {
    const result = await storageRepository.uploadFile(file);
    return result;
  },
};
