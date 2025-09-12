import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bike, Clock, DollarSign, MapPin, Shield, Users, CheckCircle, Zap, Calendar, Smartphone, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Now Hiring Delivery Riders
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Earn on Your <span className="text-primary">Own Terms</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Join Kenya's fastest-growing gas delivery network. Set your own schedule, earn competitive pay, and be part of a team that's transforming how households access energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 rounded-full">
                  <Link href="/register">
                    <Bike className="h-5 w-5 mr-2" />
                    Start Earning Today
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent rounded-full">
                  Learn More
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">500+</p>
                    <p className="text-sm text-muted-foreground">Riders</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">20+</p>
                    <p className="text-sm text-muted-foreground">Cities</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7</p>
                    <p className="text-sm text-muted-foreground">Support</p>
                  </div>
                </div>
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
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary/10 p-1 rounded-full mr-2">
                      <Bike className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-medium text-sm">Earn up to KES 3,000 daily</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Flexible hours, consistent deliveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Riders Choose <span className="text-primary">LetaGas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We've built a platform that supports our riders with the best earning potential and working conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center border-0 bg-gradient-to-b from-background to-muted/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Earn More</CardTitle>
                <CardDescription>
                  Competitive rates, tips, and performance bonuses that increase your earning potential
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-3 inline-flex items-center">
                  <span className="text-foreground font-semibold">KES 250-400</span>
                  <span className="text-muted-foreground text-sm ml-2">per delivery</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-b from-background to-muted/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Flexible Schedule</CardTitle>
                <CardDescription>
                  Work when you want - choose your own hours and balance work with personal commitments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-3">
                  <Calendar className="h-5 w-5 text-primary mx-auto mb-1" />
                  <span className="text-foreground text-sm">Set your own availability</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-b from-background to-muted/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Safety & Support</CardTitle>
                <CardDescription>
                  Comprehensive insurance coverage, safety training, and 24/7 rider support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-foreground text-sm">Emergency support always available</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-b from-background to-muted/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Local Deliveries</CardTitle>
                <CardDescription>Work in your local area - no long commutes or unfamiliar routes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-foreground text-sm">Zone-based assignments</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-b from-background to-muted/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with other riders, share tips, and grow together</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-foreground text-sm">Monthly rider meetups</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-b from-background to-muted/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bike className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Use Your Bike</CardTitle>
                <CardDescription>No vehicle rentals - use your own motorbike and maximize your earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-foreground text-sm">No commission on first month</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Getting Started is Easy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join our team of professional delivery riders in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-5 p-5 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Check Requirements</h3>
                    <p className="text-muted-foreground">Make sure you meet our basic rider criteria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 p-5 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Submit Application</h3>
                    <p className="text-muted-foreground">Complete our simple online application form</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 p-5 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Onboarding</h3>
                    <p className="text-muted-foreground">Attend a brief orientation session</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 p-5 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Start Delivering</h3>
                    <p className="text-muted-foreground">Download the app and begin accepting deliveries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Rider Requirements</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Valid driver's license and motorbike license</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Own motorbike (125cc or higher recommended)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Valid insurance for commercial use</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">
                    <span className="flex items-center">
                      <Smartphone className="h-4 w-4 mr-2 text-muted-foreground" />
                      Smartphone with GPS capability
                    </span>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">18+ years old with clean driving record</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">
                    <span className="flex items-center">
                      <Scale className="h-4 w-4 mr-2 text-muted-foreground" />
                      Ability to lift up to 25kg safely
                    </span>
                  </span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm text-muted-foreground flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">i</span>
                  Don't meet all requirements? Contact us anyway - we may have other opportunities available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Hear From Our Riders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See what current LetaGas delivery partners have to say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">JK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">James Kariuki</h4>
                    <p className="text-sm text-muted-foreground">Nairobi Rider</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been riding with LetaGas for 8 months now. The flexibility lets me take care of my family while earning a good income. The support team is always helpful when I need assistance."
                </p>
                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">WM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Wangari Mwangi</h4>
                    <p className="text-sm text-muted-foreground">Kisumu Rider</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The best decision I made was joining LetaGas. I earn enough to support my education while working part-time. The app is easy to use and I always have deliveries waiting."
                </p>
                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">AO</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Abdullahi Omar</h4>
                    <p className="text-sm text-muted-foreground">Mombasa Rider</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The safety training and insurance gave me peace of mind. I feel supported on the road, and the earnings are consistent. I'm able to save for my future while doing meaningful work."
                </p>
                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Join Kenya's most trusted gas delivery network. Apply today and begin earning on your own schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 rounded-full">
              <Link href="/register">
                <Bike className="h-5 w-5 mr-2" />
                Apply Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-6">Typically approved within 24-48 hours</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
