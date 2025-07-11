"use client";
import React, { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthForm from "@/components/auth/authForm";

function Signup() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (
    e: React.FormEvent,
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
  ) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password length should be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create Firestore user document
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: fullName,
        email: user.email,
        phone: "",
        subscriptions: null,
        createdAt: new Date().toISOString(),
      });

      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Signup failed");
      } else {
        setError("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 h-[65vh]">
      <div className="flex flex-col items-center justify-center bg-amber-50 w-full md:w-3/4 py-20">
        <AuthForm
          formSubmitAction={handleSignup}
          error={error}
          loading={loading}
          title="Create an Account"
        />
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log in &#8599;
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;