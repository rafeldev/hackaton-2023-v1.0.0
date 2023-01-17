import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const createNewShortUrl = async (uid, title, url ) => {
  try {
    /* const docRef = await setDoc(doc(db, uid, "journal"), newNote ); */

    const shortUrl = ""

    const newShortUrl = await addDoc(
      collection(db, uid, "short-url"), {
        title,
        shortUrl
      }
    );

    return newShortUrl;

  } catch (error) {
    console.log(error);
    throw new Error(error.message)
  }
}