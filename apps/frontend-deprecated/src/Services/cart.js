import { collection, getFirestore, addDoc } from "firebase/firestore";

const dataBase = getFirestore();

export const handlePurchaseProducts = async (order) => {
  try {
    const orderCollection = collection(dataBase, "orders");

    const response = await addDoc(orderCollection, order);
    return response;
  } catch (error) {
    return error;
  }
};
