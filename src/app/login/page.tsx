"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/auth/authForm";
import Link from "next/link";
import { Button } from "@heroui/react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import GoogleLogoIcon from "@/components/GoogleLogoIcon";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { syncUserData, login, loginWithGoogle } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (
    e: React.FormEvent,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      await syncUserData()

    // const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    //   const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    //   console.log(source, " data: ", doc.data());
    // });
      // console.log(user)
      router.push("/profile");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Login failed");
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginWithGoogle();
      // Create Firestore user document
      await setDoc(doc(db, "users", response.uid), {
        uid: response.uid,
        fullName: response.displayName,
        email: response.email,
        phone: "",
        createdAt: new Date().toISOString(),
      });

      await syncUserData()
      router.push("/profile");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Login failed");
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center p-4 h-[65vh]">
      <div className="flex flex-col items-center justify-center bg-amber-50 w-full md:w-3/4 py-20">
        <AuthForm
          formSubmitAction={handleLogin}
          error={error}
          loading={loading}
          title="Login"
        />
        <p>Or sign in with: </p>
        <Button onPress={handleGoogleLogin} className="my-2 p-2 rounded-none" isIconOnly variant="bordered"><GoogleLogoIcon /></Button>
        <p className="text-sm text-center">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="underline">
            Sign up &#8599;
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
