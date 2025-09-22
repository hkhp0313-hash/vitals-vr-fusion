import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Activity,
  BarChart3,
  Zap,
  Target,
  Plus
} from "lucide-react";
import HealthChart from "@/components/HealthChart";

const MLInsights = () => {
  // Mock data for ML analysis
  const riskPredictionData = [
    { time: "Week 1", value: 15 },
    { time: "Week 2", value: 18 },
    { time: "Week 3", value: 12 },
    { time: "Week 4", value: 8 },
    { time: "Week 5", value: 5 },
    { time: "Week 6", value: 3 },
    { time: "Week 7", value: 2 }
  ];

  const healthTrendData = [
    { time: "Jan", value: 75 },
    { time: "Feb", value: 78 },
    { time: "Mar", value: 82 },
    { time: "Apr", value: 85 },
    { time: "May", value: 88 },
    { time: "Jun", value: 92 },
    { time: "Jul", value: 95 }
  ];

  const mlModels = [
    {
      name: "Cardiovascular Risk",
      type: "Random Forest",
      accuracy: "94.2%",
      lastUpdated: "2 hours ago",
      status: "Active"
    },
    {
      name: "Diabetes Prediction",
      type: "Neural Network",
      accuracy: "91.8%",
      lastUpdated: "4 hours ago",
      status: "Active"
    },
    {
      name: "Anomaly Detection",
      type: "LSTM",
      accuracy: "96.5%",
      lastUpdated: "1 hour ago",
      status: "Active"
    }
  ];

  const insights = [
    {
      title: "Heart Rate Variability",
      prediction: "Excellent cardiovascular health",
      confidence: 95,
      trend: "improving",
      risk: "low"
    },
    {
      title: "Sleep Pattern Analysis",
      prediction: "Potential sleep disorder detected",
      confidence: 78,
      trend: "declining",
      risk: "medium"
    },
    {
      title: "Blood Pressure Trend",
      prediction: "Stable within normal range",
      confidence: 92,
      trend: "stable",
      risk: "low"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-success border-success/20 bg-success/5";
      case "medium": return "text-warning border-warning/20 bg-warning/5";
      case "high": return "text-critical border-critical/20 bg-critical/5";
      default: return "text-muted-foreground border-border";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving": return <TrendingUp className="h-4 w-4 text-success" />;
      case "declining": return <TrendingUp className="h-4 w-4 text-critical rotate-180" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ML Health Insights</h1>
          <p className="text-muted-foreground">
            AI-powered analysis of your health data with predictive insights and personalized recommendations.
          </p>
        </div>

        {/* AI Processing Status */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 shadow-medical animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-medical">
                <Brain className="h-6 w-6 text-white animate-pulse-gentle" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">AI Analysis in Progress</h3>
                <p className="text-muted-foreground">Processing your latest vitals data with ML models</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">Real-time</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* ML Insights Cards */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Predictive Health Insights</h2>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <Card key={index} className={`p-6 bg-gradient-card backdrop-blur-sm border shadow-glass hover:shadow-medical transition-all duration-300 animate-scale-in ${getRiskColor(insight.risk)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
                          {getTrendIcon(insight.trend)}
                        </div>
                        <p className="text-muted-foreground mb-3">{insight.prediction}</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Target className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Confidence: {insight.confidence}%</span>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {insight.risk} Risk
                          </Badge>
                        </div>
                      </div>
                      <div className="w-16 h-16 relative">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-muted/20"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${insight.confidence * 1.76} 175.9`}
                            className="text-primary"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{insight.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <HealthChart
                title="Health Risk Prediction"
                data={riskPredictionData}
                color="hsl(var(--critical))"
                unit="% risk"
              />
              <HealthChart
                title="Overall Health Score"
                data={healthTrendData}
                color="hsl(var(--success))"
                unit="score"
              />
            </div>

            {/* Manual Input */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Manual Vitals Input</h3>
              <p className="text-muted-foreground mb-6">
                Enter your vitals manually to get immediate AI analysis and insights.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Heart Rate</label>
                  <Input placeholder="72 bpm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Blood Pressure</label>
                  <Input placeholder="120/80" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Temperature</label>
                  <Input placeholder="98.6°F" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">SpO₂</label>
                  <Input placeholder="98%" />
                </div>
              </div>
              <Button className="bg-gradient-medical hover:opacity-90">
                <Zap className="h-4 w-4 mr-2" />
                Analyze with AI
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* ML Model Status */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Active ML Models</h3>
              <div className="space-y-4">
                {mlModels.map((model, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">{model.name}</p>
                        <p className="text-xs text-muted-foreground">{model.type}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {model.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Accuracy: {model.accuracy}</span>
                      <span>{model.lastUpdated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 shadow-vitals">
              <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Data Points Analyzed</span>
                  <span className="font-bold text-foreground">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Predictions Made</span>
                  <span className="font-bold text-foreground">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Accuracy Rate</span>
                  <span className="font-bold text-success">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Risk Level</span>
                  <Badge variant="outline" className="text-success">Low</Badge>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">AI Recommendations</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                  <p className="text-sm font-medium text-success">✓ Maintain current exercise routine</p>
                </div>
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <p className="text-sm font-medium text-warning">⚠ Consider stress management techniques</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">ℹ Schedule next checkup in 3 months</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" />
                View All Recommendations
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLInsights;