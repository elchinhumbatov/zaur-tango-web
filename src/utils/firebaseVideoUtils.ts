import { storage } from "@/lib/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const getVideoDownloadURL = async (storagePath: string): Promise<string> => {
  try {
    const videoRef = ref(storage, storagePath);
    const url = await getDownloadURL(videoRef);
    return url;
  } catch (error) {
    console.error("Error getting video download URL:", error);
    throw error;
  }
};
