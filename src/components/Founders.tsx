import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

const founders = [
  {
    name: 'Arya Singh',
    role: 'Founder & CEO',
    image: '/arya-singh.png',
    bio: 'Arya is the Founder of Devora, a passionate entrepreneur with a strong vision to build innovative technology solutions. As a fresher, he brings fresh perspectives, creativity, and a drive to transform ideas into impactful products. Arya believes that technology should be human-centric and accessible to everyone.',
    social: {
      linkedin: 'https://www.linkedin.com/in/aryasingh014/',
      twitter: 'https://x.com/AryaSin77786781',
      email: 'mailto:arya@devora.tech'
    }
  },
  {
    name: 'Ashish Kumar',
    role: 'Co-Founder & CTO',
    image: '/ashish-kumar.png',
    bio: 'Ashish is the Co-Founder of Devora, a technology enthusiast with expertise in software development and AI solutions. With hands-on project experience and a strong problem-solving mindset, he is focused on building scalable and efficient products. As a fresher, Ashish combines technical skills with a passion for innovation.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ashishkumar193/',
      github: 'https://github.com/ashish1932',
      email: 'mailto:ashish@devora.tech'
    }
  }
];

export default function Founders() {
  return (
    <section id="founders" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our Founding <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The visionaries behind Devora's innovative approach to technology. 
            Meet the passionate entrepreneurs driving our mission forward.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Image */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-semibold text-lg">{founder.role}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-left">
                  {founder.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-6">
                  {founder.social.linkedin && (
                    <a 
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group/social"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  
                  {founder.social.twitter && (
                    <a 
                      href={founder.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110 group/social"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  
                  {founder.social.github && (
                    <a 
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 group/social"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  
                  <a 
                    href={founder.social.email}
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 group/social"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

          {/* Team Quote */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic mb-4">
              “Dream big, start small, but most of all, start. Success comes to those who take action while others are waiting.”
            </blockquote>
           
            <div className="mt-4 text-xs text-muted-foreground/70">
              Inspiring the founders of Devora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}