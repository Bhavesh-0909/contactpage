"use client"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Home() {
  const [email, setEmail] = useState<string>("")
  return (
    <main className="dark w-screen min-h-screen overflow-x-hidden bg-black flex flex-col items-center justify-center gap-10">
      <BackgroundBeams/>
      <h1 className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Contact Page</h1>
      <div className="w-3/5 h-3/5 bg-zinc-800 p-10">
        <div className="w-1/3 flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-white relative">Email<span className="text-red-800 absolute -top-2">*</span></label>
          <Input type="email" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      
    </main>
  );
}
