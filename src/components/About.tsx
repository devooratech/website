import { Rocket, Lightbulb, Users, Target, Code, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Welcome to <span className="gradient-text">Devora</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Devora, we believe technology should be simple, powerful, and transformative. 
                Founded in 2025, our mission is to design intelligent solutions that solve complex 
                business problems and make technology accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are combining AI, cloud platforms, and automation to build products that don't 
                just follow trends — they set them.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Startup Spirit</h4>
                <p className="text-sm text-muted-foreground">Agile & Innovative</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Fresh Ideas</h4>
                <p className="text-sm text-muted-foreground">Boundless Creativity</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Driven Team</h4>
                <p className="text-sm text-muted-foreground">Passionate Experts</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl text-center h-full flex flex-col justify-center space-y-6 pulse-glow">
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold gradient-text">Our Journey</h3>
                <p className="text-muted-foreground">
                  We're building the foundation for something extraordinary
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-4xl animate-pulse-glow">
                  🚔
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <p className="text-sm text-muted-foreground">Today's Progress</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl floating-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="font-display text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To democratize advanced technology by creating intelligent, scalable solutions 
              that empower businesses of all sizes to innovate and grow in the AI-driven era.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-secondary" />
              <h3 className="font-display text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a global leader in next-generation technology solutions, 
              setting new standards for innovation, accessibility, and human-centered design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}