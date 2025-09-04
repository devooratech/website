import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Join Our Journey</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Be Part of Our <span className="gradient-text">Journey</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Devora is at the start of an exciting mission. Whether you're an investor, partner, 
              or future team member — join us as we shape tomorrow's technology today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={onContactClick}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-6 text-lg"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              Follow Our Progress
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Partnership Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate with us to build the future of technology
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">Innovation Hub</h3>
              <p className="text-sm text-muted-foreground">
                Be part of groundbreaking technological advancement
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
              <div className="text-3xl mb-3">💹</div>
              <h3 className="font-semibold mb-2">Growth Journey</h3>
              <p className="text-sm text-muted-foreground">
                Join us as we scale and transform industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}