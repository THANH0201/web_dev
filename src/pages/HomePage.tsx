import { HeroSection } from "../components/HeroSection";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Eye, Award, Heart, ArrowRight } from "lucide-react";

export function HomePage() {
  const highlights = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description:
        "Complete vision assessments using state-of-the-art technology",
    },
    {
      icon: Award,
      title: "25+ Years of Excellence",
      description:
        "Trusted by thousands of satisfied patients in our community",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Personalized treatment plans tailored to your unique needs",
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-blue-900 mb-4">
              Welcome to Vision Clinic
            </h2>
            <p className="text-gray-600 text-lg">
              Your trusted partner for comprehensive eye care
              services. We combine advanced technology with
              compassionate care to protect and enhance your
              vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-900 mb-4">
                Why Choose Vision Clinic?
              </h2>
              <p className="text-gray-600 mb-6">
                At Vision Clinic, we understand that your eyes
                are precious. That's why we're committed to
                providing the highest standard of eye care with
                a personal touch.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Board-certified optometrists and
                    ophthalmologists
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    State-of-the-art diagnostic equipment
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Comprehensive range of services for all ages
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Flexible scheduling and convenient location
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700"
              >
                <a href="#about">Learn More About Us</a>
              </Button>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Eye care professional"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From routine eye exams to advanced surgical
              procedures, we offer comprehensive eye care
              solutions for your entire family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Eye Examinations",
                description:
                  "Comprehensive vision testing and eye health evaluations",
                image:
                  "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Eyeglasses & Contact Lenses",
                description:
                  "Wide selection of frames and lens options",
                image:
                  "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Advanced Eye Care",
                description:
                  "Treatment for eye diseases and surgical procedures",
                image:
                  "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <a href="#services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards better vision. Our
            friendly team is ready to help you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Book An Appointment
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <a href="#contact">Contact Us</a>
            </Button>
            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="#contact">Contact Us</a>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}