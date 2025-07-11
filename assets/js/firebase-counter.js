// 文件路径: /assets/js/firebase-counter.js
// 这个版本假设您已经在 HTML 中通过 <script> 标签加载了 Firebase

document.addEventListener('DOMContentLoaded', () => {
    // 1. 粘贴您自己的 Firebase 配置信息
    const firebaseConfig = {
    apiKey: "AIzaSyDPfqHMdUPHPjtksXKRPmYDdhq-6s4y-e8",
    authDomain: "web-counting.firebaseapp.com",
    projectId: "web-counting",
    storageBucket: "web-counting.firebasestorage.app",
    messagingSenderId: "140536989109",
    appId: "1:140536989109:web:f73719a0522405ab67c5fc",
    measurementId: "G-QV8FJTVMEX"
    };

    // 2. 初始化 Firebase 应用和 Firestore 数据库
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // 3. 指定数据库文档引用
    const countersDocRef = db.collection('counters').doc('web-counting');

    // 4. 实时监听数据
    countersDocRef.onSnapshot(doc => {
        if (doc.exists) {
            const counts = doc.data();
            document.getElementById('countLike').textContent = counts.buttonLike || 0;
            document.getElementById('countLove').textContent = counts.buttonLove || 0;
            document.getElementById('countStar').textContent = counts.buttonStar || 0;
        } else {
            console.error("Firebase Error: Document not found!");
        }
    });

    // 5. 为按钮绑定点击事件
    function setupIncrement(buttonId, fieldToIncrement) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                countersDocRef.update({
                    [fieldToIncrement]: firebase.firestore.FieldValue.increment(1)
                });
            });
        }
    }

    setupIncrement('buttonLike', 'buttonLike');
    setupIncrement('buttonLove', 'buttonLove');
    setupIncrement('buttonStar', 'buttonStar');
});