import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, AlertTriangle, Phone, CheckCircle } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="text-[#F05E23]">Leta</span>Gas LPG FAQs
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty">
            Everything you need to know about LPG safety, usage, and delivery in Kenya
          </p>
          <div className="bg-[#F05E23]/10 p-4 rounded-lg">
            <p className="text-sm text-[#333333] font-medium">
              Powered by LetaGas Energies - Your trusted gas delivery partner
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">1. What is LPG?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                LPG (Liquefied Petroleum Gas) is a clean-burning fuel used for cooking, heating, and more. With LetaGas
                Energies, customers are assured of accessing genuine LPG cylinders from licensed suppliers only.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                2. Is LPG safe to use at home?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes—LPG is safe if handled correctly. LetaGas connects you with verified vendors who supply cylinders
                that meet safety and quality standards set by KEBS and EPRA.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                3. How do I detect an LPG leak?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can smell gas (similar to rotten eggs) or use soapy water around connections to check for bubbles.
                By ordering via LetaGas, you reduce risks of counterfeit or unsafe cylinders, which are common causes of
                leaks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                4. What should I do if I suspect a leak?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Turn off the regulator, ventilate the room, and avoid switching on appliances. Then contact your vendor
                through the LetaGas app for emergency support or replacement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                5. Which cylinder sizes are available in Kenya?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                LetaGas gives you access to a wide range of cylinder sizes (6kg, 13kg, 22.5kg, 50kg), depending on your
                household or business needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                6. How much does LPG cost in Kenya?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Prices vary by supplier and size, but with LetaGas, you can compare vendors and choose the most
                affordable licensed option near you—ensuring value and safety.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                7. Can I refill my LPG cylinder at roadside kiosks?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. It's unsafe and illegal. LetaGas eliminates this risk by connecting you only to fully authorized
                refill stations and vendors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                8. What is the difference between exchange and refill?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <strong>Exchange:</strong> Swap your empty cylinder for a full one.
                <br />
                <strong>Refill:</strong> Fill your own cylinder at an authorized depot.
                <br />
                LetaGas vendors provide both services safely and conveniently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                9. How long does a 6kg LPG cylinder last?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For an average family, it lasts 3–4 weeks. Through LetaGas, you can quickly reorder before your gas runs
                out, ensuring you never get stuck.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                10. How do I connect the regulator safely?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Always lock it properly and check with soapy water. If you're unsure, order through LetaGas and get
                professional support from vendors who can guide or assist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                11. Where should I store my LPG cylinder?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Keep it upright, ventilated, and away from heat. LetaGas vendors also advise customers on safe storage
                during delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                12. Can LPG cylinders explode?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Explosions are rare unless there's a leak plus fire/sparks. LetaGas ensures you receive genuine,
                well-tested cylinders—minimizing these risks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                13. How do I know if my cylinder is genuine?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Through LetaGas, all vendors are fully licensed and supply only KEBS-certified cylinders with proper
                seals, so you don't have to worry about fakes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                14. Can I transport LPG cylinders in my car?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, if upright and well-ventilated. Better still, LetaGas offers doorstep delivery from trusted
                vendors, so you don't have to handle risky transportation yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#333333]">
                15. What should I do if my regulator or hose is faulty?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Stop using it and replace with KEBS-approved parts. LetaGas vendors also stock genuine accessories, so
                you can conveniently order replacements along with your gas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Safety Tips for LPG Handling
            </h2>
            <p className="text-lg text-muted-foreground">Essential guidelines for safe LPG usage at home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-[#F05E23]/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#F05E23]" />
                </div>
                <CardTitle className="text-lg text-[#333333]">Purchase & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Buy from licensed dealers only. Store upright in ventilated areas away from heat sources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-[#FFD700]/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#FFD700]" />
                </div>
                <CardTitle className="text-lg text-[#333333]">During Use</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Check for leaks with soapy water. Use correct regulators and turn off after cooking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-[#F05E23]/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-[#F05E23]" />
                </div>
                <CardTitle className="text-lg text-[#333333]">Kitchen Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Ensure good ventilation. No smoking near gas. Keep children away from cylinders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-[#FFD700]/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-[#FFD700]" />
                </div>
                <CardTitle className="text-lg text-[#333333]">Emergency Response</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  If you suspect a leak: turn off regulator, ventilate area, call emergency services (999/112).
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact LetaGas Energies for personalized support and guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-[#F05E23] font-semibold">📧 contact@letagas.co.ke</div>
            <div className="text-[#F05E23] font-semibold">🌐 www.letagas.co.ke</div>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">P.O. Box 663 – 00621 Village Market</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
