// utils/createPortalLink.ts
import { auth, functions } from "@/lib/firebase";
import { httpsCallable } from "firebase/functions";

export default async function createStripePortalLink() {
  const user = auth.currentUser;

  if (!user) {
    console.warn("User not logged in");
    return;
  }
  const functionRef = httpsCallable(
    functions,
    "ext-firestore-stripe-payments-createPortalLink"
  );

  try {
    const { data }: any = await functionRef({
      customerId: user.uid,
      returnUrl: window.location.href,
      // configuration: "bpc_..." // optional: only if you’ve set one up in Stripe
    });

    if (data?.url) {
      window.location.assign(data.url);
    } else {
      throw new Error("Portal link not returned");
    }
  } catch (error: any) {
    console.error("Failed to open Stripe Customer Portal:", error.message);
    alert("There was a problem opening your billing portal.");
  }
}
