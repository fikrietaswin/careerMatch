'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Heart } from 'lucide-react'
import { NavBar } from '@/components/nav-bar'

const mockJobs = [
  { id: 1, title: 'Frontend Developer', company: 'TechCorp', description: 'Exciting opportunity for a skilled frontend developer...', imageUrl: '/placeholder.svg?height=400&width=300' },
  { id: 2, title: 'Data Scientist', company: 'AI Innovations', description: 'Join our team of data scientists and work on cutting-edge AI projects...', imageUrl: '/placeholder.svg?height=400&width=300' },
  { id: 3, title: 'UX Designer', company: 'DesignHub', description: 'We're looking for a creative UX designer to help shape the future of our products...', imageUrl: '/placeholder.svg?height=400&width=300' },
]

export default function SwipeInterface() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [lastDirection, setLastDirection] = useState('')

  const handleSwipe = (direction: 'left' | 'right') => {
    setLastDirection(direction)
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % mockJobs.length)
  }

  const currentJob = mockJobs[currentJobIndex]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AnimatePresence>
            <motion.div
              key={currentJobIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Card className="w-full bg-white shadow-xl">
                <CardContent className="p-0">
                  <img src={currentJob.imageUrl} alt={currentJob.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{currentJob.title}</h2>
                    <h3 className="text-xl text-gray-600 mb-4">{currentJob.company}</h3>
                    <p className="text-gray-700">{currentJob.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-4">
            <Button onClick={() => handleSwipe('left')} variant="outline" size="icon" className="rounded-full w-16 h-16">
              <X className="h-8 w-8 text-red-500" />
            </Button>
            <Button onClick={() => handleSwipe('right')} variant="outline" size="icon" className="rounded-full w-16 h-16">
              <Heart className="h-8 w-8 text-green-500" />
            </Button>
          </div>
        </div>
      </main>
      {lastDirection && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
          You swiped {lastDirection}!
        </div>
      )}
    </div>
  )
}

