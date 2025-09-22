import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileSearch, 
  Calendar, 
  Download, 
  MapPin,
  Clock,
  TestTube,
  Activity,
  Users
} from "lucide-react";

const Diagnostics = () => {
  const tests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "Blood Test",
      duration: "15 minutes",
      price: "$45.00",
      description: "Comprehensive blood analysis"
    },
    {
      id: 2,
      name: "Lipid Panel",
      category: "Blood Test",
      duration: "10 minutes",
      price: "$32.00",
      description: "Cholesterol and triglyceride levels"
    },
    {
      id: 3,
      name: "Chest X-Ray",
      category: "Imaging",
      duration: "30 minutes",
      price: "$85.00",
      description: "Lung and heart examination"
    },
    {
      id: 4,
      name: "ECG/EKG",
      category: "Cardiac",
      duration: "20 minutes",
      price: "$65.00",
      description: "Heart rhythm analysis"
    }
  ];

  const bookings = [
    {
      id: 1,
      test: "Complete Blood Count",
      date: "March 25, 2024",
      time: "10:00 AM",
      center: "MedLab Downtown",
      status: "Confirmed"
    },
    {
      id: 2,
      test: "Chest X-Ray",
      date: "March 20, 2024",
      time: "2:30 PM",
      center: "City Diagnostic Center",
      status: "Completed"
    }
  ];

  const reports = [
    {
      id: 1,
      test: "Lipid Panel",
      date: "March 15, 2024",
      status: "Available",
      result: "Normal"
    },
    {
      id: 2,
      test: "Blood Sugar",
      date: "March 10, 2024",
      status: "Available",
      result: "Normal"
    },
    {
      id: 3,
      test: "Vitamin D",
      date: "March 5, 2024",
      status: "Available",
      result: "Low"
    }
  ];

  const centers = [
    {
      id: 1,
      name: "MedLab Downtown",
      address: "123 Medical Plaza, Downtown",
      distance: "2.3 miles",
      rating: 4.8,
      availability: "Available Today"
    },
    {
      id: 2,
      name: "City Diagnostic Center",
      address: "456 Health Ave, Central",
      distance: "3.1 miles",
      rating: 4.7,
      availability: "Available Tomorrow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Diagnostic Services</h1>
          <p className="text-muted-foreground">
            Book diagnostic tests, view reports, and track your health metrics.
          </p>
        </div>

        {/* Search & Quick Book */}
        <Card className="mb-8 p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Input 
              placeholder="Search for tests (e.g., Blood test, X-ray, MRI)" 
              className="flex-1"
            />
            <Button className="bg-gradient-medical hover:opacity-90">
              <FileSearch className="h-4 w-4 mr-2" />
              Search Tests
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Quick Book
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Available Tests */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Available Tests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tests.map((test) => (
                  <Card key={test.id} className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass hover:shadow-medical transition-all duration-300 animate-scale-in">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gradient-vitals">
                            <TestTube className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{test.name}</h3>
                            <Badge variant="outline" className="text-xs mt-1">
                              {test.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{test.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{test.duration}</span>
                          </div>
                          <p className="text-lg font-bold text-primary">{test.price}</p>
                        </div>
                        <Button size="sm" className="bg-gradient-medical hover:opacity-90">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Upcoming Appointments</h2>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-vitals">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{booking.test}</h3>
                          <p className="text-sm text-muted-foreground">{booking.center}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                            <span>{booking.date}</span>
                            <span>•</span>
                            <span>{booking.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                          <Button size="sm" variant="outline">
                            Cancel
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
            {/* Test Reports */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Reports</h3>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">{report.test}</p>
                        <p className="text-xs text-muted-foreground">{report.date}</p>
                      </div>
                      <Badge 
                        variant={report.result === "Normal" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {report.result}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="h-3 w-3 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Nearby Centers */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Nearby Centers</h3>
              <div className="space-y-4">
                {centers.map((center) => (
                  <div key={center.id} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm">{center.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          ★ {center.rating}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{center.distance}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{center.address}</p>
                      <p className="text-xs text-success">{center.availability}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Health Packages */}
            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 shadow-vitals">
              <div className="text-center space-y-4">
                <div className="p-3 rounded-lg bg-gradient-medical w-fit mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Health Packages</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive health check-ups at discounted rates
                  </p>
                </div>
                <Button className="w-full bg-gradient-medical hover:opacity-90">
                  View Packages
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;