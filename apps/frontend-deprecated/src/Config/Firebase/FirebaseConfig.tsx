import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCWtOIvIE6OneRLHoSSWRM77TYYiP3iXAg",
  authDomain: "freres-1058c.firebaseapp.com",
  projectId: "freres-1058c",
  storageBucket: "freres-1058c.appspot.com",
  messagingSenderId: "596340469735",
  appId: "1:596340469735:web:a4538d0c41e82c7505d742",
  measurementId: "G-QVFET085XF"
};

const app:any = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getFirestoreApp = () => {
    return app + analytics
}