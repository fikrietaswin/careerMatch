import { NavBar } from '@/components/nav-bar'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Find Your Perfect Career Match
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
              Merging AI, blockchain, and swipe-based matching to revolutionize job seeking and recruitment.
            </p>
            <div className="space-x-4 animate-fade-in-up">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity group"
                asChild
              >
                <Link href="/dashboard">
                  Get Started 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="hover:bg-gray-100/80 transition-colors"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="AI-Powered Matching"
              description="Our advanced AI algorithms ensure perfect job matches based on your skills and preferences."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="Blockchain Verified"
              description="Your skills and certifications are verified and secured on the blockchain."
            />
            <FeatureCard 
              icon={<Briefcase className="w-6 h-6" />}
              title="Swipe to Match"
              description="Find your dream job with our intuitive swipe-based interface."
            />
          </div>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-lg border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2023 CareerMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-lg border hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

