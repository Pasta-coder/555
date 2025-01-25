import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Add a college
export const addCollege = async (collegeData: object) => {
  const docRef = await addDoc(collection(db, "colleges"), collegeData);
  return docRef.id;
};

// Get all colleges
export const getColleges = async () => {
  const querySnapshot = await getDocs(collection(db, "colleges"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update a college
export const updateCollege = async (collegeId: string, updatedData: object) => {
  const docRef = doc(db, "colleges", collegeId);
  return updateDoc(docRef, updatedData);
};

// Delete a college
export const deleteCollege = async (collegeId: string) => {
  const docRef = doc(db, "colleges", collegeId);
  return deleteDoc(docRef);
};
