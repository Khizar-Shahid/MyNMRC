
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, TestTube, Pill, Clock, Shield, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Homeopathic Care",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-nmrc-yellow",
      features: [
        "Personalized Treatments - Tailored to individual needs",
        "Holistic Healing - Addressing various ailments naturally", 
        "Follow-Up Care - Continuous support for recovery"
      ]
    },
    {
      title: "Laboratory Services",
      icon: <TestTube className="w-8 h-8" />,
      color: "bg-nmrc-green",
      features: [
        "In-House Testing - Advanced diagnostics with results in under 24 hours",
        "Affordable Rates - Cost-effective health solutions",
        "Expert Technicians - Skilled professionals ensuring accuracy"
      ]
    },
    {
      title: "Dispensary",
      icon: <Pill className="w-8 h-8" />,
      color: "bg-purple-500",
      features: [
        "Natural Remedies - Blend of modern and alternative medicine",
        "In-House Developed Medicines - Side-effect-free and cost-effective",
        "Global Reach - Serving Pakistan and Europe"
      ]
    }
  ];

  const highlights = [
    { icon: <Clock className="w-6 h-6" />, text: "Results in Under 24 Hours" },
    { icon: <Shield className="w-6 h-6" />, text: "30+ Years of Expertise" },
    { icon: <Users className="w-6 h-6" />, text: "Millions of Patients Served" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of traditional homeopathy and modern medical technology 
            at Pakistan's most advanced holistic healing center.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-nmrc-green">
                {highlight.icon}
              </div>
              <span className="font-semibold text-gray-900">{highlight.text}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-nmrc-green">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <CardTitle className="font-playfair text-2xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-nmrc-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-nmrc-green to-nmrc-green-dark rounded-2xl text-white">
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience Natural Healing?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join millions who have trusted NMRC for their holistic health journey
          </p>
          <a 
            href="tel:+92512351404"
            className="inline-block bg-nmrc-yellow text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-nmrc-yellow-dark transition-colors"
          >
            Call Now: +92 51-2351404
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
