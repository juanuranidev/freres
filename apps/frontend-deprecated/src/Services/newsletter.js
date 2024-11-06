import {
  query,
  where,
  addDoc,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";

const dataBase = getFirestore();

export const verifyEmail = async (userEmail) => {
  try {
    let emailObject = { email: userEmail };

    const emailCollection = collection(dataBase, "newsletter");
    const queryCollection = query(
      emailCollection,
      where("email", "==", emailObject.email)
    );

    const response = await getDocs(queryCollection);
    return response;
  } catch (error) {
    return error;
  }
};

export const uploadEmail = async (userEmail) => {
  try {
    let emailObject = { email: userEmail };

    const emailCollection = collection(dataBase, "newsletter");

    const response = await addDoc(emailCollection, emailObject);
    return response;
  } catch (error) {
    return error;
  }
};
