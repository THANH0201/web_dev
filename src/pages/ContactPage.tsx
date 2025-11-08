import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-white mb-4">Contact Us</h1>
            <p className="text-xl text-blue-50">
              We're here to answer your questions and schedule your appointment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm mb-1">(555) 123-4567</p>
                <p className="text-gray-600 text-sm">(555) 123-4568</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-1">info@visionclinic.com</p>
                <p className="text-gray-600 text-sm">appointments@visionclinic.com</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm mb-1">123 Vision Street</p>
                <p className="text-gray-600 text-sm">Medical City, MC 12345</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm mb-1">Mon-Fri: 8AM-6PM</p>
                <p className="text-gray-600 text-sm">Sat: 9AM-2PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-blue-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or ready to schedule an appointment? Fill out the form below and 
                we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="mt-1" required />
                    <span>
                      I agree to the privacy policy and consent to be contacted by Vision Clinic 
                      regarding my inquiry.
                    </span>
                  </label>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-blue-900 mb-4">Visit Our Clinic</h2>
                <p className="text-gray-600 mb-6">
                  We're conveniently located in the heart of Medical City. Find us easily using the 
                  map below or your favorite navigation app.
                </p>
              </div>

              {/* Map */}
              <Card className="overflow-hidden">
                <div className="w-full h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531654!3d-37.817209979751654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635824721644!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Vision Clinic Location"
                  ></iframe>
                </div>
              </Card>

              {/* Directions Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Getting Here</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs">🚗</span>
                      </div>
                      <div>
                        <p className="text-gray-900">By Car</p>
                        <p>Free parking available in the building garage. Enter from Vision Street.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs">🚇</span>
                      </div>
                      <div>
                        <p className="text-gray-900">By Public Transit</p>
                        <p>Medical City Station is a 5-minute walk. Bus lines 12, 45, and 78 stop nearby.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs">♿</span>
                      </div>
                      <div>
                        <p className="text-gray-900">Accessibility</p>
                        <p>Our clinic is fully wheelchair accessible with elevators and accessible parking.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-gray-900 hover:text-blue-600">
                  Do I need an appointment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we recommend scheduling an appointment to ensure minimal wait time. However, 
                  we do accept walk-ins for urgent eye care needs based on availability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-gray-900 hover:text-blue-600">
                  What insurance do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We accept most major vision and medical insurance plans. Please call our office 
                  to verify if we accept your specific insurance provider.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-gray-900 hover:text-blue-600">
                  What should I bring to my appointment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Please bring your insurance card, a valid ID, any current eyeglasses or contacts, 
                  and a list of medications you're taking. If you're a new patient, arrive 15 minutes 
                  early to complete paperwork.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-gray-900 hover:text-blue-600">
                  How long does an eye exam take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A comprehensive eye exam typically takes 45-60 minutes. If you need dilation, 
                  plan for additional time as your vision may be blurry for 2-4 hours afterward.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Eye Emergency?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            If you're experiencing a serious eye injury or sudden vision loss, please call us 
            immediately or visit the nearest emergency room.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
