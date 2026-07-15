 // ====================================================================
// firebase-config.js
// إعدادات مشروع Firebase الخاص بمنصة EduVibe (مشروع myaii-88594)
// ====================================================================
// تم تحديثه بقيم مشروع "myaii-88594" الحقيقية من Firebase Console
// ====================================================================
// ⚠️ الاستيراد الآن من ملفات محلية (نفس المجلد) بدل gstatic.com مباشرة،
// لتجاوز مشكلة حجب/CORS كانت تصير عند تحميل الوحدات من داخل الصفحة.
// تأكد إن الملفات الثلاثة التالية موجودة بنفس مجلد هذا الملف:
//   firebase-app.js , firebase-auth.js , firebase-firestore.js
// ====================================================================

import { initializeApp } from "./firebase-app.js";
import { getAuth } from "./firebase-auth.js";
import { getFirestore } from "./firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBoSN3a0uIjo6m7RN6qnD4A3R4-Er2TcnI",
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
