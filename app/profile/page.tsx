'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavBar } from '@/components/nav-bar'

const mockSkills = [
  { id: 1, name: 'JavaScript', verified: true },
  { id: 2, name: 'React', verified: true },
  { id: 3, name: 'Node.js', verified: false },
  { id: 4, name: 'Python', verified: true },
  { id: 5, name: 'Machine Learning', verified: false },
]

export default function Profile() {
  const [skills, setSkills] = useState(mockSkills)
  const [newSkill, setNewSkill] = useState('')
  const [bio, setBio] = useState("I'm a passionate developer looking for exciting opportunities!")

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, { id: skills.length + 1, name: newSkill, verified: false }])
      setNewSkill('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Your Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-1"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill) => (
                  <Badge key={skill.id} variant={skill.verified ? "default" : "outline"}>
                    {skill.name} {skill.verified && '✓'}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a new skill"
                />
                <Button onClick={addSkill}>Add</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Job Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="jobType">Preferred Job Type</Label>
              <Input id="jobType" placeholder="e.g., Full-time, Remote" className="mb-4" />
              <Label htmlFor="location">Preferred Location</Label>
              <Input id="location" placeholder="e.g., New York, London" className="mb-4" />
              <Label htmlFor="salary">Expected Salary Range</Label>
              <Input id="salary" placeholder="e.g., $80,000 - $120,000" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

