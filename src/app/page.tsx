'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Zap, Rocket, Github } from 'lucide-react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [likes, setLikes] = useState(42)
  const [liked, setLiked] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">React Starter</span>
          </div>
          <Badge variant="secondary" className="hidden sm:flex">
            <Zap className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Next.js 16 + React + TypeScript
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-emerald-700 bg-clip-text text-transparent">
            Welcome to your React app
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            A simple, interactive starter scaffolded and running in seconds.
            Click around — the counter, like button, and live clock below are all fully wired up.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={() => setCount((c) => c + 1)}>
              Clicked {count} {count === 1 ? 'time' : 'times'}
            </Button>
            <Button
              size="lg"
              variant={liked ? 'default' : 'outline'}
              onClick={() => {
                setLiked(!liked)
                setLikes((l) => (liked ? l - 1 : l + 1))
              }}
            >
              <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
              {likes}
            </Button>
          </div>
        </section>

        {/* Feature cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <CardTitle>Fast Refresh</CardTitle>
              <CardDescription>Edits show up instantly as you code.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Powered by Next.js&apos; dev server with React Fast Refresh — no full reloads needed.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-2">
                <Rocket className="w-5 h-5 text-teal-600" />
              </div>
              <CardTitle>Production-Ready</CardTitle>
              <CardDescription>Built on a modern, typed stack.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                TypeScript, Tailwind CSS 4, and shadcn/ui come preconfigured so you can ship faster.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mb-2">
                <Github className="w-5 h-5 text-sky-700" />
              </div>
              <CardTitle>Easy to Extend</CardTitle>
              <CardDescription>Add routes, APIs, and databases on demand.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Start simple, scale up — Prisma, NextAuth, and TanStack Query are already wired in.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Live clock demo */}
        <section className="max-w-md mx-auto mt-12">
          <Card className="bg-slate-900 text-white border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Live Clock</CardTitle>
              <CardDescription className="text-slate-400">
                Updates every second via React state.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="font-mono text-3xl tabular-nums tracking-tight">
                {time.toLocaleTimeString()}
              </div>
              <p className="text-sm text-slate-400 mt-2">
                {time.toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/70 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-500">
          Built with React + Next.js · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
