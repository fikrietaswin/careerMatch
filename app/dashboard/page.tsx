import { NavBar } from '@/components/nav-bar'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Briefcase, MessageSquare, Shield, Zap, Users, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Your CareerMatch Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            icon={<Briefcase className="w-6 h-6" />}
            title="Job Matching"
            description="You have 15 new job matches!"
            linkHref="/swipe"
            linkText="Start Swiping"
          />
          <DashboardCard
            icon={<Shield className="w-6 h-6" />}
            title="Skill Badges"
            description="You've earned 3 new skill badges this week."
            linkHref="/profile"
            linkText="View Badges"
          />
          <DashboardCard
            icon={<Zap className="w-6 h-6" />}
            title="Career Insights"
            description="Discover trending skills in your field."
            linkHref="/insights"
            linkText="Explore Insights"
          />
          <DashboardCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Messages"
            description="You have 2 unread messages from potential employers."
            linkHref="/messages"
            linkText="Open Inbox"
          />
          <DashboardCard
            icon={<Users className="w-6 h-6" />}
            title="Network"
            description="Expand your professional network."
            linkHref="/network"
            linkText="Grow Network"
          />
          <DashboardCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Profile Strength"
            description="Your profile is 80% complete. Improve it now!"
            linkHref="/profile"
            linkText="Boost Profile"
          />
        </div>
      </main>
    </div>
  )
}

function DashboardCard({ 
  icon, 
  title, 
  description, 
  linkHref, 
  linkText 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}) {
  return (
    <Card className="group overflow-hidden glass-card hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={linkHref}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
        >
          {linkText}
          <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  )
}

