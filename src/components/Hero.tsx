import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-animation absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="floating-animation absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-animation absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Innovating the Future</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Devora</span>
            <br />
            <span className="text-foreground">Building Tomorrow's</span>
            <br />
            <span className="gradient-text">Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            We're a next-generation technology startup building AI-driven, cloud-native solutions 
            that empower businesses to thrive in the digital era.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-6 text-lg"
            >
              Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('founders')}
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              Meet the Team
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-sm text-muted-foreground">Founders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}