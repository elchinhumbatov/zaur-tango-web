import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore(); // Initialize Firestore

async function copyFirestoreDocument(
  sourceCollection: string,
  sourceDocId: string,
  destinationCollection: string,
  newDocId: string // Or let Firestore generate one
) {
  try {
    // 1. Get a reference to the source document
    const sourceDocRef = doc(db, sourceCollection, sourceDocId);

    // 2. Read the source document's data
    const sourceDocSnap = await getDoc(sourceDocRef);

    if (sourceDocSnap.exists()) {
      const dataToCopy = sourceDocSnap.data();

      // 3. Get a reference to the new destination document
      const newDocRef = doc(db, destinationCollection, newDocId); // Use newDocId or generate a new one

      // 4. Write the copied data to the new document
      await setDoc(newDocRef, dataToCopy);

      console.log(`Document "${sourceDocId}" from "${sourceCollection}" successfully copied to "${newDocId}" in "${destinationCollection}".`);

      // Optional: If you want to delete the original document after copying
      // await deleteDoc(sourceDocRef);
      // console.log(`Original document "${sourceDocId}" deleted.`);

      return newDocRef; // Return the reference to the new document
    } else {
      console.log(`Source document "${sourceDocId}" not found in "${sourceCollection}".`);
      return null;
    }
  } catch (error) {
    console.error("Error copying document:", error);
    throw error;
  }
}

// --- How to use it ---
// Example: Copy a document from 'users' to 'archivedUsers' and give it a new auto-generated ID
// import { collection } from "firebase/firestore"; // Need collection for auto-ID

// async function exampleUsage() {
//   // If you want a specific new ID:
//   await copyFirestoreDocument('courses', 'course_id_123', 'courses', 'course_id_123_copy');

//   // If you want Firestore to generate a new ID for the copy:
//   // (You'd typically use doc(collection(db, destinationCollection)) to get an auto-ID)
//   const newCourseDocRef = doc(collection(db, 'courses')); // Get a reference with an auto-generated ID
//   await copyFirestoreDocument('courses', 'another_course', 'courses', newCourseDocRef.id);
//   console.log("New auto-generated copy ID:", newCourseDocRef.id);
// }

// Call the example usage function
// exampleUsage();
export default copyFirestoreDocument;