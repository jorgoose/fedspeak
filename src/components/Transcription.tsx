"use client"; // Ensures this component is client-side only
import { useEffect, useState } from "react";

const fullTranscript = [
  "Good afternoon. I will begin with an overview of economic conditions.",
  "The U.S. economy has shown resilience in the face of various challenges, including global supply chain disruptions and the ongoing effects of the pandemic.",
  "Recent indicators of spending and production have softened but are showing signs of gradual recovery.",
  "Inflation remains above our long-term goal of 2 percent, primarily driven by price increases in energy, food, and housing sectors.",
  "The Committee is committed to achieving a stance of monetary policy that is sufficiently restrictive to return inflation to 2 percent over time.",
  "We are closely monitoring incoming data and the evolving outlook for the economy, particularly inflationary pressures and labor market dynamics.",
  "Labor market conditions have remained tight, with the unemployment rate staying low and job gains continuing to be robust across various sectors.",
  "While wage growth has moderated somewhat, it remains above levels consistent with our inflation objective.",
  "The Federal Reserve has raised the federal funds rate by a total of 500 basis points since we began the tightening cycle in March of last year.",
  "We expect that additional rate hikes may be necessary to achieve the desired level of policy restriction.",
  "Our future policy actions will depend on the totality of incoming data and their implications for the economic outlook.",
  "It is important to emphasize that we are committed to returning inflation to our 2 percent goal and maintaining price stability.",
  "We will continue to reduce the size of our balance sheet, in line with our plans announced last year, as part of our broader strategy to normalize monetary policy.",
  "While growth has slowed, the economy remains resilient, supported by a strong labor market and rising consumer demand.",
  "We are particularly focused on risks posed by inflationary expectations becoming entrenched in the economy.",
  "Financial conditions have tightened significantly over the past year, reflecting both our policy actions and global financial developments.",
  "In the international context, global economic growth remains subdued, with several economies facing recessionary pressures and ongoing geopolitical risks.",
  "The Committee continues to be vigilant regarding potential risks to financial stability, including developments in the housing market and the availability of credit.",
  "As always, we are prepared to adjust the stance of monetary policy as appropriate to support the achievement of our goals of maximum employment and price stability.",
  "Thank you. I will now take questions from the press."
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
