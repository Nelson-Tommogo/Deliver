"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  UserPlus,
  Shield,
  Clock,
  DollarSign,
  Bike,
  ArrowRight,
  CheckCircle,
  FileText,
  MapPin,
  Phone,
  Mail,
  User,
  Briefcase,
  Calendar,
  Car,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [registrationType, setRegistrationType] = useState<"vendor" | "user">("vendor")
  const [vendorType, setVendorType] = useState<"express" | "normal">("express")
  const [currentStep, setCurrentStep] = useState(1)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!agreedToTerms || !agreedToPrivacy) {
      toast({
        title: "Agreement Required",
        description: "Please agree to both the Terms and Conditions and Privacy Policy to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Registration Submitted!",
      description: "We'll review your application and contact you within 2-3 business days.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
    setAgreedToTerms(false)
    setAgreedToPrivacy(false)
    setCurrentStep(1)
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-[#fc7618]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-[#fc7618]/10 px-4 py-2 text-sm font-medium text-[#fc7618] mb-6">
              <UserPlus className="h-4 w-4 mr-2" />
              Join Our Network
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#20235b] mb-6 text-balance">
              {registrationType === "vendor" ? (
                <>
                  Become a <span className="text-[#fc7618]">Certified Vendor</span>
                </>
              ) : (
                <>
                  Join as a <span className="text-[#fc7618]">Customer</span>
                </>
              )}
            </h1>
            <p className="text-lg text-[#6b7280] mb-8 max-w-3xl mx-auto text-pretty">
              {registrationType === "vendor"
                ? "Join Kenya's fastest-growing gas delivery network. Expand your customer base with our platform and grow your business."
                : "Register as a customer to enjoy fast, reliable gas delivery services right to your doorstep."}
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-[#f8f9fa]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step ? "bg-[#fc7618] border-[#fc7618] text-white" : "border-[#6b7280]/30 text-[#6b7280]"}`}
                >
                  {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-0.5 mx-2 ${currentStep > step ? "bg-[#fc7618]" : "bg-[#6b7280]/30"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4 text-xs text-center text-[#6b7280]">
            <div className={currentStep === 1 ? "text-[#fc7618] font-medium" : ""}>Type</div>
            <div className={currentStep === 2 ? "text-[#fc7618] font-medium" : ""}>Details</div>
            <div className={currentStep === 3 ? "text-[#fc7618] font-medium" : ""}>Documents</div>
            <div className={currentStep === 4 ? "text-[#fc7618] font-medium" : ""}>Review</div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#fc7618] to-[#f57f20] text-white py-8">
              <CardTitle className="text-2xl text-center">Application Form</CardTitle>
              <CardDescription className="text-center text-white/90">
                {currentStep === 1 && "Choose your registration type"}
                {currentStep === 2 && "Provide your personal information"}
                {currentStep === 3 && "Share your professional details"}
                {currentStep === 4 && "Review and submit your application"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Registration Type */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#20235b] mb-2">I want to join as a:</h3>
                      <p className="text-[#6b7280]">Select your preferred role in our network</p>
                    </div>

                    <RadioGroup
                      value={registrationType}
                      onValueChange={(value) => setRegistrationType(value as "vendor" | "user")}
                      className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                      <div
                        className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all ${registrationType === "vendor" ? "border-[#fc7618] bg-[#fc7618]/5" : "border-[#e5e7eb] hover:border-[#fc7618]/50"}`}
                      >
                        <RadioGroupItem value="vendor" id="vendor" className="sr-only" />
                        <Label htmlFor="vendor" className="flex flex-col items-center text-center cursor-pointer">
                          <div className="bg-[#fc7618]/10 p-4 rounded-full mb-4">
                            <UserPlus className="h-8 w-8 text-[#fc7618]" />
                          </div>
                          <span className="font-semibold text-lg mb-2">Gas Vendor</span>
                          <p className="text-[#6b7280] text-sm">
                            Supply and deliver gas to customers through our platform
                          </p>
                        </Label>
                      </div>

                      <div
                        className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all ${registrationType === "user" ? "border-[#fc7618] bg-[#fc7618]/5" : "border-[#e5e7eb] hover:border-[#fc7618]/50"}`}
                      >
                        <RadioGroupItem value="user" id="user" className="sr-only" />
                        <Label htmlFor="user" className="flex flex-col items-center text-center cursor-pointer">
                          <div className="bg-[#fc7618]/10 p-4 rounded-full mb-4">
                            <User className="h-8 w-8 text-[#fc7618]" />
                          </div>
                          <span className="font-semibold text-lg mb-2">Customer</span>
                          <p className="text-[#6b7280] text-sm">
                            Register to order gas delivery services to your location
                          </p>
                        </Label>
                      </div>
                    </RadioGroup>

                    {registrationType === "vendor" && (
                      <div className="space-y-4">
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-[#20235b] mb-2">Vendor Type</h4>
                          <p className="text-[#6b7280] text-sm">Choose your delivery capability</p>
                        </div>

                        <RadioGroup
                          value={vendorType}
                          onValueChange={(value) => setVendorType(value as "express" | "normal")}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          <div
                            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${vendorType === "express" ? "border-[#fc7618] bg-[#fc7618]/5" : "border-[#e5e7eb] hover:border-[#fc7618]/50"}`}
                          >
                            <RadioGroupItem value="express" id="express" className="sr-only" />
                            <Label htmlFor="express" className="flex items-center cursor-pointer">
                              <div className="bg-[#fc7618]/10 p-2 rounded-full mr-3">
                                <Bike className="h-5 w-5 text-[#fc7618]" />
                              </div>
                              <div>
                                <span className="font-medium block">Express Vendor</span>
                                <span className="text-[#6b7280] text-sm">With motorbike for delivery</span>
                              </div>
                            </Label>
                          </div>

                          <div
                            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${vendorType === "normal" ? "border-[#fc7618] bg-[#fc7618]/5" : "border-[#e5e7eb] hover:border-[#fc7618]/50"}`}
                          >
                            <RadioGroupItem value="normal" id="normal" className="sr-only" />
                            <Label htmlFor="normal" className="flex items-center cursor-pointer">
                              <div className="bg-[#fc7618]/10 p-2 rounded-full mr-3">
                                <User className="h-5 w-5 text-[#fc7618]" />
                              </div>
                              <div>
                                <span className="font-medium block">Normal Vendor</span>
                                <span className="text-[#6b7280] text-sm">In-person/walking delivery</span>
                              </div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}

                    <div className="bg-[#f8f9fa] p-5 rounded-xl">
                      <div className="flex">
                        <div className="bg-[#fc7618]/10 p-2 rounded-full h-fit mr-4">
                          <Shield className="h-5 w-5 text-[#fc7618]" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">What to expect:</h4>
                          <ul className="text-sm text-[#6b7280] space-y-1">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-[#fc7618] mr-2" />
                              Quick approval process (2-3 business days)
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-[#fc7618] mr-2" />
                              Comprehensive training and support
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-[#fc7618] mr-2" />
                              Competitive earnings and flexible schedule
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={nextStep} className="rounded-full px-8 bg-[#fc7618] hover:bg-[#e06a15] text-white">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#20235b] mb-2">Personal Information</h3>
                      <p className="text-[#6b7280]">Tell us about yourself</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center text-sm font-medium">
                          <User className="h-4 w-4 mr-2 text-[#6b7280]" />
                          First Name *
                        </Label>
                        <Input id="firstName" name="firstName" required className="rounded-lg h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center text-sm font-medium">
                          <User className="h-4 w-4 mr-2 text-[#6b7280]" />
                          Last Name *
                        </Label>
                        <Input id="lastName" name="lastName" required className="rounded-lg h-12" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center text-sm font-medium">
                          <Mail className="h-4 w-4 mr-2 text-[#6b7280]" />
                          Email Address *
                        </Label>
                        <Input id="email" name="email" type="email" required className="rounded-lg h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center text-sm font-medium">
                          <Phone className="h-4 w-4 mr-2 text-[#6b7280]" />
                          Phone Number *
                        </Label>
                        <Input id="phone" name="phone" type="tel" required className="rounded-lg h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center text-sm font-medium">
                        <MapPin className="h-4 w-4 mr-2 text-[#6b7280]" />
                        Full Address *
                      </Label>
                      <Textarea id="address" name="address" rows={3} required className="rounded-lg resize-none" />
                    </div>

                    <div className="flex justify-between">
                      <Button onClick={prevStep} variant="outline" className="rounded-full bg-transparent">
                        Back
                      </Button>
                      <Button onClick={nextStep} className="rounded-full px-8 bg-[#fc7618] hover:bg-[#e06a15] text-white">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Professional Information */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#20235b] mb-2">
                        {registrationType === "vendor" ? "Business Information" : "Professional Details"}
                      </h3>
                      <p className="text-[#6b7280]">
                        {registrationType === "vendor"
                          ? "Tell us about your business"
                          : "Share your delivery experience"}
                      </p>
                    </div>

                    {registrationType === "vendor" && (
                      <div className="space-y-2">
                        <Label htmlFor="businessName" className="flex items-center text-sm font-medium">
                          <Briefcase className="h-4 w-4 mr-2 text-[#6b7280]" />
                          Business Name
                        </Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="Leave blank if individual"
                          className="rounded-lg h-12"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="flex items-center text-sm font-medium">
                          <Calendar className="h-4 w-4 mr-2 text-[#6b7280]" />
                          Years of Experience *
                        </Label>
                        <Select name="experience" required>
                          <SelectTrigger className="rounded-lg h-12">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serviceArea" className="flex items-center text-sm font-medium">
                          <MapPin className="h-4 w-4 mr-2 text-[#6b7280]" />
                          Service Area *
                        </Label>
                        <Input
                          id="serviceArea"
                          name="serviceArea"
                          placeholder="City, State or ZIP codes"
                          required
                          className="rounded-lg h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vehicleInfo" className="flex items-center text-sm font-medium">
                        <Car className="h-4 w-4 mr-2 text-[#6b7280]" />
                        {registrationType === "vendor" ? "Vehicle Information *" : "Motorbike Information *"}
                      </Label>
                      <Textarea
                        id="vehicleInfo"
                        name="vehicleInfo"
                        rows={3}
                        placeholder={
                          registrationType === "vendor"
                            ? "Describe your delivery vehicle (make, model, year, capacity)"
                            : "Describe your motorbike (make, model, year, engine capacity)"
                        }
                        required
                        className="rounded-lg resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="driverLicense" className="flex items-center text-sm font-medium">
                        <FileText className="h-4 w-4 mr-2 text-[#6b7280]" />
                        Driver's License Number *
                      </Label>
                      <Input id="driverLicense" name="driverLicense" required className="rounded-lg h-12" />
                    </div>

                    <div className="flex justify-between">
                      <Button onClick={prevStep} variant="outline" className="rounded-full bg-transparent">
                        Back
                      </Button>
                      <Button onClick={nextStep} className="rounded-full px-8 bg-[#fc7618] hover:bg-[#e06a15] text-white">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review and Submit */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#20235b] mb-2">Review Your Application</h3>
                      <p className="text-[#6b7280]">Please review your information before submitting</p>
                    </div>

                    <div className="bg-[#f8f9fa] p-6 rounded-xl">
                      <h4 className="font-medium mb-4 text-[#20235b]">Application Summary</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-[#6b7280]">Registration Type</p>
                          <p className="font-medium">
                            {registrationType === "vendor"
                              ? `Gas Vendor (${vendorType === "express" ? "Express - With Motorbike" : "Normal - Walking/In-person"})`
                              : "Customer"}
                          </p>
                        </div>
                        <div>
                          <p className="text-[#6b7280]">Service Area</p>
                          <p className="font-medium">Nairobi, Kenya</p>
                        </div>
                        <div>
                          <p className="text-[#6b7280]">Experience Level</p>
                          <p className="font-medium">2-5 years</p>
                        </div>
                        <div>
                          <p className="text-[#6b7280]">Vehicle Type</p>
                          <p className="font-medium">Motorbike - 150cc</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 p-6 bg-[#f8f9fa] rounded-xl border">
                      <h3 className="text-lg font-semibold text-[#20235b]">Legal Agreements</h3>

                      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                          className="mt-1 h-5 w-5"
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer flex-1">
                          I agree to the{" "}
                          <span className="text-[#fc7618] hover:underline cursor-pointer font-medium">
                            Terms and Conditions
                          </span>
                          . I understand the service requirements, payment terms, and operational guidelines.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <Checkbox
                          id="privacy"
                          checked={agreedToPrivacy}
                          onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                          className="mt-1 h-5 w-5"
                        />
                        <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer flex-1">
                          I agree to the{" "}
                          <span className="text-[#fc7618] hover:underline cursor-pointer font-medium">
                            Privacy Policy
                          </span>
                          . I consent to the collection and processing of my personal data.
                        </Label>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button onClick={prevStep} variant="outline" className="rounded-full bg-transparent">
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="rounded-full px-8 bg-[#fc7618] hover:bg-[#e06a15] text-white"
                        disabled={isSubmitting || !agreedToTerms || !agreedToPrivacy}
                      >
                        {isSubmitting ? (
                          "Submitting Application..."
                        ) : (
                          <>
                            {registrationType === "vendor" ? (
                              <UserPlus className="h-4 w-4 mr-2" />
                            ) : (
                              <User className="h-4 w-4 mr-2" />
                            )}
                            Submit Application
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#f8f9fa]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#20235b] mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Join hundreds of successful partners who are growing their income with LetaGas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-[#fc7618]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Earnings</h3>
              <p className="text-[#6b7280]">
                Earn competitive rates with bonuses for excellent service and customer ratings
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#fc7618]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Schedule</h3>
              <p className="text-[#6b7280]">
                Work on your own schedule with the freedom to choose your delivery hours
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#fc7618]/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#fc7618]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Full Support</h3>
              <p className="text-[#6b7280]">
                Complete training, insurance coverage, and 24/7 support for all partners
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}