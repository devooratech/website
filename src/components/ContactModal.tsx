import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, User, MessageSquare, Send, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwjdddr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] glass-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl gradient-text text-center">
            Get in Touch
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            We're just getting started and would love to hear from you.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center space-x-2">
              <User className="w-4 h-4 text-primary" />
              <span>Full Name</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 border-border focus:border-primary transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Email Address</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 border-border focus:border-primary transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Phone Number</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 "
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-background/50 border-border focus:border-primary transition-colors"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Your Message</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group py-6"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Or reach us directly at:</p>
            <div className="flex items-center justify-center space-x-4">
              <a 
                href="mailto:hello@devora.tech" 
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                devooratech@gmail.com
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
