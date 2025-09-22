import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Search, 
  ShoppingCart, 
  Truck,
  Clock,
  Shield,
  FileText,
  Plus
} from "lucide-react";

const Pharmacy = () => {
  const medications = [
    {
      id: 1,
      name: "Aspirin",
      strength: "100mg",
      type: "Tablet",
      price: "$12.99",
      inStock: true,
      prescription: false
    },
    {
      id: 2,
      name: "Lisinopril",
      strength: "10mg",
      type: "Tablet",
      price: "$24.50",
      inStock: true,
      prescription: true
    },
    {
      id: 3,
      name: "Vitamin D3",
      strength: "1000 IU",
      type: "Softgel",
      price: "$8.99",
      inStock: true,
      prescription: false
    }
  ];

  const prescriptions = [
    {
      id: 1,
      medication: "Metformin 500mg",
      doctor: "Dr. Sarah Johnson",
      issued: "March 15, 2024",
      refills: 2,
      status: "Active"
    },
    {
      id: 2,
      medication: "Atorvastatin 20mg",
      doctor: "Dr. Michael Chen",
      issued: "March 10, 2024",
      refills: 1,
      status: "Active"
    }
  ];

  const orders = [
    {
      id: "ORD-001",
      items: 3,
      total: "$45.48",
      status: "Delivered",
      date: "March 18, 2024"
    },
    {
      id: "ORD-002",
      items: 1,
      total: "$24.50",
      status: "In Transit",
      date: "March 20, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pharmacy Services</h1>
          <p className="text-muted-foreground">
            Order medications, manage prescriptions, and track deliveries all in one place.
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search medications, vitamins, or health products..." 
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-medical hover:opacity-90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Medications */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Available Medications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {medications.map((med) => (
                  <Card key={med.id} className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass hover:shadow-medical transition-all duration-300 animate-scale-in">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-vitals">
                          <Pill className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{med.name}</h3>
                          <p className="text-sm text-muted-foreground">{med.strength} - {med.type}</p>
                        </div>
                      </div>
                      {med.prescription && (
                        <Badge variant="outline" className="text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Rx
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-primary">{med.price}</p>
                        <p className="text-sm text-success">In Stock</p>
                      </div>
                      <Button size="sm" className="bg-gradient-medical hover:opacity-90">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order History */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-vitals">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Order {order.id}</h3>
                          <p className="text-sm text-muted-foreground">{order.items} items • {order.total}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                          {order.status}
                        </Badge>
                        <div className="mt-2">
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Prescriptions */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Active Prescriptions</h3>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              <div className="space-y-4">
                {prescriptions.map((prescription) => (
                  <div key={prescription.id} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">{prescription.medication}</p>
                        <p className="text-xs text-muted-foreground">by {prescription.doctor}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {prescription.refills} refills
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Issued {prescription.issued}</span>
                    </div>
                    <Button size="sm" className="w-full mt-3 bg-gradient-medical hover:opacity-90">
                      Reorder
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upload Prescription */}
            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 shadow-vitals">
              <div className="text-center space-y-4">
                <div className="p-3 rounded-lg bg-gradient-medical w-fit mx-auto">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Upload Prescription</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your doctor's prescription to order medications
                  </p>
                </div>
                <Button className="w-full bg-gradient-medical hover:opacity-90">
                  Choose File
                </Button>
              </div>
            </Card>

            {/* Delivery Info */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Delivery Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-success" />
                  <span>Free delivery on orders over $50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Same-day delivery available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span>Secure packaging & handling</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;