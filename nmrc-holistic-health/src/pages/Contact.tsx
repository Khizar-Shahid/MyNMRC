
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "+92 51-2351404",
        "+92 51-2351277"
      ],
      action: "tel:+92512351404"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Mobile & Emergency",
      details: [
        "+92 320-5047947",
        "Available via WhatsApp"
      ],
      action: "tel:+923205047947"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "nmrcg10.naturaglow_aesthetics@gmail.com"
      ],
      action: "mailto:nmrcg10.naturaglow_aesthetics@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: [
        "Islamabad, Pakistan"
      ],
      action: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Saturday", time: "9:00 AM - 6:00 PM PKT" },
    { day: "Sunday", time: "Closed" },
    { day: "Emergency", time: "Available via WhatsApp" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nmrc-green to-nmrc-green-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Get in Touch with <span className="text-nmrc-yellow">NMRC</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              Ready to start your journey towards natural healing? Contact us today to schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {method.title}
                          </h3>
                          {method.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 mb-1">
                              {method.action !== "#" ? (
                                <a 
                                  href={method.action} 
                                  className="hover:text-nmrc-green transition-colors"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-nmrc-green" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/nmrcg10.naturaglow_aesthetics" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center text-white hover:bg-nmrc-green-dark transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://wa.me/923205047947" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                  >
                    <span className="font-bold">W</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">
                    Schedule Your Appointment
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" type="text" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" type="text" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+92 XXX XXXXXXX" />
                    </div>
                    
                    <div>
                      <Label htmlFor="healthConcern">Health Concern</Label>
                      <Input id="healthConcern" type="text" placeholder="Brief description of your health concern" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input id="preferredDate" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Input id="preferredTime" type="time" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Any additional information you'd like to share..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full bg-nmrc-green hover:bg-nmrc-green-dark text-white py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <div className="mt-16 p-8 bg-gradient-to-r from-nmrc-green to-nmrc-green-dark rounded-2xl text-white text-center">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              For urgent health concerns, contact us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+923205047947"
                className="inline-block bg-nmrc-yellow text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-nmrc-yellow-dark transition-colors"
              >
                Call Emergency: +92 320-5047947
              </a>
              <a 
                href="https://wa.me/923205047947"
                className="inline-block bg-white text-nmrc-green font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
