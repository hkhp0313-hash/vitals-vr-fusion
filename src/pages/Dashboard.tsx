import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VitalsCard from "@/components/VitalsCard";
import StatsCard from "@/components/StatsCard";
import HealthChart from "@/components/HealthChart";
import Medical3DScene from "@/components/Medical3DScene";
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Droplets,
  AlertTriangle,
  Calendar,
  FileText,
  Phone
} from "lucide-react";

const Dashboard = () => {
  // Mock data for charts
  const heartRateData = [
    { time: "00:00", value: 72 },
    { time: "04:00", value: 68 },
    { time: "08:00", value: 75 },
    { time: "12:00", value: 82 },
    { time: "16:00", value: 78 },
    { time: "20:00", value: 74 },
    { time: "24:00", value: 70 }
  ];

  const bloodPressureData = [
    { time: "00:00", value: 120 },
    { time: "04:00", value: 115 },
    { time: "08:00", value: 125 },
    { time: "12:00", value: 130 },
    { time: "16:00", value: 128 },
    { time: "20:00", value: 122 },
    { time: "24:00", value: 118 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Sarah
          </h1>
          <p className="text-muted-foreground">
            Your health is looking great today. Here's your latest vitals overview.
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 p-4 bg-gradient-to-r from-critical/10 to-warning/10 border-critical/20 animate-fade-in">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-critical" />
            <div>
              <h3 className="font-semibold text-critical">Emergency Contact Ready</h3>
              <p className="text-sm text-muted-foreground">
                SOS feature is active. Press and hold the emergency button for 3 seconds to alert contacts.
              </p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Phone className="h-4 w-4 mr-2" />
              Emergency
            </Button>
          </div>
        </Card>

        {/* 3D Medical Visualization */}
        <Card className="mb-8 p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-foreground">Live Vitals Visualization</h2>
            <p className="text-muted-foreground">Real-time 3D representation of your heart rhythm</p>
          </div>
          <Medical3DScene />
        </Card>

        {/* Vitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <VitalsCard
            title="Heart Rate"
            value="72"
            unit="bpm"
            icon={Heart}
            status="normal"
            trend="stable"
          />
          <VitalsCard
            title="Blood Pressure"
            value="120/80"
            unit="mmHg"
            icon={Activity}
            status="normal"
            trend="down"
          />
          <VitalsCard
            title="Body Temperature"
            value="98.6"
            unit="°F"
            icon={Thermometer}
            status="normal"
            trend="stable"
          />
          <VitalsCard
            title="Oxygen Saturation"
            value="98"
            unit="%"
            icon={Droplets}
            status="normal"
            trend="up"
          />
        </div>

        {/* Health Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Checkups"
            value="24"
            description="This year"
            icon={Calendar}
            trend="up"
            trendValue="+12%"
          />
          <StatsCard
            title="Health Records"
            value="156"
            description="Documents stored"
            icon={FileText}
            trend="up"
            trendValue="+8"
          />
          <StatsCard
            title="Risk Score"
            value="Low"
            description="Health assessment"
            icon={AlertTriangle}
            trend="down"
            trendValue="-15%"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <HealthChart
            title="Heart Rate Trend"
            data={heartRateData}
            color="hsl(var(--critical))"
            unit="bpm"
          />
          <HealthChart
            title="Blood Pressure (Systolic)"
            data={bloodPressureData}
            color="hsl(var(--primary))"
            unit="mmHg"
          />
        </div>

        {/* AI Insights */}
        <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20 shadow-vitals animate-scale-in">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-gradient-medical">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                AI Health Insights
              </h3>
              <p className="text-muted-foreground mb-4">
                Based on your recent vitals and health patterns, here are personalized recommendations:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Your heart rate variability is excellent - keep up your current exercise routine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span>Consider increasing water intake - hydration levels could improve</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Sleep quality has improved 15% this week</span>
                </li>
              </ul>
              <Button className="mt-4 bg-gradient-medical hover:opacity-90">
                View Detailed Analysis
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;