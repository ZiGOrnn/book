import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

export const storageRepository = {
  uploadFile: (file: File) => {
    return new Promise<string>(async (resolve) => {
      const storageRef = ref(storage, "images");
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      resolve(downloadURL);
    });
  },
};
