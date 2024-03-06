import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
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
          <div className="flex-col flex gap-12 items-center w-96 bg-opacity-50 bg-black shadow-lg rounded-md px-8 py-12">
            <div className="text-white text-md font-bold">
              How Was Your Day?
            </div>
            <div className="flex-col flex gap-6 w-full">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea/>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
