
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Users, Heart, TestTube, Stethoscope } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "30+ Years of Excellence",
      description: "Three decades of proven track record in homeopathic healing"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Results",
      description: "In-house laboratory with results in under 24 hours"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Millions Healed",
      description: "Successfully treated millions of patients across Pakistan"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Approach",
      description: "Comprehensive care addressing mind, body, and spirit"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Advanced Diagnostics",
      description: "State-of-the-art laboratory and testing facilities"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Expert Team",
      description: "Internationally trained homeopathic physicians"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nmrc-green to-nmrc-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-nmrc-yellow">NMRC</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              Pakistan's Leading Homeopathic Clinic with Over 30 Years of Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The NMRC Difference
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  With over 30 years of experience, NMRC stands as Pakistan's most advanced homeopathic clinic. 
                  Our in-house laboratory delivers results in under 24 hours, complemented by a team of 
                  experienced doctors and cutting-edge facilities.
                </p>
                <p>
                  Founded on the principles of natural healing, we have successfully treated millions of patients 
                  across Pakistan and beyond. Our commitment to excellence has made us a trusted name in 
                  homeopathic healthcare.
                </p>
                <p>
                  At NMRC, we believe in treating the root cause of illness rather than just symptoms. 
                  Our holistic approach combines traditional homeopathic principles with modern diagnostic 
                  techniques to provide comprehensive care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-nmrc-green p-8 rounded-2xl text-white">
                <h3 className="font-playfair text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  To provide natural, effective, and affordable healthcare solutions through the power of 
                  homeopathy, backed by scientific research and delivered with compassion.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="mb-20">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose NMRC?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-nmrc-green">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-nmrc-green rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-nmrc-green-dark transition-colors">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Unique Approach */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Unique Approach
              </h2>
              <p className="text-xl text-gray-600">
                Integrating tradition with innovation for optimal healing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-nmrc-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gray-900">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">30+ Years of Expertise</h3>
                <p className="text-gray-600 text-sm">Proven track record of healing millions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-nmrc-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gray-900">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">In-House Lab</h3>
                <p className="text-gray-600 text-sm">Swift and accurate diagnostics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-nmrc-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gray-900">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Holistic Care</h3>
                <p className="text-gray-600 text-sm">Integrating tradition and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
