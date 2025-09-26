import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"; 
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"  
import Link from "next/link"
import Image from "next/image"
import { Clock, Shield, Truck, Users, Star, Smartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                <span className="text-[#fc7618]">Leta</span>
                Gas Delivery Made <span className="text-primary">Simple</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl text-pretty">
                LetaGas brings reliable gas delivery right to your doorstep. Fast, safe, and professional service when
                you need it most. Experience the convenience of on-demand gas delivery.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="https://i.diawi.com/SyBi6L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/google-play-button.jpg"
                    alt="Get it on Google Play"
                    width={160}
                    height={40}
                    className="rounded-lg shadow-md"
                  />
                </Link>
                <Link
                  href="https://i.diawi.com/SyBi6L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/appstore-button.png"
                    alt="Download on App Store"
                    width={160}
                    height={60}
                    className="rounded-lg shadow-md"
                  />
                </Link>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 lg:gap-8">
                {/* Android Phone Mockup */}
                <div className="relative">
                  <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="relative h-[300px] w-[150px] sm:h-[350px] sm:w-[175px] lg:h-[400px] lg:w-[200px] rounded-[1.5rem] overflow-hidden">
                        <Image
                          src="/images/home-app.jpeg"
                          alt="LetaGas Android App Home Screen"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm font-medium text-foreground">Android App</p>
                    <p className="text-xs text-muted-foreground">Home & Services</p>
                  </div>
                </div>

                {/* iPhone Mockup */}
                <div className="relative">
                  <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="relative h-[300px] w-[150px] sm:h-[350px] sm:w-[175px] lg:h-[400px] lg:w-[200px] rounded-[1.5rem] overflow-hidden">
                        <Image
                          src="/images/order-app.jpeg"
                          alt="LetaGas iPhone App Order Screen"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm font-medium text-foreground">iOS App</p>
                    <p className="text-xs text-muted-foreground">Order & Track</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section - Text Only */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Experience Our Mobile App
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the features that make gas delivery simple and convenient
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Welcome Experience */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mb-2">Welcome Experience</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Fast, safe, and reliable gas delivery at your fingertips with our intuitive mobile interface
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Easy Ordering */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Truck className="h-8 w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mb-2">Easy Ordering</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Express and normal delivery options with transparent pricing and multiple payment methods
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Order Tracking */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mb-2">Order Tracking</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Real-time updates and detailed order information with live delivery tracking
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Quick Setup */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mb-2">Quick Setup</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Simple onboarding process to get you started quickly with verified vendor network
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
{/* App Features Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="relative order-2 lg:order-1">
        <Image
          src="/images/trackgasorder.jpg"
          alt="Track your gas delivery in real-time"
          width={600}
          height={400}
          className="rounded-xl sm:rounded-2xl shadow-lg w-full"
        />
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance text-center lg:text-left">
          Track Your Delivery in Real-Time
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 text-pretty text-center lg:text-left">
          Stay updated with live tracking, estimated delivery times, and direct communication with your delivery
          vendor through our mobile app.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <Link
            href="https://i.diawi.com/SyBi6L"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/google-play-button.jpg"
              alt="Get it on Google Play"
              width={140}
              height={42}
              className="rounded-lg shadow-md object-contain"
            />
          </Link>
          <Link
            href="https://i.diawi.com/SyBi6L"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/appstore-button.png"
              alt="Download on App Store"
              width={140}
              height={42}
              className="rounded-lg shadow-md object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Premium Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Premium Gas Products & Accessories
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quality gas cylinders, regulators, and accessories from trusted brands delivered to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg mb-4 bg-white p-4 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/mpishi-ola-13kg.png"
                  alt="Mpishi OLA 13kg Gas Cylinder"
                  width={200}
                  height={300}
                  className="object-contain max-h-full w-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">13kg Gas Cylinders</h3>
              <p className="text-sm text-muted-foreground">Premium LPG cylinders from trusted brands like OLA Energy</p>
            </div>

            <div className="text-center group">
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg mb-4 bg-white p-4 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/total-regulator.png"
                  alt="Total Gas Regulator"
                  width={200}
                  height={200}
                  className="object-contain max-h-full w-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Gas Regulators</h3>
              <p className="text-sm text-muted-foreground">
                Safety-certified regulators from Total, K-Gas, and Shell Afrigas
              </p>
            </div>

            <div className="text-center group">
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg mb-4 bg-white p-4 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/hashi-6kg-cylinder.png"
                  alt="Hashi 6kg Gas Cylinder"
                  width={200}
                  height={300}
                  className="object-contain max-h-full w-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">6kg Portable Cylinders</h3>
              <p className="text-sm text-muted-foreground">
                Compact cylinders perfect for small households and camping
              </p>
            </div>

            <div className="text-center group">
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg mb-4 bg-white p-4 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/meko-burner.png"
                  alt="Meko Gas Burner"
                  width={200}
                  height={200}
                  className="object-contain max-h-full w-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Gas Burners & Accessories</h3>
              <p className="text-sm text-muted-foreground">Professional burners, grills, and cooking accessories</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-[#fc7618] hover:bg-[#e06a15] text-white">
              <Link href="/marketplace">Shop All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Why Choose LetaGas?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to providing the best gas delivery experience with our reliable network of vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="bg-[#fc7618]/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Fast Delivery</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Quick response times with delivery within 30-60 minutes of your order
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="bg-[#fc7618]/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Safe & Secure</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  All our vendors are certified and follow strict safety protocols for gas handling
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="bg-[#fc7618]/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-[#fc7618]" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Reliable Service</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Professional vendors with proper equipment and insurance for peace of mind
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-8">
            <Image
              src="/images/gasimage.jpeg"
              alt="Various branded gas cylinders available for delivery"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <div className="text-center text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">All Types of Gas Cylinders</h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  LPG, Industrial, and Commercial gas delivery available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                Join Our Vendor Network
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty">
                Become a LetaGas vendor and grow your gas delivery business. Join our trusted network of professional
                gas delivery providers serving customers nationwide.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="w-full sm:w-auto bg-[#fc7618] hover:bg-[#e06a15] text-white">
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/quickdelivery.jpg"
                alt="Professional gas delivery service"
                width={600}
                height={400}
                className="rounded-xl sm:rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fc7618] mb-1 sm:mb-2">500+</div>
              <div className="text-base sm:text-lg text-muted-foreground">Trusted Vendors</div>
            </div>
            <div className="p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fc7618] mb-1 sm:mb-2">10K+</div>
              <div className="text-base sm:text-lg text-muted-foreground">Deliveries Completed</div>
            </div>
            <div className="p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fc7618] mb-1 sm:mb-2">4.9</div>
              <div className="text-base sm:text-lg text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-[#fc7618] text-[#fc7618]" />
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Client Partners Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
        Our Trusted Partners
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        We partner with leading brands to bring you quality gas products and services
      </p>
    </div>

    {/* Logo Carousel */}
    <div className="relative overflow-hidden">
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent z-10" />
      
      {/* Sliding animation container */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of logos */}
        {[
          "total-logo.png",
          "Delagas-logo.png", 
          "Hashi-energy-logo-150x150.png",
          "Hass-Petroleum-logo-150x150.jpg",
          "LAKE OIL.png",
          "NATIONAL OIL.png",
          "Ola-Energy-150x150.jpg",
          "Progas-Logo-150x150.jpg", 
          "Rubis-Energy-150x150.png",
          "Sea-Gas-logo-150x150.png",
          "SHELLVivo-Energy-Logo-150x150.png",
          "Taifa-gas-logo-150x150.jpeg"
        ].map((logo, index) => (
          <div key={index} className="inline-flex items-center justify-center mx-6 sm:mx-8 lg:mx-12">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex items-center justify-center">
              <Image
                src={`/images/${logo}`}
                alt={`Brand ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {[
          "total-logo.png",
          "Delagas-logo.png", 
          "Hashi-energy-logo-150x150.png",
          "Hass-Petroleum-logo-150x150.jpg",
          "LAKE OIL.png",
          "NATIONAL OIL.png",
          "Ola-Energy-150x150.jpg",
          "Progas-Logo-150x150.jpg", 
          "Rubis-Energy-150x150.png",
          "Sea-Gas-logo-150x150.png",
          "SHELLVivo-Energy-Logo-150x150.png",
          "Taifa-gas-logo-150x150.jpeg"
        ].map((logo, index) => (
          <div key={`dup-${index}`} className="inline-flex items-center justify-center mx-6 sm:mx-8 lg:mx-12">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex items-center justify-center">
              <Image
                src={`/images/${logo}`}
                alt={`Brand ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Static grid for mobile */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 md:hidden">
      {[
         "total-logo.png",
          "Delagas-logo.png", 
          "Hashi-energy-logo-150x150.png",
          "Hass-Petroleum-logo-150x150.jpg",
      ].map((logo, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg shadow-md p-3 flex items-center justify-center">
            <Image
              src={`/images/logos/${logo}`}
              alt={`Brand ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </div>
  )
}