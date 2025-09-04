import { useState } from 'react';
import { Linkedin, Twitter, Github, Instagram, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Send to Formspree for real email collection
      const response = await fetch('https://formspree.io/f/xpwjdddr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_subscription',
          message: `New newsletter subscription from ${email}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Successfully subscribed!",
          description: "Thanks for joining our journey. We'll keep you updated.",
        });
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img 
              src="/logo.png" 
              alt="Devora Logo" 
              className="w-10 h-10 rounded-lg" 
            />
              </div>
              <span className="font-display text-2xl font-bold gradient-text">DEVORA</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Devora is a technology startup building AI-driven, cloud-native solutions 
              to power the businesses of tomorrow.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/devooratech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/Devooratech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/devooratech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/devooratech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* What We're Building */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">
              What We're Building
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cloud Platforms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Automation Tools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('founders')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  The Team
                </button>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-secondary">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4">
              Get early updates and be part of our startup journey.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Devora Technologies. All rights reserved. Founded with passion by{' '}
            <span className="text-primary font-medium">Arya Singh</span> and{' '}
            <span className="text-primary font-medium">Ashish Kumar</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}