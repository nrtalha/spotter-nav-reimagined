import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-in fade-in duration-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Trusted by 1000+ trucking companies
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in duration-700 delay-200">
            <span className="text-foreground">Trucking </span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Automation
            </span>
            <br />
            <span className="text-foreground">that works for you</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
            Everything you need to optimize your logistics operations, powered by cutting-edge AI.
            From market intelligence to load optimization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in duration-700 delay-600">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
            >
              Unlock the Future of Freight
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-nav-hover px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto animate-in fade-in duration-700 delay-800">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
              {/* Mock dashboard frame */}
              <div className="bg-gradient-glass p-1">
                <div className="bg-card rounded-xl p-6">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Spotter Dashboard</div>
                  </div>

                  {/* Dashboard grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Lens Card */}
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border/20">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-primary">Spotter Lens</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">MARKET INTELLIGENCE</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-xs">Tifton, GA</span>
                          <span className="text-xs text-primary">+17.06%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs">Saginaw, MI</span>
                          <span className="text-xs text-destructive">-0.38%</span>
                        </div>
                      </div>
                    </div>

                    {/* CRM Card */}
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border/20">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-primary">Spotter CRM</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">RECRUITING ENGINE</div>
                      <div className="text-xs">Engagement Visibility</div>
                    </div>

                    {/* Load Score Card */}
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border/20">
                      <div className="text-xs text-muted-foreground mb-2">LOAD SCORE</div>
                      <div className="text-2xl font-bold text-accent mb-2">57%</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Rate</span>
                          <span className="text-primary">Good</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Fuel</span>
                          <span>$3.96/gal</span>
                        </div>
                      </div>
                    </div>

                    {/* TMS Card */}
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border/20">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-primary">Spotter TMS</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">VISIBILITY ENGINE</div>
                      <div className="text-xs">Data Automation</div>
                    </div>

                    {/* Safety Card */}
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border/20">
                      <div className="text-xs text-muted-foreground mb-2">SAFETY AUTOMATION</div>
                      <div className="text-2xl font-bold text-accent mb-1">64</div>
                      <div className="text-xs text-muted-foreground">Grade D</div>
                      <div className="text-xs text-accent mt-1">Moderate</div>
                    </div>

                    {/* Extension Card */}
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border/20">
                      <div className="text-xs text-muted-foreground mb-2">LOAD BOARD AUTOMATION</div>
                      <div className="text-xs mb-2">Browser Extension</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-accent rounded"></div>
                        <div className="w-4 h-4 bg-primary rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;