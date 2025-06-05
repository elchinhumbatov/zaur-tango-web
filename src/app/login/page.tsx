"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/auth/authForm";
import Link from "next/link";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { syncUserData, login } = useAuthStore();
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

  return (
    <div className="flex items-center justify-center p-4 h-[65vh]">
      <div className="flex flex-col items-center justify-center bg-amber-50 w-full md:w-3/4 py-20">
        <AuthForm
          formSubmit={handleLogin}
          error={error}
          loading={loading}
          title="Login"
        />
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up &#8599;
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
