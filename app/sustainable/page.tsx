"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SustainabilityPage() {
  const sustainabilitySteps = [
    {
      title: "Lower Carbon Emissions",
      description: "LPG burns cleaner than coal, diesel, and firewood, emitting up to 50% less CO₂ than coal and 20% less CO₂ than heating oil."
    },
    {
      title: "Reduce Deforestation",
      description: "Transitioning from firewood and charcoal to LPG helps reduce deforestation and protect essential forest ecosystems."
    },
    {
      title: "Maximize Energy Efficiency",
      description: "LPG converts 90% of its energy into usable heat, meaning lower fuel consumption and reduced environmental impact."
    },
    {
      title: "Cut Air Pollution",
      description: "LPG combustion produces minimal air pollutants, leading to cleaner indoor and outdoor air quality."
    },
    {
      title: "Safe & Reliable",
      description: "Versatile energy source for cooking, heating, and manufacturing with safe installation and reliable supply."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
            Sustainable Energy Solutions
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Letagas envisions a zero-emission LPG supply chain, reducing waste and promoting sustainability 
            through clean, efficient energy solutions.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            <Link href="#sustainability">
              Learn More
            </Link>
          </Button>
        </div>
      </section>

      {/* Sustainability Steps */}
      <section id="sustainability" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Path to Sustainability
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover how LPG contributes to a cleaner environment and sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainabilitySteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <span className="text-green-600 font-bold text-lg">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg text-slate-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Choose LPG?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the key advantages of switching to clean LPG energy
            </p>
          </div>

          <div className="bg-white/60 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-2 border-green-100 bg-green-50/50 hover:border-green-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">Clean Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Significantly reduces carbon emissions compared to traditional fossil fuels
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-blue-100 bg-blue-50/50 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Cost Effective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Higher efficiency means lower fuel consumption and reduced operational costs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-teal-100 bg-teal-50/50 hover:border-teal-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-800">Eco-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Helps preserve natural resources and protect biodiversity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join the Clean Energy Movement
          </h2>
          <p className="text-slate-300 mb-6">
            Make the switch to sustainable LPG energy today.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/marketplace">
              Get Started
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}