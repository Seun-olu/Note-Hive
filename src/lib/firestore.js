import { db } from "./firebase"; // Adjust path as necessary
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";

// Fetch all notes from Firestore
export const fetchNotes = async () => {
  const notesCollection = collection(db, "notes");
  const snapshot = await getDocs(notesCollection);

  // Map and normalize Firestore data
  const notes = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt), // Ensure proper date format
    };
  });

  return notes;
};

// Add a new note to Firestore
export const addNote = async (note) => {
  const noteWithTimestamp = { ...note, createdAt: Timestamp.now() }; // Ensure Timestamp for createdAt
  const docRef = await addDoc(collection(db, "notes"), noteWithTimestamp);
  return { id: docRef.id, ...noteWithTimestamp };
};

// Update an existing note in Firestore
export const updateNote = async (note) => {
  const noteRef = doc(db, "notes", note.id);
  const updatedNote = { ...note, updatedAt: Timestamp.now() }; // Optional: add updatedAt
  await updateDoc(noteRef, updatedNote);
  return updatedNote;
};

// Delete a note from Firestore
export const deleteNote = async (id) => {
  const noteRef = doc(db, "notes", id);
  await deleteDoc(noteRef);
};
