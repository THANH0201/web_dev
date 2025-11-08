import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Award, Users, Eye, Shield, Heart, Target } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their well-being.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in eye care through continuous learning and improvement.",
    },
    {
      icon: Users,
      title: "Patient-First",
      description: "Your needs, comfort, and satisfaction are at the center of everything we do.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We practice honest, ethical care and provide transparent communication always.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Optometrist",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Board-certified with 15+ years of experience in comprehensive eye care.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Ophthalmologist",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Specializes in LASIK surgery and advanced treatment of eye diseases.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Eye Specialist",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Dedicated to providing gentle, expert care for children's vision needs.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-blue-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="About Vision Clinic"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-white mb-4">About Vision Clinic</h1>
            <p className="text-xl text-blue-50">
              Dedicated to excellence in eye care for over 25 years
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2000, Vision Clinic was established with a simple yet powerful mission: 
                to provide exceptional eye care services that improve the quality of life for our patients.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past two decades, we've grown from a small practice to a comprehensive eye 
                care center, but our commitment to personalized, compassionate care has remained unchanged.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of patients annually, combining cutting-edge 
                technology with the trusted, personal approach that has been our hallmark from the beginning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-blue-600 mb-2">25+</div>
                <p className="text-gray-600">Years of Service</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-blue-600 mb-2">10,000+</div>
                <p className="text-gray-600">Happy Patients</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Expert Staff</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional, comprehensive eye care services that enhance our patients' 
                  vision and quality of life. We strive to deliver personalized care using advanced 
                  technology in a welcoming, professional environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted eye care provider in our community, recognized for clinical 
                  excellence, innovative treatments, and unwavering commitment to patient satisfaction 
                  and lifelong vision health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide our practice and shape every interaction with our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our board-certified professionals are dedicated to providing you with the highest quality eye care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-blue-900 mb-8 text-center">Why Choose Vision Clinic?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Experienced Professionals</h4>
                  <p className="text-gray-600 text-sm">
                    Our team of board-certified optometrists and ophthalmologists bring decades of combined experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Advanced Technology</h4>
                  <p className="text-gray-600 text-sm">
                    We invest in the latest diagnostic and treatment equipment for accurate, effective care.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Comprehensive Services</h4>
                  <p className="text-gray-600 text-sm">
                    From routine exams to complex surgeries, we offer complete eye care under one roof.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Patient-Centered Approach</h4>
                  <p className="text-gray-600 text-sm">
                    We take time to listen, understand your needs, and develop personalized treatment plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
