import { Award, Users, Eye, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Trusted eye care professionals serving the community",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Board-certified optometrists and ophthalmologists",
    },
    {
      icon: Eye,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic and treatment equipment",
    },
    {
      icon: Shield,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans for optimal results",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 mb-4">About Vision Clinic</h2>
            <p className="text-gray-600 mb-6">
              At Vision Clinic, we are dedicated to providing exceptional eye care services 
              to patients of all ages. Our experienced team of eye care professionals uses 
              the latest technology to diagnose and treat a wide range of vision conditions.
            </p>
            <p className="text-gray-600 mb-8">
              From routine eye exams to complex surgical procedures, we offer comprehensive 
              solutions tailored to your unique needs. Your vision is our passion, and we 
              strive to deliver the highest quality care in a comfortable, welcoming environment.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Eye examination"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
