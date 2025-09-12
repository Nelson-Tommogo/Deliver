"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, Star, Filter, Search, CreditCard, Truck } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  description: string
  inStock: boolean
  brand: string
}

interface CartItem extends Product {
  quantity: number
}

const products: Product[] = [
  {
    id: "1",
    name: "13kg LPG Gas Cylinder",
    price: 2800,
    originalPrice: 3200,
    image: "/13kg-gas-cylinder-red.jpg",
    category: "Gas Cylinders",
    rating: 4.8,
    reviews: 124,
    description: "High-quality 13kg LPG gas cylinder perfect for household cooking needs.",
    inStock: true,
    brand: "Total Gas",
  },
  {
    id: "2",
    name: "6kg LPG Gas Cylinder",
    price: 1500,
    image: "/6kg-gas-cylinder-blue.jpg",
    category: "Gas Cylinders",
    rating: 4.7,
    reviews: 89,
    description: "Compact 6kg LPG cylinder ideal for small households and camping.",
    inStock: true,
    brand: "K-Gas",
  },
  {
    id: "3",
    name: "Gas Regulator - Standard",
    price: 800,
    originalPrice: 1000,
    image: "/gas-regulator-silver.jpg",
    category: "Accessories",
    rating: 4.6,
    reviews: 67,
    description: "Standard gas regulator with safety features and durable construction.",
    inStock: true,
    brand: "ProGas",
  },
  {
    id: "4",
    name: "Gas Hose - 2 Meters",
    price: 350,
    image: "/gas-hose-black.jpg",
    category: "Accessories",
    rating: 4.5,
    reviews: 45,
    description: "High-quality 2-meter gas hose with secure fittings.",
    inStock: true,
    brand: "Universal",
  },
  {
    id: "5",
    name: "22.5kg Commercial Cylinder",
    price: 4200,
    image: "/22kg-gas-cylinder-commercial.jpg",
    category: "Gas Cylinders",
    rating: 4.9,
    reviews: 156,
    description: "Large capacity cylinder perfect for restaurants and commercial use.",
    inStock: true,
    brand: "Total Gas",
  },
  {
    id: "6",
    name: "Gas Leak Detector",
    price: 1200,
    image: "/gas-leak-detector-device.jpg",
    category: "Safety Equipment",
    rating: 4.7,
    reviews: 78,
    description: "Electronic gas leak detector for enhanced safety in your home.",
    inStock: false,
    brand: "SafeGas",
  },
  {
    id: "7",
    name: "3kg Portable Gas Cylinder",
    price: 900,
    image: "/small-portable-gas-cylinder.jpg",
    category: "Gas Cylinders",
    rating: 4.6,
    reviews: 92,
    description: "Ultra-portable 3kg cylinder perfect for outdoor activities and small spaces.",
    inStock: true,
    brand: "ProGas",
  },
  {
    id: "8",
    name: "Gas Burner - Single Ring",
    price: 1800,
    originalPrice: 2200,
    image: "/single-ring-gas-burner-stove.jpg",
    category: "Appliances",
    rating: 4.5,
    reviews: 67,
    description: "Efficient single ring gas burner with automatic ignition.",
    inStock: true,
    brand: "K-Gas",
  },
  {
    id: "9",
    name: "Gas Cylinder Trolley",
    price: 2500,
    image: "/gas-cylinder-transport-trolley.jpg",
    category: "Accessories",
    rating: 4.8,
    reviews: 45,
    description: "Heavy-duty trolley for safe transportation of gas cylinders.",
    inStock: true,
    brand: "Universal",
  },
  {
    id: "10",
    name: "50kg Industrial Cylinder",
    price: 8500,
    image: "/large-industrial-gas-cylinder.jpg",
    category: "Gas Cylinders",
    rating: 4.9,
    reviews: 234,
    description: "Heavy-duty 50kg cylinder for industrial and commercial applications.",
    inStock: true,
    brand: "Total Gas",
  },
  {
    id: "11",
    name: "Gas Pressure Gauge",
    price: 650,
    image: "/gas-pressure-gauge-meter.jpg",
    category: "Safety Equipment",
    rating: 4.4,
    reviews: 56,
    description: "Accurate pressure gauge for monitoring gas levels.",
    inStock: true,
    brand: "SafeGas",
  },
  {
    id: "12",
    name: "Gas Cooker - 4 Burner",
    price: 12500,
    originalPrice: 15000,
    image: "/4-burner-gas-cooker-stove.jpg",
    category: "Appliances",
    rating: 4.7,
    reviews: 189,
    description: "Professional 4-burner gas cooker with oven and grill.",
    inStock: true,
    brand: "ProGas",
  },
]

export default function MarketplacePage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showCheckout, setShowCheckout] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              <span className="text-[#F05E23]">Leta</span>Gas Marketplace
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Shop for brand new gas cylinders and accessories with fast delivery to your doorstep
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Products ({filteredProducts.length})</h2>
            <Button variant="outline" onClick={() => setShowCheckout(true)} className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      Save KSh {product.originalPrice - product.price}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {product.brand}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-2">{product.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          KSh {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Button onClick={() => addToCart(product)} disabled={!product.inStock} size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Checkout
                <Button variant="ghost" size="sm" onClick={() => setShowCheckout(false)}>
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cart Items */}
              <div>
                <h3 className="font-semibold mb-4">Your Items</h3>
                {cart.length === 0 ? (
                  <p className="text-muted-foreground">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">KSh {item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="font-medium">KSh {(item.price * item.quantity).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <>
                  <Separator />

                  {/* Delivery Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Delivery Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Delivery Address</Label>
                      <Textarea id="address" placeholder="Enter your complete delivery address" />
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Payment Method
                    </h3>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mpesa">M-Pesa</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* M-Pesa Payment Details */}
                    {paymentMethod === "mpesa" && (
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-medium text-green-600">M-Pesa Payment Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="mpesaPhone">M-Pesa Phone Number</Label>
                            <Input id="mpesaPhone" placeholder="254712345678" />
                          </div>
                          <div>
                            <Label htmlFor="mpesaName">Account Name</Label>
                            <Input id="mpesaName" placeholder="Enter account holder name" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="mpesaAmount">Amount</Label>
                            <Input
                              id="mpesaAmount"
                              value={`KSh ${(getTotalPrice() + 200).toLocaleString()}`}
                              readOnly
                              className="bg-muted"
                            />
                          </div>
                          <div>
                            <Label htmlFor="mpesaEmail">Email Address</Label>
                            <Input id="mpesaEmail" type="email" placeholder="your@email.com" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          You will receive an M-Pesa prompt on your phone to complete the payment.
                        </p>
                      </div>
                    )}

                    {/* Bank Transfer Details */}
                    {paymentMethod === "bank" && (
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-medium text-blue-600">Bank Transfer Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="bankName">Bank Name</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your bank" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="kcb">KCB Bank</SelectItem>
                                <SelectItem value="equity">Equity Bank</SelectItem>
                                <SelectItem value="coop">Co-operative Bank</SelectItem>
                                <SelectItem value="absa">Absa Bank</SelectItem>
                                <SelectItem value="standard">Standard Chartered</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="accountNumber">Account Number</Label>
                            <Input id="accountNumber" placeholder="Enter your account number" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="accountName">Account Holder Name</Label>
                            <Input id="accountName" placeholder="Enter account holder name" />
                          </div>
                          <div>
                            <Label htmlFor="bankEmail">Email Address</Label>
                            <Input id="bankEmail" type="email" placeholder="your@email.com" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="transferAmount">Transfer Amount</Label>
                            <Input
                              id="transferAmount"
                              value={`KSh ${(getTotalPrice() + 200).toLocaleString()}`}
                              readOnly
                              className="bg-muted"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            <Input id="phoneNumber" placeholder="254712345678" />
                          </div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-800 mb-2">Bank Transfer Instructions:</p>
                          <p className="text-sm text-blue-700">
                            Transfer to: LetaGas Energies Ltd
                            <br />
                            Account: 1234567890
                            <br />
                            Bank: KCB Bank
                            <br />
                            Reference: Your Order Number
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Card Payment Details */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-medium text-purple-600">Card Payment Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="sm:col-span-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input id="cardName" placeholder="Enter name on card" />
                          </div>
                          <div>
                            <Label htmlFor="cardEmail">Email Address</Label>
                            <Input id="cardEmail" type="email" placeholder="your@email.com" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="billingAddress">Billing Address</Label>
                          <Textarea id="billingAddress" placeholder="Enter your billing address" />
                        </div>
                      </div>
                    )}

                    {/* Cash on Delivery Details */}
                    {paymentMethod === "cod" && (
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-medium text-orange-600">Cash on Delivery</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="codName">Full Name</Label>
                            <Input id="codName" placeholder="Enter your full name" />
                          </div>
                          <div>
                            <Label htmlFor="codPhone">Phone Number</Label>
                            <Input id="codPhone" placeholder="254712345678" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="codEmail">Email Address (Optional)</Label>
                          <Input id="codEmail" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-700">
                            <strong>Note:</strong> Please have the exact amount ready: KSh{" "}
                            {(getTotalPrice() + 200).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Order Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>KSh {getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span>KSh 200</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-primary">KSh {(getTotalPrice() + 200).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Place Order - KSh {(getTotalPrice() + 200).toLocaleString()}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
