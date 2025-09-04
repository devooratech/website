import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Shield, Smartphone, TrendingUp, Bot, X } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'We\'re developing intelligent systems that learn and adapt to provide unprecedented value to businesses of all sizes.',
    color: 'text-primary',
    detailedInfo: {
      overview: 'Our AI-powered solutions leverage cutting-edge machine learning algorithms and neural networks to create intelligent systems that continuously learn and evolve.',
      features: [
        'Machine Learning Models for predictive analytics',
        'Natural Language Processing for customer interactions',
        'Computer Vision for automated image and video analysis',
        'Deep Learning frameworks for complex pattern recognition',
        'AI-driven automation for business process optimization'
      ],
      benefits: [
        'Reduce operational costs by up to 40%',
        'Improve decision-making accuracy',
        'Automate repetitive tasks',
        'Enhance customer experience through personalization',
        'Scale operations without proportional resource increase'
      ],
      useCases: [
        'Customer service chatbots and virtual assistants',
        'Predictive maintenance for manufacturing',
        'Fraud detection in financial services',
        'Personalized recommendation engines',
        'Supply chain optimization'
      ]
    }
  },
  {
    icon: Cloud,
    title: 'Cloud Native Architecture',
    description: 'Our solutions will be built from the ground up to leverage the full potential of cloud computing.',
    color: 'text-secondary',
    detailedInfo: {
      overview: 'We design and build applications using cloud-native principles, ensuring maximum scalability, reliability, and cost-effectiveness.',
      features: [
        'Microservices architecture for modular development',
        'Containerization with Docker and Kubernetes',
        'Serverless computing for optimal resource utilization',
        'Auto-scaling capabilities for varying workloads',
        'Multi-cloud deployment strategies'
      ],
      benefits: [
        'Enhanced scalability and flexibility',
        'Reduced infrastructure costs',
        '99.9% uptime reliability',
        'Faster time-to-market',
        'Global availability and performance'
      ],
      useCases: [
        'E-commerce platforms with variable traffic',
        'SaaS applications requiring global reach',
        'Data processing pipelines',
        'Real-time analytics dashboards',
        'Mobile app backends'
      ]
    }
  },
  {
    icon: Shield,
    title: 'Security First Approach',
    description: 'In a world of increasing cyber threats, we\'re prioritizing security in everything we build.',
    color: 'text-accent',
    detailedInfo: {
      overview: 'Security is integrated into every layer of our development process, from design to deployment and maintenance.',
      features: [
        'End-to-end encryption for all data transmission',
        'Multi-factor authentication systems',
        'Regular security audits and penetration testing',
        'Compliance with industry standards (GDPR, HIPAA, SOC2)',
        'Zero-trust security architecture'
      ],
      benefits: [
        'Protect sensitive business data',
        'Maintain customer trust and confidence',
        'Ensure regulatory compliance',
        'Prevent costly security breaches',
        'Secure remote work environments'
      ],
      useCases: [
        'Healthcare data management systems',
        'Financial services applications',
        'Government and defense solutions',
        'Enterprise collaboration platforms',
        'IoT device security'
      ]
    }
  },
  {
    icon: Smartphone,
    title: 'Seamless Experiences',
    description: 'We believe technology should be intuitive and accessible, regardless of the device or platform.',
    color: 'text-success',
    detailedInfo: {
      overview: 'Our user experience design focuses on creating intuitive, accessible, and engaging interfaces across all platforms and devices.',
      features: [
        'Responsive design for all screen sizes',
        'Progressive Web Apps (PWA) technology',
        'Cross-platform mobile applications',
        'Accessibility compliance (WCAG 2.1)',
        'Voice and gesture-based interactions'
      ],
      benefits: [
        'Increased user engagement and retention',
        'Reduced learning curve for new users',
        'Higher conversion rates',
        'Improved brand perception',
        'Broader market reach'
      ],
      useCases: [
        'Customer-facing mobile applications',
        'Enterprise productivity tools',
        'E-learning and training platforms',
        'Digital banking interfaces',
        'Telemedicine applications'
      ]
    }
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Insights',
    description: 'Our tools will transform raw data into actionable intelligence that drives business growth.',
    color: 'text-warning',
    detailedInfo: {
      overview: 'We create comprehensive analytics solutions that turn your data into strategic advantages through advanced visualization and intelligence.',
      features: [
        'Real-time data processing and analysis',
        'Interactive dashboards and reports',
        'Predictive analytics and forecasting',
        'Data visualization and storytelling',
        'Integration with existing business systems'
      ],
      benefits: [
        'Make informed strategic decisions',
        'Identify new revenue opportunities',
        'Optimize operational efficiency',
        'Understand customer behavior patterns',
        'Predict market trends and demands'
      ],
      useCases: [
        'Business intelligence dashboards',
        'Customer analytics platforms',
        'Supply chain optimization',
        'Marketing campaign analysis',
        'Financial performance monitoring'
      ]
    }
  },
  {
    icon: Bot,
    title: 'Automation Excellence',
    description: 'We\'re creating solutions that automate repetitive tasks, freeing up human potential for creative work.',
    color: 'text-primary',
    detailedInfo: {
      overview: 'Our automation solutions streamline business processes, reduce human error, and allow your team to focus on high-value strategic work.',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow orchestration and management',
        'API integrations and middleware',
        'Document processing automation',
        'Intelligent task scheduling'
      ],
      benefits: [
        'Reduce operational costs by 60%+',
        'Eliminate human errors in repetitive tasks',
        'Improve process consistency and quality',
        'Increase employee satisfaction',
        'Accelerate business processes'
      ],
      useCases: [
        'Invoice processing and accounting',
        'Customer onboarding workflows',
        'Data entry and migration',
        'Report generation and distribution',
        'IT infrastructure management'
      ]
    }
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Add escape key functionality
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService !== null) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedService]);

  return (
    <section id="services" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our Vision for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While we're just getting started, our roadmap is packed with innovative solutions 
            that will reshape how businesses interact with technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(index)}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-primary font-semibold text-sm group-hover:text-secondary transition-colors duration-300">
                    Click to learn more →
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack Preview */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-2xl font-bold mb-8 gradient-text">
            Built with Modern Technologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow'].map((tech, index) => (
              <div 
                key={index}
                className="glass-card px-6 py-3 rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    {React.createElement(services[selectedService].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold gradient-text">
                      {services[selectedService].title}
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      {services[selectedService].description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {services[selectedService].detailedInfo.overview}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Key Features</h3>
                  <ul className="space-y-2">
                    {services[selectedService].detailedInfo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">Benefits</h3>
                  <ul className="space-y-2">
                    {services[selectedService].detailedInfo.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[selectedService].detailedInfo.useCases.map((useCase, idx) => (
                      <div key={idx} className="glass-card p-4 rounded-lg">
                        <span className="text-muted-foreground">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}