import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default async function startCheckout(priceId: string) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("You must be logged in to checkout");
  }

  const checkoutSessionRef = collection(
    db,
    'stripeCustomers',
    user.uid,
    'checkout_sessions'
  );

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    // success_url: 'https://zaurtango.com', 
    success_url: window.location.origin,
    // cancel_url: 'https://zaurtango.com',
    cancel_url: window.location.origin,
  });

  // Listen for the session URL
  onSnapshot(docRef, (snap) => {
    const data = snap.data();
    if (!data) return;

    if (data.error) {
      alert(`An error occurred: ${data.error.message}`);
    }

    if (data.url) {
      window.location.assign(data.url);
    }
  });
}
