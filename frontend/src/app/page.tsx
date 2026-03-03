'use client'

import { Button } from "@/components/ui/button";
import Login from "./(auth)/login/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Button variant='default'
        className='bg-zinc-800 text-zinc-900 hover:bg-zinc-950 text-white'
        onClick={() => {
          router.push("/login")
        }}>Login</Button>

      <Button variant='outline'
        className='text-zinc-900 hover:bg-zinc-950 ml-4 hover:text-white'
        onClick={() => {
          router.push("/signUp")
        }}
      >Sign Up</Button>
    </div>
  );
}
