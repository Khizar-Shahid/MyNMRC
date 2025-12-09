
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTube, Clock, Shield, Award, CheckCircle, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Laboratory = () => {
  const services = [
    {
      name: "Blood Chemistry Analysis",
      description: "Comprehensive blood work including glucose, cholesterol, liver function, and more",
      duration: "2-4 hours"
    },
    {
      name: "Hormonal Testing",
      description: "Complete hormonal panels for thyroid, reproductive, and stress hormones",
      duration: "4-8 hours"
    },
    {
      name: "Allergy Testing",
      description: "Identification of food and environmental allergens",
      duration: "6-12 hours"
    },
    {
      name: "Vitamin & Mineral Analysis",
      description: "Deficiency testing for essential vitamins and minerals",
      duration: "8-16 hours"
    },
    {
      name: "Infectious Disease Screening",
      description: "Testing for bacterial, viral, and parasitic infections",
      duration: "4-24 hours"
    },
    {
      name: "Autoimmune Markers",
      description: "Specialized testing for autoimmune conditions",
      duration: "12-24 hours"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Results in Under 24 Hours",
      description: "Most tests completed within same day"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "International standards and protocols"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Technicians",
      description: "Highly trained laboratory professionals"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Advanced Equipment",
      description: "State-of-the-art diagnostic technology"
    }
  ];

  const benefits = [
    "No waiting weeks for results",
    "Affordable pricing compared to external labs",
    "Direct consultation with your homeopathic physician",
    "Immediate treatment adjustments based on results",
    "Complete privacy and confidentiality",
    "Integrated with your medical records"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nmrc-green to-nmrc-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Advanced <span className="text-nmrc-yellow">Laboratory</span> Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              In-house diagnostic testing with results in under 24 hours for immediate, personalized treatment
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-nmrc-green rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Laboratory Services */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                Our Laboratory Services
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art laboratory facility provides comprehensive diagnostic testing 
                to support accurate homeopathic treatment. With advanced equipment and expert technicians, 
                we deliver reliable results quickly.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <span className="bg-nmrc-yellow px-2 py-1 rounded text-xs font-medium text-gray-900">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits & Process */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                Why Choose Our Lab?
              </h2>
              
              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-nmrc-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Process */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">
                    Simple Testing Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-nmrc-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <span className="text-gray-700">Doctor consultation and test recommendation</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-nmrc-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <span className="text-gray-700">Sample collection by trained technicians</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-nmrc-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <span className="text-gray-700">Advanced laboratory analysis</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-nmrc-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <span className="text-gray-700">Results delivered within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-nmrc-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                        5
                      </div>
                      <span className="text-gray-700">Immediate treatment plan adjustment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready for Advanced Diagnostic Testing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the convenience of in-house laboratory testing with rapid results 
            and immediate treatment planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-nmrc-green hover:bg-nmrc-green-dark text-white px-8 py-3">
              <Link to="/contact">Book Lab Tests</Link>
            </Button>
            <Button asChild variant="outline" className="border-nmrc-green text-nmrc-green hover:bg-nmrc-green hover:text-white px-8 py-3">
              <a href="tel:+92512351404">Call: +92 51-2351404</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Laboratory;
