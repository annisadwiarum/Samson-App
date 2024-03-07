'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEmail } from "../../hooks/useEmail";

export default function Home() {
  const {handleSubmit, state} = useEmail();
  return (
    <>
      <div className="h-screen relative">
        <Image
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="street"
          width={700}
          height={400}
          objectFit="cover"
          quality={100}
          className="h-full w-full blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="flex-col flex gap-12 items-center w-96 bg-opacity-50 bg-black shadow-lg rounded-md px-8 py-12">
            <div className="text-white text-xl font-bold">
              How Was <span className="text-violet-400">Your Day?</span>
            </div>
            <div className="flex-col flex gap-6 w-full">
              <div>
                <Label htmlFor="name">Email</Label>
                <Input id="name" type="text"/>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email"/>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message"/>
              </div>
            </div>
            <Button disabled={state === 'loading'} variant="outline" size="sm" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
