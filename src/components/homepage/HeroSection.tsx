import NavBar from "./NavBar";
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen bg-center bg-cover bg-no-repeat relative" style={{
            backgroundImage: "linear-gradient(to bottom right,rgba(15,23,42,0.8),rgba(99,102,241,0.3)),url('/images/pexel (1).jpg')"
        }}>

            <NavBar />

            {/* hero section */}

            <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4.5rem)] pt-18">
                <div className="text-center text-white px-6 max-w-4xl">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Sleep Better, <span className="text-fuchsia-500">Live Better</span></h1>

                <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-2xl max-auto">Track your sleep patterns, understand your cycles, and wake up refreshed every morning.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard" className="bg-fuchsia-600 hover:bg-fuchsia-700 py-3 transition-colors cursor-pointer font-semibold text-lg px-8 rounded-full">
                Start Tracking  Free
                </Link>
                <Link href="#about" className="border-2 border-white hover:bg-white hover:text-slate-900 py-3 transition-colors cursor-pointer font-semibold text-lg px-8 rounded-full">
                Learn More
                </Link>
                </div>
               
                </div>
            </div>

             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <div className="border-2 w-6 h-10 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded mt-2">

                        </div>
                    </div>

                </div>

                </div>
        </section>

    )
}
