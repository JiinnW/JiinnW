document.addEventListener('DOMContentLoaded', () => {
    // Firebase 配置
    const firebaseConfig = {
        apiKey: "AIzaSyDPfqHMdUPHPjtksXKRPmYDdhq-6s4y-e8",
        authDomain: "web-counting.firebaseapp.com",
        projectId: "web-counting",
        storageBucket: "web-counting.firebasestorage.app",
        messagingSenderId: "140536989109",
        appId: "1:140536989109:web:f73719a0522405ab67c5fc",
        measurementId: "G-QV8FJTVMEX"
    };

    // 初始化 Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Firestore 文档引用
    const countersDocRef = db.collection('counters').doc('web-counting');

    // 初始化文档（如果不存在）
    countersDocRef.get().then(doc => {
        if (!doc.exists) {
            countersDocRef.set({
                buttonLike: 0,
                buttonLove: 0,
                buttonStar: 0
            }).catch(error => {
                console.error("Error initializing document:", error);
            });
        }
    }).catch(error => {
        console.error("Error checking document:", error);
    });

    // 实时监听计数数据
    countersDocRef.onSnapshot(doc => {
        if (doc.exists) {
            const counts = doc.data();
            document.getElementById('countLike').textContent = counts.buttonLike || 0;
            document.getElementById('countLove').textContent = counts.buttonLove || 0;
            document.getElementById('countStar').textContent = counts.buttonStar || 0;
        } else {
            console.error("Firebase Error: Document not found!");
        }
    }, error => {
        console.error("Error listening to Firestore:", error);
    });

    // 为按钮绑定点击事件
    function setupIncrement(buttonId, fieldToIncrement) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                countersDocRef.update({
                    [fieldToIncrement]: firebase.firestore.FieldValue.increment(1)
                }).catch(error => {
                    console.error(`Error incrementing ${fieldToIncrement}:`, error);
                });
            });
        } else {
            console.error(`Button with ID ${buttonId} not found!`);
        }
    }

    setupIncrement('buttonLike', 'buttonLike');
    setupIncrement('buttonLove', 'buttonLove');
    setupIncrement('buttonStar', 'buttonStar');
});