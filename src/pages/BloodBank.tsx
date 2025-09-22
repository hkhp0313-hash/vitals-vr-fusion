import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  MapPin, 
  Phone, 
  Clock,
  AlertTriangle,
  Heart,
  Search,
  Plus,
  UserPlus
} from "lucide-react";

const BloodBank = () => {
  const bloodBanks = [
    {
      id: 1,
      name: "Central Blood Bank",
      address: "123 Healthcare Ave, Downtown",
      phone: "(555) 123-4567",
      distance: "1.2 miles",
      hours: "24/7",
      inventory: {
        "A+": 45, "A-": 12, "B+": 38, "B-": 8,
        "AB+": 15, "AB-": 5, "O+": 62, "O-": 18
      }
    },
    {
      id: 2,
      name: "Regional Medical Center",
      address: "456 Medical Plaza, North",
      phone: "(555) 987-6543",
      distance: "2.8 miles",
      hours: "6 AM - 10 PM",
      inventory: {
        "A+": 32, "A-": 8, "B+": 25, "B-": 6,
        "AB+": 12, "AB-": 3, "O+": 48, "O-": 14
      }
    }
  ];

  const emergencyRequests = [
    {
      id: 1,
      bloodType: "O-",
      units: 4,
      urgency: "Critical",
      hospital: "Emergency Hospital",
      location: "Downtown",
      timeLeft: "2 hours"
    },
    {
      id: 2,
      bloodType: "A+",
      units: 2,
      urgency: "Urgent",
      hospital: "City Medical Center",
      location: "North District",
      timeLeft: "6 hours"
    }
  ];

  const donationHistory = [
    {
      id: 1,
      date: "March 15, 2024",
      location: "Central Blood Bank",
      units: 1,
      bloodType: "O+",
      status: "Completed"
    },
    {
      id: 2,
      date: "January 20, 2024",
      location: "Regional Medical Center",
      units: 1,
      bloodType: "O+",
      status: "Completed"
    }
  ];

  const getInventoryStatus = (count: number) => {
    if (count < 10) return { status: "Critical", color: "text-critical" };
    if (count < 25) return { status: "Low", color: "text-warning" };
    return { status: "Good", color: "text-success" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Blood Bank System</h1>
          <p className="text-muted-foreground">
            Find blood banks, check inventory, register as a donor, and respond to emergency requests.
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-critical/10 to-warning/10 border-critical/20 animate-fade-in">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="h-6 w-6 text-critical animate-pulse-gentle" />
            <div className="flex-1">
              <h3 className="font-semibold text-critical mb-1">Emergency Blood Request</h3>
              <p className="text-sm text-muted-foreground">
                O- blood type urgently needed at Emergency Hospital. 4 units required within 2 hours.
              </p>
            </div>
            <Button variant="outline" className="border-critical text-critical hover:bg-critical hover:text-white">
              Respond
            </Button>
          </div>
        </Card>

        {/* Search */}
        <Card className="mb-8 p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search blood banks by location or name..." 
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-medical hover:opacity-90">
              <MapPin className="h-4 w-4 mr-2" />
              Find Nearby
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Blood Bank Locations */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Blood Bank Locations</h2>
              <div className="space-y-6">
                {bloodBanks.map((bank) => (
                  <Card key={bank.id} className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass hover:shadow-medical transition-all duration-300 animate-scale-in">
                    <div className="space-y-6">
                      {/* Bank Info */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-gradient-vitals">
                            <Droplets className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{bank.name}</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{bank.address}</span>
                                <span>•</span>
                                <span>{bank.distance}</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Phone className="h-4 w-4" />
                                  <span>{bank.phone}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4" />
                                  <span>{bank.hours}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Directions
                          </Button>
                          <Button size="sm" className="bg-gradient-medical hover:opacity-90">
                            Contact
                          </Button>
                        </div>
                      </div>

                      {/* Blood Inventory */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Blood Type Availability</h4>
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                          {Object.entries(bank.inventory).map(([type, count]) => {
                            const { status, color } = getInventoryStatus(count);
                            return (
                              <div key={type} className="text-center p-3 rounded-lg bg-background/50 border border-border/30">
                                <p className="font-bold text-lg text-primary">{type}</p>
                                <p className="text-sm font-medium">{count}</p>
                                <p className={`text-xs ${color}`}>{status}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Requests */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Emergency Blood Requests</h2>
              <div className="space-y-4">
                {emergencyRequests.map((request) => (
                  <Card key={request.id} className="p-6 bg-gradient-to-r from-critical/5 to-warning/5 border border-critical/20 shadow-glass">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-critical/10 border border-critical/20">
                          <AlertTriangle className="h-5 w-5 text-critical" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="font-semibold text-foreground">
                              {request.bloodType} Blood Required
                            </h3>
                            <Badge variant={request.urgency === "Critical" ? "destructive" : "secondary"}>
                              {request.urgency}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.units} units needed at {request.hospital}, {request.location}
                          </p>
                          <p className="text-sm text-critical font-medium">
                            Time remaining: {request.timeLeft}
                          </p>
                        </div>
                      </div>
                      <Button className="bg-critical hover:bg-critical/90 text-white">
                        Donate Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-gradient-medical hover:opacity-90">
                  <Heart className="h-4 w-4 mr-2" />
                  Schedule Donation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Register as Donor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Request Blood
                </Button>
              </div>
            </Card>

            {/* Donor Profile */}
            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 shadow-vitals">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Donor Profile</h3>
              <div className="space-y-3">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-2xl font-bold text-primary">O+</p>
                  <p className="text-sm text-muted-foreground">Blood Type</p>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Donations:</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next Eligible:</span>
                  <span className="font-medium">May 15, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lives Saved:</span>
                  <span className="font-medium text-success">36</span>
                </div>
              </div>
            </Card>

            {/* Donation History */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Donations</h3>
              <div className="space-y-4">
                {donationHistory.map((donation) => (
                  <div key={donation.id} className="pb-4 border-b border-border/50 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{donation.bloodType}</p>
                      <Badge variant="outline" className="text-xs">
                        {donation.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{donation.location}</p>
                    <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{donation.date}</span>
                      <span>•</span>
                      <span>{donation.units} unit(s)</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;