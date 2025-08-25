// utils/subscription.ts
import { StripeSubscription } from "@/app/types";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

export default function getUserStripeSubscriptions(
  callback: (subscriptions: Array<StripeSubscription> | null) => void
) {
  const user = auth.currentUser;

  if (!user) {
    console.warn("User not logged in");
    callback(null);
    return;
  }

  const subRef = collection(db, "stripeCustomers", user.uid, "subscriptions");
  const q = query(subRef, where("status", "in", ["trialing", "active"]));

  return onSnapshot(q, async (snapshot) => {
    if (!snapshot.empty) {
      const subscriptions: Array<StripeSubscription> = [];
      snapshot.forEach((doc) => {
        subscriptions.push({ id: doc.id, ...doc.data() });
      });
      // console.log(subscriptions)

      // get product details

      // const prodId = doc.data().product.id
      // const productDoc = await getDoc(testDoc(db, "stripeProducts", prodId));
      // console.log(productDoc.data())
      // console.log(docs.data());
      callback(subscriptions);
    } else {
      console.log("No active or trialing subscriptions.");
      callback(null);
    }
  });
}
