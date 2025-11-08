import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Eye, 
  Glasses, 
  TestTube, 
  Zap, 
  Stethoscope, 
  Heart, 
  Shield, 
  Activity,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Award,
  ArrowLeft
} from "lucide-react";

export function ServiceDetailPage() {
  const [serviceId, setServiceId] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const id = params.get('id');
    if (id) setServiceId(id);
  }, []);

  const services = {
    "comprehensive-eye-exams": {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      shortDescription: "Complete eye health evaluations using advanced diagnostic technology to detect vision problems and eye diseases early.",
      fullDescription: "Our comprehensive eye examinations go far beyond a simple vision screening. Using state-of-the-art diagnostic equipment and thorough evaluation techniques, our experienced optometrists assess every aspect of your eye health and visual function. We believe in preventive care and early detection, which is why our exams are designed to catch potential problems before they become serious.",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Visual Acuity Testing",
        "Refraction Assessment", 
        "Eye Pressure Measurement",
        "Retinal Examination",
        "Color Vision Testing",
        "Peripheral Vision Test",
        "Eye Coordination Assessment",
        "Digital Retinal Imaging"
      ],
      benefits: [
        "Early detection of eye diseases",
        "Updated prescriptions for optimal vision",
        "Prevention of vision problems",
        "Detection of systemic health issues",
        "Peace of mind about eye health"
      ],
      duration: "45-60 minutes",
      pricing: "Starting at $150",
      frequency: "Annually recommended"
    },
    "eyeglasses-frames": {
      icon: Glasses,
      title: "Eyeglasses & Frames",
      shortDescription: "Wide selection of designer frames and prescription lenses customized to your vision needs and personal style.",
      fullDescription: "Your eyeglasses are more than just a vision correction tool—they're a fashion statement and an extension of your personality. Our extensive collection features hundreds of designer and affordable frames to suit every style, face shape, and budget. Our experienced opticians provide personalized fitting services and expert guidance to help you select the perfect frames.",
      image: "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Designer Frames Collection",
        "Custom Prescription Lenses",
        "Anti-Glare Coating",
        "Blue Light Protection",
        "Scratch-Resistant Coating",
        "UV Protection",
        "Progressive Lenses",
        "High-Index Lenses"
      ],
      benefits: [
        "Express your personal style",
        "Optimal vision correction",
        "Reduced eye strain",
        "Protection from harmful light",
        "Durable and long-lasting"
      ],
      duration: "30-45 minutes",
      pricing: "Starting at $150",
      frequency: "As needed"
    },
    "contact-lenses": {
      icon: TestTube,
      title: "Contact Lenses",
      shortDescription: "Expert fitting and comprehensive selection of contact lenses including daily, monthly, and specialty lenses.",
      fullDescription: "Contact lenses offer freedom and flexibility that glasses can't match. Whether you're an athlete, a professional, or simply prefer the convenience of contacts, our specialists will help you find the perfect lenses for your lifestyle and vision needs. We provide comprehensive fitting services and education to ensure your contacts are comfortable, healthy, and provide crystal-clear vision.",
      image: "https://images.unsplash.com/photo-1627260125320-fbafe86e341e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbGVuc2VzJTIwY2FyZXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Daily Disposable Lenses",
        "Monthly Replacement Lenses",
        "Toric Lenses for Astigmatism",
        "Multifocal Lenses",
        "Colored Contact Lenses",
        "Professional Fitting",
        "Trial Lenses Available",
        "Care Product Recommendations"
      ],
      benefits: [
        "Natural field of view",
        "Freedom from glasses",
        "Ideal for sports and activities",
        "No fogging or rain interference",
        "Comfortable all-day wear"
      ],
      duration: "60-90 minutes (initial fitting)",
      pricing: "Starting at $200/year",
      frequency: "Regular check-ups required"
    },
    "lasik-surgery": {
      icon: Zap,
      title: "LASIK Surgery",
      shortDescription: "Advanced laser vision correction procedures to reduce or eliminate dependence on glasses and contacts.",
      fullDescription: "LASIK (Laser-Assisted In Situ Keratomileusis) is a revolutionary procedure that has helped millions of people achieve clear vision without glasses or contacts. Using advanced laser technology, we precisely reshape your cornea to correct refractive errors. Our experienced surgeons use the latest bladeless LASIK technology for the safest, most accurate results possible.",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Bladeless LASIK Technology",
        "Custom Wavefront Treatment",
        "Free Consultation",
        "Lifetime Warranty Program",
        "Same-Day Procedure",
        "Minimal Downtime",
        "Quick Recovery",
        "Financing Options Available"
      ],
      benefits: [
        "Freedom from glasses and contacts",
        "Improved quality of life",
        "Clear vision within 24 hours",
        "Long-lasting results",
        "Cost-effective long-term"
      ],
      duration: "15 minutes per eye",
      pricing: "Starting at $2,000/eye",
      frequency: "One-time procedure"
    },
    "disease-management": {
      icon: Stethoscope,
      title: "Disease Management",
      shortDescription: "Treatment and management of eye conditions including glaucoma, cataracts, macular degeneration, and diabetic eye disease.",
      fullDescription: "Many eye diseases develop slowly and without symptoms, making regular monitoring and early treatment crucial for preserving your vision. Our comprehensive disease management programs provide ongoing care for chronic eye conditions, utilizing the latest diagnostic tools and treatment protocols to maintain your eye health and prevent vision loss.",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Glaucoma Treatment & Monitoring",
        "Cataract Surgery Referrals",
        "Diabetic Retinopathy Management",
        "Macular Degeneration Treatment",
        "Regular Progress Monitoring",
        "Medication Management",
        "Surgical Coordination",
        "Patient Education"
      ],
      benefits: [
        "Preserve your vision",
        "Prevent disease progression",
        "Improve quality of life",
        "Comprehensive ongoing care",
        "Peace of mind"
      ],
      duration: "Varies by condition",
      pricing: "Consultation required",
      frequency: "Regular monitoring required"
    },
    "pediatric-eye-care": {
      icon: Heart,
      title: "Pediatric Eye Care",
      shortDescription: "Specialized eye care for children including vision screenings, eye exams, and treatment of childhood vision problems.",
      fullDescription: "Children's eyes are constantly developing, making early detection and treatment of vision problems crucial for their overall development and academic success. Our pediatric eye care specialists use gentle, age-appropriate techniques to examine children's eyes and diagnose any vision or eye health issues. We create a comfortable, friendly environment that puts children at ease.",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Infant Vision Screenings",
        "School-Age Eye Exams",
        "Lazy Eye (Amblyopia) Treatment",
        "Eye Coordination Therapy",
        "Learning-Related Vision Problems",
        "Sports Vision Training",
        "Myopia Control Programs",
        "Kid-Friendly Frame Selection"
      ],
      benefits: [
        "Support academic success",
        "Detect problems early",
        "Ensure proper visual development",
        "Comfortable experience for kids",
        "Specialized expertise"
      ],
      duration: "30-45 minutes",
      pricing: "Starting at $100",
      frequency: "Annually recommended"
    },
    "emergency-eye-care": {
      icon: Shield,
      title: "Emergency Eye Care",
      shortDescription: "Prompt treatment for eye injuries, infections, and urgent conditions.",
      fullDescription: "Eye emergencies require immediate attention to prevent permanent vision loss. Our clinic provides same-day appointments for urgent eye care needs, including injuries, infections, sudden vision changes, and foreign objects in the eye. Our experienced team is equipped to handle a wide range of emergency situations with the urgency and expertise they require.",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Same-Day Emergency Appointments",
        "Foreign Object Removal",
        "Eye Infection Treatment",
        "Eye Injury Assessment",
        "Sudden Vision Loss Evaluation",
        "Chemical Exposure Treatment",
        "Red Eye Diagnosis",
        "After-Hours Emergency Line"
      ],
      benefits: [
        "Prevent permanent damage",
        "Immediate relief from pain",
        "Expert emergency care",
        "Same-day treatment",
        "Protect your vision"
      ],
      duration: "Varies by emergency",
      pricing: "Consultation required",
      frequency: "As needed"
    },
    "dry-eye-treatment": {
      icon: Activity,
      title: "Dry Eye Treatment",
      shortDescription: "Advanced treatments for chronic dry eye syndrome including prescription medications, punctal plugs, and lifestyle recommendations.",
      fullDescription: "Dry eye syndrome affects millions of people and can significantly impact your quality of life. Our comprehensive approach to dry eye treatment begins with identifying the underlying cause—whether it's environmental factors, medical conditions, or age-related changes. We then create a personalized treatment plan that may include the latest therapies to provide lasting relief from dry, irritated eyes.",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Intense Pulsed Light (IPL) Therapy",
        "Punctal Plug Insertion",
        "Prescription Eye Drops",
        "Lifestyle & Diet Counseling",
        "Meibomian Gland Expression",
        "Environmental Modifications",
        "Omega-3 Supplementation",
        "Ongoing Monitoring"
      ],
      benefits: [
        "Long-lasting relief",
        "Improved comfort",
        "Better vision quality",
        "Reduced irritation",
        "Enhanced quality of life"
      ],
      duration: "Varies by treatment",
      pricing: "Starting at $200",
      frequency: "Ongoing management"
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Button 
            onClick={() => window.location.hash = "#services"}
            className="bg-blue-600 hover:bg-blue-700"
          >
            View All Services
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center bg-blue-900">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
              <Badge className="bg-blue-600 text-white px-4 py-1">
                Premium Service
              </Badge>
            </div>
            <h1 className="text-white mb-4">{service.title}</h1>
            <p className="text-xl text-blue-50">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-gray-900 mb-2">Duration</h4>
                <p className="text-gray-600">{service.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-gray-900 mb-2">Pricing</h4>
                <p className="text-gray-600">{service.pricing}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-gray-900 mb-2">Frequency</h4>
                <p className="text-gray-600">{service.frequency}</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-blue-900 mb-6">About This Service</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What's Included */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900">What's Included</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-gray-900">Key Benefits</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-blue-900 mb-4">How It Works</h2>
            <p className="text-gray-600">
              Getting started with {service.title.toLowerCase()} is easy. Here's what to expect:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h4 className="text-gray-900 mb-2">Schedule</h4>
                <p className="text-gray-600 text-sm">
                  Book your appointment online or by phone
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h4 className="text-gray-900 mb-2">Consultation</h4>
                <p className="text-gray-600 text-sm">
                  Meet with our specialists for evaluation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h4 className="text-gray-900 mb-2">Treatment</h4>
                <p className="text-gray-600 text-sm">
                  Receive personalized care and treatment
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h4 className="text-gray-900 mb-2">Follow-up</h4>
                <p className="text-gray-600 text-sm">
                  Ongoing support and monitoring
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference our specialized care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => window.location.hash = "#appointment"}
            >
              Book An Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-blue-800"
              onClick={() => window.location.hash = "#contact"}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-blue-900 mb-4">Insurance & Financing</h2>
            <p className="text-gray-600 mb-6">
              We accept most major insurance plans and offer flexible financing options to make 
              quality eye care accessible and affordable for everyone.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.hash = "#contact"}
            >
              Check Your Insurance Coverage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
