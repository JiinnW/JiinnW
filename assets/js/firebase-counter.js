import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getFirestore, collection, doc, onSnapshot, setDoc, updateDoc, increment } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', () => {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDPfqHMdUPHPjtksXKRPmYDdhq-6s4y-e8",
        authDomain: "web-counting.firebaseapp.com",
        projectId: "web-counting",
        storageBucket: "web-counting.firebasestorage.app",
        messagingSenderId: "140536989109",
        appId: "1:140536989109:web:f73719a0522405ab67c5fc",
        measurementId: "G-QV8FJTVMEX"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Firestore document reference
    const countersDocRef = doc(collection(db, 'counters'), 'web-counting');

    // Initialize document if it doesn't exist
    onSnapshot(countersDocRef, (docSnapshot) => {
        if (!docSnapshot.exists()) {
            setDoc(countersDocRef, {
                buttonLike: 0,
                buttonLove: 0,
                buttonStar: 0
            }).catch(error => {
                console.error("Error initializing document:", error);
            });
        }
    }, error => {
        console.error("Error checking document:", error);
    });

    // Real-time listener for counts
    onSnapshot(countersDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
            const counts = docSnapshot.data();
            document.getElementById('countLike').textContent = counts.buttonLike || 0;
            document.getElementById('countLove').textContent = counts.buttonLove || 0;
            document.getElementById('countStar').textContent = counts.buttonStar || 0;
        } else {
            console.error("Firebase Error: Document not found!");
        }
    }, error => {
        console.error("Error listening to Firestore:", error);
    });

    // Bind click events to buttons
    function setupIncrement(buttonId, fieldToIncrement) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', async () => {
                try {
                    await updateDoc(countersDocRef, {
                        [fieldToIncrement]: increment(1)
                    });
                } catch (error) {
                    console.error(`Error incrementing ${fieldToIncrement}:`, error);
                }
            });
        } else {
            console.error(`Button with ID ${buttonId} not found!`);
        }
    }

    setupIncrement('buttonLike', 'buttonLike');
    setupIncrement('buttonLove', 'buttonLove');
    setupIncrement('buttonStar', 'buttonStar');
});