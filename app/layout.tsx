import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CareerMatch',
  description: 'AI-powered job matching platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
      )}>
        {children}
      </body>
    </html>
  )
}

