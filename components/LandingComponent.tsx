'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { Users, Calendar, TrendingUp } from "lucide-react"

export function LandingComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Body, Transform Your Life
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  FitTrack: Your personal fitness coach. Customized workouts, nutrition plans, and progress tracking all in one app.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Personalized Plans</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Tailored workout and nutrition plans based on your goals and fitness level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Calendar className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Monitor your progress with detailed stats and visualizations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <TrendingUp className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Get intelligent recommendations to optimize your fitness journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400">
                    FitTrack has completely transformed my fitness routine. The personalized plans and progress tracking keep me motivated!
                  </p>
                  <p className="mt-4 font-semibold">- Sarah J.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400">
                    As a busy professional, FitTrack helps me stay on top of my fitness goals. The AI insights are incredibly helpful.
                  </p>
                  <p className="mt-4 font-semibold">- Mike T.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400">
                    I&apos;ve tried many fitness apps, but FitTrack stands out with its user-friendly interface and comprehensive features.
                  </p>
                  <p className="mt-4 font-semibold">- Emily R.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Fitness Journey Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied users and transform your life with FitTrack.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}