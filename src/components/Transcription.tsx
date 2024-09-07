"use client"; // Ensures this component is client-side only
import { useEffect, useState } from "react";

const fullTranscript = [
  "Good afternoon. I will begin with an overview of economic conditions.",
  "The U.S. economy has shown resilience in the face of various challenges...",
  "Inflation remains above our long-term goal of 2 percent.",
  "The Committee is committed to achieving a stance of monetary policy that is sufficiently restrictive...",
  "Labor market conditions have remained tight, with the unemployment rate staying low and job gains robust...",
];

const Transcription = () => {
  const [transcript, setTranscript] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
        if (currentIndex === 0) {
            setTranscript(fullTranscript[currentIndex]);
            currentIndex++;
            return;
        }
        else if (currentIndex < fullTranscript.length - 1) {
        setTranscript((prev) => prev + "\n\n" + fullTranscript[currentIndex]);
        currentIndex++;
        } else {
        clearInterval(intervalId);
        }
    }, 3000); // Delay between each line of text (3 seconds)

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="h-64 overflow-y-auto bg-gray-100 p-4 rounded-md">
      <pre className="text-sm text-black whitespace-pre-wrap">{transcript}</pre>
    </div>
  );
};

export default Transcription;
