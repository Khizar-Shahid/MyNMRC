
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Users } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Ghulam Sabir",
      role: "Head of Medical Team",
      qualifications: "RHMP, DHMS (NCH, PAK), PG Hom-London (UK)",
      specialization: "International Homeopathy Expert",
      description: "Dr. Ghulam Sabir leads our team with extensive international training and a passion for holistic healing.",
      icon: <Users className="w-6 h-6" />,
      image: "/lovable-uploads/1a5e3002-442d-44ff-a3e5-a296a3bf2cef.png"
    },
    {
      name: "Dr. Marryam Chaudhary",
      role: "General Practitioner, Dermatologist & Aesthetic Physician",
      qualifications: "MBBS (RMP), DHMS (RHMP), PG. Dip. Clinical Dermatology (UK)",
      specialization: "Dermatology & Aesthetics",
      description: "Dr. Marryam specializes in dermatology and aesthetics, offering personalized care with natural remedies.",
      icon: <Award className="w-6 h-6" />,
      image: "/lovable-uploads/c3b634df-0e2a-4cd4-b45b-e57b5a1c6453.png"
    },
    {
      name: "Dr. Azhar Mehmood",
      role: "Senior Consultant",
      qualifications: "DHMS (RHMP), Ph. Hom. London (UK), Cert. Advance Ultrasound (SDC)",
      specialization: "Advanced Diagnostics",
      description: "Dr. Azhar brings advanced diagnostic expertise and hospital management skills for top-quality care.",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "/lovable-uploads/15413e35-af9b-4a3c-8da4-43ed71f77605.png"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of homeopathic physicians brings over 30 years of combined expertise 
            to ensure the best care for our patients.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative mb-12">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Doctor Image */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-nmrc-green-dark transition-colors">
                          {member.icon}
                        </div>

                        {/* Doctor Info */}
                        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2 text-center">
                          {member.name}
                        </h3>
                        <p className="text-nmrc-green font-semibold mb-2 text-center text-sm">{member.role}</p>
                        <p className="text-xs text-gray-600 mb-3 text-center">{member.qualifications}</p>
                        <div className="inline-block bg-nmrc-yellow px-3 py-1 rounded-full text-xs font-medium text-gray-900 mb-4 mx-auto">
                          {member.specialization}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed text-center flex-1">
                          {member.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-nmrc-green hover:bg-nmrc-green-dark text-white border-nmrc-green" />
            <CarouselNext className="hidden md:flex -right-12 bg-nmrc-green hover:bg-nmrc-green-dark text-white border-nmrc-green" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 md:hidden space-x-2">
            {teamMembers.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-nmrc-green rounded-full opacity-50"></div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="bg-nmrc-green hover:bg-nmrc-green-dark text-white px-8 py-3">
            <Link to="/team">Meet Our Complete Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
