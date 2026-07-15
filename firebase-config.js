 // ====================================================================
// firebase-config.js
// إعدادات مشروع Firebase الخاص بمنصة EduVibe (مشروع myaii-88594)
// ====================================================================
// تم تحديثه بقيم مشروع "myaii-88594" الحقيقية من Firebase Console
// ====================================================================
// ⚠️ الاستيراد الآن من esm.sh بدل gstatic.com مباشرة، لتجاوز مشكلة
// الحجب/CORS. esm.sh يجمع كل الملفات الفرعية بملف واحد فلا حاجة
// لتنزيل أو رفع أي ملفات SDK يدوياً.
// ====================================================================

import { initializeApp } from "https://esm.sh/firebase@12.16.0/app";
import { getAuth } from "https://esm.sh/firebase@12.16.0/auth";
import { getFirestore } from "https://esm.sh/firebase@12.16.0/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoSN3a0uljo6m7RN6qnD4A3R4-Er2TcnI",
  authDomain: "myaii-88594.firebaseapp.com",
  projectId: "myaii-88594",
  storageBucket: "myaii-88594.firebasestorage.app",
  messagingSenderId: "493538715164",
  appId: "1:493538715164:web:9b2c55ddc3c96f96f4a1d9",
  measurementId: "G-8PYDZN4DX9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
