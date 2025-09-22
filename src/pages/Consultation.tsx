import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  MessageCircle, 
  Calendar, 
  Clock,
  Star,
  User,
  Stethoscope,
  Phone
} from "lucide-react";

const Consultation = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.9,
      experience: "15 years",
      available: true,
      nextSlot: "2:30 PM Today"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      rating: 4.8,
      experience: "12 years",
      available: true,
      nextSlot: "4:00 PM Today"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      rating: 4.9,
      experience: "10 years",
      available: false,
      nextSlot: "9:00 AM Tomorrow"
    }
  ];

  const consultationHistory = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      type: "Video Call",
      diagnosis: "Routine Checkup",
      status: "Completed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      date: "March 10, 2024",
      type: "Chat",
      diagnosis: "Flu Symptoms",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Consultation</h1>
          <p className="text-muted-foreground">
            Connect with certified healthcare professionals for immediate medical assistance.
          </p>
        </div>

        {/* AI Chatbot Card */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 shadow-medical animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-medical">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">AI Health Assistant</h3>
                <p className="text-muted-foreground">Get instant answers to your health questions</p>
              </div>
            </div>
            <Button className="bg-gradient-medical hover:opacity-90">
              Chat with AI
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Doctors */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Available Doctors</h2>
              <div className="flex space-x-4 mb-4">
                <Input placeholder="Search doctors..." className="flex-1" />
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass hover:shadow-medical transition-all duration-300 animate-scale-in">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-vitals rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-warning fill-current" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                          <Badge variant="outline">{doctor.experience}</Badge>
                          <Badge variant={doctor.available ? "default" : "secondary"}>
                            {doctor.available ? "Available" : "Busy"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="text-sm text-muted-foreground">Next slot:</p>
                      <p className="font-medium">{doctor.nextSlot}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Video className="h-4 w-4 mr-1" />
                          Video
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-gradient-medical hover:opacity-90">
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Emergency Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Doctor
                </Button>
              </div>
            </Card>

            {/* Consultation History */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Consultations</h3>
              <div className="space-y-4">
                {consultationHistory.map((consultation) => (
                  <div key={consultation.id} className="pb-4 border-b border-border/50 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{consultation.doctor}</p>
                      <Badge variant="outline" className="text-xs">
                        {consultation.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{consultation.diagnosis}</p>
                    <div className="flex items-center space-x-2 mt-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{consultation.date}</span>
                      <span>•</span>
                      <span>{consultation.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Health Summary */}
            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 shadow-vitals">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Health ID</h3>
              <div className="space-y-3">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-2xl font-mono font-bold text-primary">SV-2024-789</p>
                  <p className="text-sm text-muted-foreground">Secure Patient ID</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Share this ID with doctors for secure access to your health records during consultations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;