import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Eye, Glasses, TestTube, Zap, Stethoscope, Heart, Shield, Activity } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      id: "comprehensive-eye-exams",
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "Complete eye health evaluations using advanced diagnostic technology to detect vision problems and eye diseases early. Our thorough examinations include visual acuity tests, refraction assessment, eye pressure measurement, and detailed retinal examination.",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Visual Acuity Testing", "Refraction Assessment", "Eye Pressure Measurement", "Retinal Examination"],
    },
    {
      id: "eyeglasses-frames",
      icon: Glasses,
      title: "Eyeglasses & Frames",
      description: "Wide selection of designer frames and prescription lenses customized to your vision needs and personal style. Our opticians help you find the perfect frames that complement your face shape and lifestyle, with lenses tailored to your specific prescription.",
      image: "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Designer Frames", "Custom Lenses", "Anti-Glare Coating", "Blue Light Protection"],
    },
    {
      id: "contact-lenses",
      icon: TestTube,
      title: "Contact Lenses",
      description: "Expert fitting and comprehensive selection of contact lenses including daily, monthly, and specialty lenses. Whether you're new to contacts or looking to switch, our specialists ensure proper fit and comfort for optimal vision correction.",
      image: "https://images.unsplash.com/photo-1627260125320-fbafe86e341e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbGVuc2VzJTIwY2FyZXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Daily Disposables", "Monthly Lenses", "Toric for Astigmatism", "Multifocal Lenses"],
    },
    {
      id: "lasik-surgery",
      icon: Zap,
      title: "LASIK Surgery",
      description: "Advanced laser vision correction procedures to reduce or eliminate dependence on glasses and contacts. Our experienced surgeons use the latest LASIK technology to reshape your cornea and correct refractive errors with precision and safety.",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Bladeless LASIK", "Custom Wavefront", "Free Consultation", "Lifetime Warranty"],
    },
    {
      id: "disease-management",
      icon: Stethoscope,
      title: "Disease Management",
      description: "Treatment and management of eye conditions including glaucoma, cataracts, macular degeneration, and diabetic eye disease. We provide ongoing monitoring and advanced treatment options to preserve your vision and eye health.",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Glaucoma Treatment", "Cataract Surgery", "Diabetic Eye Care", "Macular Degeneration"],
    },
    {
      id: "pediatric-eye-care",
      icon: Heart,
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children including vision screenings, eye exams, and treatment of childhood vision problems. Our gentle approach helps children feel comfortable while ensuring proper visual development.",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Vision Screenings", "Lazy Eye Treatment", "Eye Coordination", "Sports Vision"],
    },
    {
      id: "emergency-eye-care",
      icon: Shield,
      title: "Emergency Eye Care",
      description: "Prompt treatment for eye injuries, infections, and urgent conditions. Our clinic provides same-day appointments for emergencies to protect your vision and provide immediate relief from eye trauma or sudden vision changes.",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Same-Day Appointments", "Foreign Object Removal", "Infection Treatment", "Eye Injury Care"],
    },
    {
      id: "dry-eye-treatment",
      icon: Activity,
      title: "Dry Eye Treatment",
      description: "Advanced treatments for chronic dry eye syndrome including prescription medications, punctal plugs, and lifestyle recommendations. We identify the underlying cause and create personalized treatment plans for lasting relief.",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["IPL Therapy", "Punctal Plugs", "Prescription Drops", "Lifestyle Counseling"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-blue-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-white mb-4">Our Services</h1>
            <p className="text-xl text-blue-50">
              Comprehensive eye care solutions for your entire family
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">Complete Eye Care Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From routine eye exams to advanced treatments, we offer a full spectrum of services 
              to meet all your vision and eye health needs.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`grid md:grid-cols-2 gap-6 ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`relative h-80 ${!isEven ? 'md:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <Icon className="h-7 w-7 text-blue-600" />
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h3 className="text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="text-gray-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 w-fit"
                        onClick={() => window.location.hash = `#service?id=${service.id}`}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-blue-900 mb-4">Insurance & Financing</h2>
            <p className="text-gray-600 mb-8">
              We accept most major insurance plans and offer flexible financing options to make 
              quality eye care accessible to everyone.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-gray-900 mb-2">Insurance Accepted</h4>
                  <p className="text-gray-600 text-sm">Most major vision and medical insurance plans</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-gray-900 mb-2">Flexible Payment</h4>
                  <p className="text-gray-600 text-sm">Payment plans available for all services</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-gray-900 mb-2">Affordable Care</h4>
                  <p className="text-gray-600 text-sm">Competitive pricing and special packages</p>
                </CardContent>
              </Card>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Us About Insurance
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Experience Better Vision?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and discover the difference comprehensive eye care can make.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Book An Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
