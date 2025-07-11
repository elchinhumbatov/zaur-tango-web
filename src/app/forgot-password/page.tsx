"use client";
import { db } from "@/lib/firebase";
import { addToast } from "@heroui/react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const auth = getAuth();
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      setError("This email does not exist.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login`
      })
      addToast({
        title: "Email sent successfully",
        color: 'success',
      })
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Reset failed");
      } else {
        setError("Reset failed");
      }
    }
  };

  return (
    <div className="flex items-center justify-center p-4 h-[65vh]">
      <div className="flex flex-col items-center justify-center bg-amber-50 w-full md:w-3/4 py-20">
        <form onSubmit={handleSubmit} className="p-6 w-full space-y-4 max-w-sm">
          <h1 className="text-xl font-semibold border-b">Reset Password</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:opacity-80"
          >
            Reset Password
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}
