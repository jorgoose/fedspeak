"use client"; // This enables the client-side behavior

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false); // Track sign-up status

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        setStatusMessage("There was an error, please try again.");
      } else {
        setIsSignedUp(true); // Mark as signed up
        setStatusMessage("You're signed up!");
      }
    } catch (error) {
      setStatusMessage("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
      setEmail(""); // Reset email input
    }
  };

  return (
    <div className="w-full">
      {isSignedUp ? (
        <div className="text-lg font-semibold text-green-600">
          You&apos;re signed up! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
          <Input
            className="flex-1 text-stone-500 min-w-[250px]" // Ensures input has a minimum width
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Join Waitlist"}
          </Button>
          {statusMessage && <p className="text-sm mt-2">{statusMessage}</p>}
        </form>
      )}
    </div>
  );
}
