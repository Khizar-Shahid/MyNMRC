
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, Leaf, Globe, Shield, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dispensary = () => {
  const medicineCategories = [
    {
      name: "Respiratory Health",
      description: "Natural remedies for asthma, bronchitis, cough, and respiratory infections",
      icon: <Leaf className="w-6 h-6" />,
      medicines: ["Bryonia", "Phosphorus", "Antimonium Tart", "Ipecacuanha"]
    },
    {
      name: "Digestive Wellness",
      description: "Homeopathic solutions for digestive disorders, IBS, and stomach issues",
      icon: <Package className="w-6 h-6" />,
      medicines: ["Nux Vomica", "Lycopodium", "Pulsatilla", "Carbo Veg"]
    },
    {
      name: "Skin & Dermatology",
      description: "Natural treatment for eczema, psoriasis, acne, and skin allergies",
      icon: <Shield className="w-6 h-6" />,
      medicines: ["Sulphur", "Graphites", "Arsenicum Album", "Hepar Sulph"]
    },
    {
      name: "Women's Health",
      description: "Specialized remedies for menstrual, pregnancy, and hormonal issues",
      icon: <Pill className="w-6 h-6" />,
      medicines: ["Sepia", "Pulsatilla", "Calcarea Carb", "Natrum Mur"]
    },
    {
      name: "Mental & Emotional",
      description: "Homeopathic support for anxiety, depression, and stress-related conditions",
      icon: <Globe className="w-6 h-6" />,
      medicines: ["Ignatia", "Natrum Mur", "Aurum Met", "Arsenicum Album"]
    },
    {
      name: "Pain Management",
      description: "Natural pain relief for arthritis, headaches, and chronic pain conditions",
      icon: <Shield className="w-6 h-6" />,
      medicines: ["Arnica", "Rhus Tox", "Bryonia", "Hypericum"]
    }
  ];

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "Pure homeopathic remedies with no harmful side effects"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "In-House Developed",
      description: "Medicines developed using 30+ years of clinical experience"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving patients across Pakistan and Europe"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Manufactured under strict quality control standards"
    }
  ];

  const benefits = [
    "Side-effect-free natural medicines",
    "Cost-effective compared to conventional drugs",
    "Personalized medicine preparation",
    "Direct supply from manufacturer",
    "International shipping available",
    "Expert guidance on dosage and usage"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nmrc-green to-nmrc-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Natural <span className="text-nmrc-yellow">Dispensary</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              Premium homeopathic medicines developed in-house with 30+ years of expertise for effective, side-effect-free healing
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
            {/* Medicine Categories */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                Our Medicine Range
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our dispensary offers a comprehensive range of homeopathic medicines, 
                carefully prepared using traditional methods combined with modern quality standards. 
                Each remedy is selected and prepared based on individual patient needs.
              </p>

              <div className="space-y-6">
                {medicineCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {category.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {category.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {category.medicines.map((medicine, idx) => (
                              <span key={idx} className="bg-nmrc-yellow px-2 py-1 rounded text-xs font-medium text-gray-900">
                                {medicine}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits & Quality */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                Why Choose Our Medicines?
              </h2>
              
              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-nmrc-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quality Standards */}
              <Card className="bg-gray-50 mb-8">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">
                    Quality Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nmrc-green rounded-full"></div>
                      <span className="text-gray-700">Manufactured under GMP standards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nmrc-green rounded-full"></div>
                      <span className="text-gray-700">Regular quality testing and validation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nmrc-green rounded-full"></div>
                      <span className="text-gray-700">Proper storage and handling protocols</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nmrc-green rounded-full"></div>
                      <span className="text-gray-700">Internationally recognized preparations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ordering Process */}
              <Card className="bg-nmrc-green text-white">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">
                    How to Order
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-green-100">1. Consult with our homeopathic physician</p>
                    <p className="text-green-100">2. Receive personalized prescription</p>
                    <p className="text-green-100">3. Medicines prepared fresh for you</p>
                    <p className="text-green-100">4. Pick up or delivery available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* International Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Global Service & Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve patients not only across Pakistan but also internationally, 
              bringing natural healing solutions to your doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Service Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nmrc-green" />
                  <span>All major cities in Pakistan</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nmrc-green" />
                  <span>European Union countries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nmrc-green" />
                  <span>Express delivery options available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nmrc-green" />
                  <span>Temperature-controlled shipping</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Globe className="w-16 h-16 text-nmrc-green mx-auto mb-4" />
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  International Shipping
                </h4>
                <p className="text-gray-600">
                  Secure and reliable delivery worldwide with proper documentation and customs handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Need Natural Medicine Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Consult with our experts to get personalized homeopathic medicines 
            prepared specifically for your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-nmrc-green hover:bg-nmrc-green-dark text-white px-8 py-3">
              <Link to="/contact">Consult for Medicines</Link>
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

export default Dispensary;
