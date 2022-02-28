import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCouPby1tAlVG7-jRrMTPsq9h6KSFGIU0A',
  authDomain: 'waldo-74d6f.firebaseapp.com',
  projectId: 'waldo-74d6f',
  storageBucket: 'waldo-74d6f.appspot.com',
  messagingSenderId: '559667435571',
  appId: '1:559667435571:web:ea8cf37ddf5d762606eb46',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
