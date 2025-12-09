
import { CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const benefits = [
    { text: "30+ Years Expertise", subtitle: "Led by seasoned homeopathic doctors" },
    { text: "In-House Lab Testing", subtitle: "Results in under 24 hours" },
    { text: "Holistic Healing", subtitle: "Personalized and natural remedies" }
  ];

  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "Millions", label: "Cured" },
    { number: "< 24 Hours", label: "Lab Results" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-nmrc-green to-nmrc-green-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-nmrc-yellow text-gray-900 px-4 py-2 rounded-full font-semibold">
              <Award className="w-5 h-5" />
              <span>Pakistan's Most Advanced Homeopathic Clinic</span>
            </div>

            {/* Headlines */}
            <div>
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold leading-tight mb-4">
                Transform Your Health with <span className="text-nmrc-yellow">30 Years</span> of Expertise
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 font-light">
                Experience unparalleled homeopathic care with in-house lab testing and results in under 24 hours at NMRC.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-nmrc-yellow mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">{benefit.text}</p>
                    <p className="text-green-100 text-sm">{benefit.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-nmrc-yellow text-gray-900 hover:bg-nmrc-yellow-dark font-semibold px-8 py-6 text-lg"
              >
                <Link to="/contact">Book an Appointment</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-nmrc-green font-semibold px-8 py-6 text-lg"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-bold text-2xl lg:text-3xl text-nmrc-yellow">{stat.number}</p>
                  <p className="text-sm lg:text-base opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/lovable-uploads/15413e35-af9b-4a3c-8da4-43ed71f77605.png" 
                alt="Professional group photo of NMRC team"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-nmrc-yellow text-gray-900 p-3 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
