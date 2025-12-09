
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ghulam Sabir",
      role: "Head of Medical Team",
      qualifications: [
        "Homeopathic Physician (RHMP)",
        "DHMS (NCH, PAK)",
        "PG Hom-London (UK)",
        "D. Hom-London (UK)",
        "Riflessologia (Switzerland)",
        "SFF (Rep. of San Marino, Italy)",
        "OLU (Rep. of San Marino, Italy)",
        "TSN (Italy)"
      ],
      description: "As the Head of the Medical Team, Dr. Ghulam Sabir brings a wealth of international training and experience in homeopathy. His dedication to natural healing has transformed the lives of millions of patients over his illustrious career.",
      specialties: ["International Homeopathy", "Holistic Healing", "Medical Leadership"],
      experience: "30+ Years",
      icon: <Users className="w-8 h-8" />,
      image: "/lovable-uploads/1a5e3002-442d-44ff-a3e5-a296a3bf2cef.png"
    },
    {
      name: "Dr. Marryam Chaudhary",
      role: "General Practitioner, Dermatologist & Aesthetic Physician",
      qualifications: [
        "MBBS (RMP)",
        "DHMS (RHMP)",
        "PG. Dip. Clinical Dermatology (UK)",
        "PG. Dip. Facial Aesthetics (CPD)(UK)",
        "Cert. in Phytotherapy (Italy)"
      ],
      description: "Dr. Marryam Chaudhary combines her expertise in dermatology and aesthetics with homeopathy to offer comprehensive care. Her focus on natural remedies ensures effective and safe treatments for her patients.",
      specialties: ["Dermatology", "Aesthetic Medicine", "Natural Skincare"],
      experience: "15+ Years",
      icon: <Award className="w-8 h-8" />,
      image: "/lovable-uploads/c3b634df-0e2a-4cd4-b45b-e57b5a1c6453.png"
    },
    {
      name: "Dr. Azhar Mehmood",
      role: "Senior Consultant",
      qualifications: [
        "DHMS (RHMP)",
        "Ph. Hom. London (UK)",
        "Certification in Advance Ultrasound (SDC)",
        "PG. Hospital Management (NUST)"
      ],
      description: "Dr. Azhar Mehmood's advanced skills in diagnostics and hospital management enhance NMRC's ability to deliver exceptional care. His commitment to patient well-being is evident in his meticulous approach to treatment.",
      specialties: ["Advanced Diagnostics", "Hospital Management", "Ultrasound"],
      experience: "20+ Years",
      icon: <GraduationCap className="w-8 h-8" />,
      image: "/lovable-uploads/15413e35-af9b-4a3c-8da4-43ed71f77605.png"
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
              Our Expert <span className="text-nmrc-yellow">Team</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              Meet the doctors with over 30 years of combined experience leading Pakistan's most advanced homeopathic clinic
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Your Health & Well-being
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At NMRC, our team of highly qualified homeopathic physicians brings decades of expertise to provide 
              personalized care. Meet the experts leading our mission of holistic healing.
            </p>
          </div>

          {/* Team Carousel for Mobile, Grid for Desktop */}
          <div className="block lg:hidden mb-12">
            <Carousel className="w-full">
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center text-white">
                              {member.icon}
                            </div>
                            <div>
                              <h3 className="font-playfair text-xl font-bold text-gray-900">
                                {member.name}
                              </h3>
                              <p className="text-nmrc-green font-semibold text-sm">{member.role}</p>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                            {member.description}
                          </p>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                                <Clock className="w-4 h-4 mr-2 text-nmrc-green" />
                                Experience: {member.experience}
                              </h4>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                              <div className="flex flex-wrap gap-1">
                                {member.specialties.map((specialty, idx) => (
                                  <span key={idx} className="bg-nmrc-yellow px-2 py-1 rounded text-xs font-medium text-gray-900">
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Key Qualifications</h4>
                              <ul className="space-y-1 text-xs text-gray-600">
                                {member.qualifications.slice(0, 3).map((qualification, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-nmrc-green rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                    {qualification}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-nmrc-green hover:bg-nmrc-green-dark text-white border-nmrc-green" />
              <CarouselNext className="bg-nmrc-green hover:bg-nmrc-green-dark text-white border-nmrc-green" />
            </Carousel>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:block space-y-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-nmrc-green rounded-full flex items-center justify-center text-white">
                          {member.icon}
                        </div>
                        <div>
                          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-900">
                            {member.name}
                          </h3>
                          <p className="text-nmrc-green font-semibold">{member.role}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {member.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-nmrc-green" />
                            Experience
                          </h4>
                          <p className="text-gray-600">{member.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-nmrc-green" />
                            Specialties
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, idx) => (
                              <span key={idx} className="bg-nmrc-yellow px-2 py-1 rounded text-xs font-medium text-gray-900">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Qualifications</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                          {member.qualifications.map((qualification, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-nmrc-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {qualification}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Doctor Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover min-h-[500px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-nmrc-green/20 to-transparent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-20 text-center p-12 bg-gray-50 rounded-2xl">
            <blockquote className="font-playfair text-2xl lg:text-3xl text-gray-900 mb-6 italic">
              "Our team's expertise and dedication make NMRC a trusted name in homeopathy."
            </blockquote>
            <cite className="text-nmrc-green font-semibold">— Patient Testimonial</cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
