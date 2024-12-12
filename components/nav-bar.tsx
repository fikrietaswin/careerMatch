'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 backdrop-blur-lg shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            CareerMatch
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/swipe">Match</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <NavLink href="/auth/signin">Sign In</NavLink>
            <Button 
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/80 backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="/dashboard">Dashboard</MobileNavLink>
              <MobileNavLink href="/swipe">Match</MobileNavLink>
              <MobileNavLink href="/profile">Profile</MobileNavLink>
              <MobileNavLink href="/auth/signin">Sign In</MobileNavLink>
              <Button 
                className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity"
                asChild
              >
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 block transition-all duration-200"
    >
      {children}
    </Link>
  )
}

