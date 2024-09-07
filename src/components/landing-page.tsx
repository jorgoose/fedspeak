import Link from "next/link";
import { MessageSquare, Zap, Database, TrendingUp, Clock } from "lucide-react";
import Transcription from "../components/Transcription";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 sticky top-0 z-40">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Fedspeak</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 p-10">
                  Get instant access to what the Fed is saying.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-2xl/relaxed dark:text-gray-400">
                  Access comprehensive, real-time FOMC data and insights. Make informed decisions fast.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-black">
              See Fedspeak in Action
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-black">Live Data Transcription</h3>
                {/* Client Component for live transcription */}
                <Transcription />
              </div>
              {/* Other components */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
