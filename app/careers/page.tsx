"use client";

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #fc7618 5%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(252, 118, 24, 0.1)', color: '#fc7618' }}>
                Now Hiring Delivery Riders
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance" style={{ color: '#20235b' }}>
                Join Our <span style={{ color: '#fc7618' }}>Growing Team</span>
              </h1>
              <p className="text-lg mb-8 text-pretty" style={{ color: '#6b7280' }}>
                We're looking for passionate individuals to join LetaGas. Explore our current openings and start your journey with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 rounded-full" style={{ backgroundColor: '#fc7618', color: '#ffffff' }}>
                  <Link href="#vacancies">
                    View Open Positions
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/quickdelivery.jpg"
                  alt="Delivery rider using mobile app"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance" style={{ color: '#20235b' }}>Current Openings</h2>
            <p className="text-lg max-w-2xl mx-auto text-pretty" style={{ color: '#6b7280' }}>
              We're currently hiring for these positions. Apply now to join our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Delivery Rider Position */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group border-l-4" style={{ borderLeftColor: '#fc7618' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-full group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(252, 118, 24, 0.1)' }}>
                    DR
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(32, 35, 91, 0.1)', color: '#20235b' }}>
                    Full-time/Part-time
                  </span>
                </div>
                <CardTitle style={{ color: '#20235b' }}>Delivery Rider</CardTitle>
                <CardDescription style={{ color: '#6b7280' }}>
                  Join our delivery team and help bring gas to households across Kenya.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm" style={{ color: '#6b7280' }}>
                    Nairobi, Kisumu, Mombasa
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#6b7280' }}>
                    KES 250-400 per delivery
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#6b7280' }}>
                    Flexible hours
                  </div>
                </div>
                
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full rounded-full" 
                      style={{ backgroundColor: '#fc7618', color: '#ffffff' }}
                      onClick={() => handleApplyClick("Delivery Rider")}
                    >
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle style={{ color: '#20235b' }}>Apply for {selectedPosition}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="dialogFirstName" style={{ color: '#20235b' }}>First Name</Label>
                            <Input 
                              id="dialogFirstName" 
                              type="text" 
                              placeholder="Enter your first name"
                              className="rounded-lg"
                              style={{ borderColor: '#e5e7eb' }}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="dialogLastName" style={{ color: '#20235b' }}>Last Name</Label>
                            <Input 
                              id="dialogLastName" 
                              type="text" 
                              placeholder="Enter your last name"
                              className="rounded-lg"
                              style={{ borderColor: '#e5e7eb' }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="dialogEmail" style={{ color: '#20235b' }}>Email Address</Label>
                            <Input 
                              id="dialogEmail" 
                              type="email" 
                              placeholder="Enter your email"
                              className="rounded-lg"
                              style={{ borderColor: '#e5e7eb' }}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="dialogPhone" style={{ color: '#20235b' }}>Phone Number</Label>
                            <Input 
                              id="dialogPhone" 
                              type="tel" 
                              placeholder="Enter your phone number"
                              className="rounded-lg"
                              style={{ borderColor: '#e5e7eb' }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dialogPosition" style={{ color: '#20235b' }}>Position Applying For</Label>
                          <select 
                            id="dialogPosition"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 transition-all"
                            style={{ 
                              borderColor: '#e5e7eb',
                              backgroundColor: '#f8f9fa'
                            }}
                            value={selectedPosition}
                            onChange={(e) => setSelectedPosition(e.target.value)}
                          >
                            <option value="">Select a position</option>
                            <option value="Delivery Rider">Delivery Rider</option>
                            <option value="Customer Support Agent">Customer Support Agent</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dialogMessage" style={{ color: '#20235b' }}>Why are you interested in this position?</Label>
                          <Textarea 
                            id="dialogMessage" 
                            placeholder="Tell us why you'd be a great fit for this role..."
                            className="min-h-[120px] rounded-lg"
                            style={{ borderColor: '#e5e7eb' }}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dialogResume" style={{ color: '#20235b' }}>Upload Resume (Optional)</Label>
                          <Input 
                            id="dialogResume" 
                            type="file" 
                            className="rounded-lg"
                            style={{ borderColor: '#e5e7eb' }}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full text-lg rounded-full font-semibold py-3"
                          style={{ backgroundColor: '#fc7618', color: '#ffffff' }}
                        >
                          Submit Application
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Customer Support Position */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group border-l-4" style={{ borderLeftColor: '#20235b' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-full group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(32, 35, 91, 0.1)' }}>
                    CS
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(252, 118, 24, 0.1)', color: '#fc7618' }}>
                    Full-time
                  </span>
                </div>
                <CardTitle style={{ color: '#20235b' }}>Customer Support Agent</CardTitle>
                <CardDescription style={{ color: '#6b7280' }}>
                  Provide excellent customer service and support to our clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm" style={{ color: '#6b7280' }}>
                    Nairobi (Remote possible)
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#6b7280' }}>
                    Competitive salary
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#6b7280' }}>
                    Monday-Friday, 9AM-5PM
                  </div>
                </div>
                
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full rounded-full" 
                      style={{ backgroundColor: '#20235b', color: '#ffffff' }}
                      onClick={() => handleApplyClick("Customer Support Agent")}
                    >
                      Apply Now
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16" style={{ backgroundColor: '#20235b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#ffffff' }}>Why Work With LetaGas?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 p-3 rounded-full w-fit mx-auto mb-4">
                $
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>Competitive Pay</h4>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Earn what you deserve with our fair compensation structure</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-3 rounded-full w-fit mx-auto mb-4">
                ⏱
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>Flexible Hours</h4>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Balance work and life with our flexible scheduling options</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-3 rounded-full w-fit mx-auto mb-4">
                🛡
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>Support & Training</h4>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Comprehensive training and ongoing support for all team members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}