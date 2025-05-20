"use client";
import React, { useState } from "react";

interface AuthFormProps {
  formSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string
  ) => void;
  error: string | null;
  loading?: boolean;
  title: string;
}

export default function AuthForm({
  formSubmit,
  error,
  loading,
  title,
}: AuthFormProps) {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    formSubmit(e, email, password, confirmPassword, fullName);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 w-full space-y-4 max-w-sm">
      <h1 className="text-xl font-semibold border-b">{title}</h1>
      {title !== "Login" ? (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setfullName(e.target.value)}
          required
        />
      ) : null}

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {title !== "Login" ? (
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          autoComplete="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      ) : null}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-black text-white p-2 rounded hover:opacity-80"
      >
        {loading ? "Loading..." : title === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}
