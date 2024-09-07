// LandingPage.tsx (Server Component)

import Link from "next/link";
import { MessageSquare, Zap, Database, TrendingUp, Clock, BrainCircuit } from "lucide-react";
import Transcription from "../components/Transcription"; // Client-side component for live transcription
import LineChart from "../components/LineChart"; // Import the LineChart component
import WaitlistForm from "../components/WaitlistForm"; // Import the WaitlistForm component

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 sticky top-0 z-40">
  <Link className="flex items-center justify-center" href="#">
    <MessageSquare className="h-8 w-8 text-primary" />
    <span className="ml-2 text-2xl font-bold text-primary">Fedspeak</span>
  </Link>
  {/* Mobile: Hide navigation links, only show on medium (md) screens and up */}
  <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
    <Link className="text-sm font-medium text-black hover:text-primary transition-colors" href="#features">
      Features
    </Link>
    <Link className="text-sm font-medium text-black hover:text-primary transition-colors" href="#examples">
      Examples
    </Link>
    <Link className="text-sm font-medium text-black hover:text-primary transition-colors" href="#waitlist">
      Join Waitlist
    </Link>
  </nav>
</header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 p-4">
                  Get instant data about what the Fed is saying.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-2xl/relaxed dark:text-gray-400">
                  Access comprehensive, real-time FOMC data and insights. View transcripts and analysis. Make informed decisions fast.
                </p>
                <Link href="#waitlist">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg mt-8">
                    Get Instant Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-black">
              Access data through the dashboard or API
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl dark:bg-gray-700">
                <Database className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">Comprehensive Historical Data</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  20+ years of FOMC data at your fingertips: statements, minutes, and transcripts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl dark:bg-gray-700">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">Rapid Updates</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Get instant sentiment analysis and key insights during press conferences, or when new transcripts are released.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl dark:bg-gray-700">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">AI-Powered Insights</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Leverage both traditional and AI-driven analysis for potential policy changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Section with Robot Icon */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  AI-Powered FOMC Analysis
                </h2>
                <p className="text-black">
                  Leverage advanced AI models for deeper insights:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    <span className="text-black">FinBERT, VADER, ChatGPT, and more</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    <span className="text-black">Up to 74% historical accuracy on rate change classifications</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    <span className="text-black">Sentiment analysis of press conferences as they happen</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <BrainCircuit className="h-48 w-48 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
<section id="examples" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-black">
      See Fedspeak in Action
    </h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* Historical Data Trends */}
      <div className="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700 w-full">
        <h3 className="text-2xl font-bold mb-4 text-black">Historical Data Trends</h3>
        <div className="flex flex-wrap justify-between items-center">
          <span className="text-sm font-semibold text-gray-900">Top Keywords:</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">inflation</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">employment</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">risks</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">labor</span>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <span className="text-sm font-semibold text-gray-900">Keyword Trend: &quot;Inflation&quot;</span>
        </div>
        <LineChart />
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-semibold text-gray-900">Average Frequency:</span>
          <span className="text-sm text-black">12.5 mentions per speech</span>
        </div>
      </div>

      {/* Live Data Transcription */}
      <div className="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700 w-full">
        <h3 className="text-2xl font-bold mb-4 text-black">Live Speech Data Transcription</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-sm font-semibold text-black">FOMC Press Conference</span>
          </div>
          <Transcription />
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-900">Sentiment:</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Neutral</span>
          </div>
        </div>
      </div>

      {/* AI-Driven Insights */}
      <div className="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700 w-full">
        <h3 className="text-2xl font-bold mb-4 text-black">AI-Driven Insights</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-black">Sentiment Analysis</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-black">
                <span>Hawkish</span>
                <span className="font-bold text-green-500">62%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '62%' }}></div>
              </div>
              <div className="flex justify-between items-center text-black">
                <span>Dovish</span>
                <span className="font-bold text-red-500">38%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Key Phrases Detected:</h4>
            <ul className="list-disc list-inside text-sm text-black">
              <li>Inflation expectations</li>
              <li>Labor market conditions</li>
              <li>Economic outlook uncertainty</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Predicted Policy Direction:</h4>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-sm text-black">Likely to maintain current rates</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Waitlist Section */}
        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Sign Up for Early Access
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-700 dark:text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Access critical FOMC data and insights for smarter decisions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <WaitlistForm /> {/* Use the new WaitlistForm component */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-700 dark:text-gray-400">© 2023 Fedspeak. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-black" href="#">
            Terms
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-black" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
