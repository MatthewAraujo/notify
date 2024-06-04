"use client"
import Image from "next/image";
export default function Home() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/api/v1/auth/github";
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <button onClick={handleLogin}>
        Login with Github
      </button>
    </main>
  );
}
