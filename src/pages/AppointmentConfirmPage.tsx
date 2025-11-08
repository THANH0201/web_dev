import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Checkbox } from "../components/ui/checkbox";
import { Badge } from "../components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  CheckCircle2,
  Eye,
  EyeOff
} from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

export function AppointmentConfirmPage() {
  const [appointmentDetails, setAppointmentDetails] = useState({ date: "", time: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Simulated user data (would come from auth system)
  const loggedInUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
  };

  useEffect(() => {
    // Parse URL parameters
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.split('?')[1] || '');
    const date = params.get('date');
    const time = params.get('time');
    
    if (date && time) {
      // Format date nicely
      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      setAppointmentDetails({ date: formattedDate, time });
    }

    // Check if user is logged in (simulated - would check actual auth state)
    // For demo purposes, we'll set it to false
    setIsLoggedIn(false);
  }, []);

  const handleConfirmAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save appointment to localStorage
    const appointment = {
      date: appointmentDetails.date,
      time: appointmentDetails.time,
      service: "Comprehensive Eye Exam",
      doctorName: "Dr. Sarah Mitchell",
      status: "confirmed",
      notes: "",
      bookedAt: new Date().toISOString()
    };
    
    // Get existing appointments
    const existingAppointments = localStorage.getItem("userAppointments");
    const appointments = existingAppointments ? JSON.parse(existingAppointments) : [];
    
    // Add new appointment
    appointments.push(appointment);
    localStorage.setItem("userAppointments", JSON.stringify(appointments));
    
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-green-900 mb-4">Appointment Confirmed!</h1>
              <p className="text-gray-600 mb-8">
                Your appointment has been successfully scheduled. We've sent a confirmation email with all the details.
              </p>
            </div>

            <Card className="text-left mb-6">
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-gray-900">{appointmentDetails.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="text-gray-900">{appointmentDetails.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900">Vision Clinic</p>
                    <p className="text-sm text-gray-600">123 Vision Street, Medical City</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.hash = "#account"} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                View My Appointments
              </Button>
              <Button 
                onClick={() => window.location.hash = "#home"} 
                variant="outline"
              >
                Back to Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.print()} 
              >
                Print Confirmation
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => window.location.hash = "#appointment"}
              className="mb-4"
            >
              ← Back to Appointment Selection
            </Button>
            <h1 className="text-blue-900">Confirm Your Appointment</h1>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Appointment Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="text-gray-900">{appointmentDetails.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="text-gray-900">{appointmentDetails.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="text-gray-900">Vision Clinic</p>
                        <p className="text-sm text-gray-600">123 Vision Street, Medical City</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Badge className="bg-blue-600 mb-3">Comprehensive Eye Exam</Badge>
                    <p className="text-sm text-gray-600 mb-4">
                      60-minute appointment including vision testing, eye health evaluation, and consultation.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Visual acuity test</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Retinal examination</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Eye pressure measurement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Prescription update (if needed)</span>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <AlertDescription className="text-sm">
                      Please arrive 10 minutes early. Bring your insurance card and current eyewear if applicable.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - User Information or Login/Register */}
            <div className="lg:col-span-3">
              {isLoggedIn ? (
                // Logged in user - show their information
                <Card>
                  <CardHeader>
                    <CardTitle>Your Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleConfirmAppointment} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>First Name</Label>
                          <Input 
                            value={loggedInUser.firstName} 
                            readOnly 
                            className="bg-gray-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Last Name</Label>
                          <Input 
                            value={loggedInUser.lastName} 
                            readOnly 
                            className="bg-gray-50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input 
                          value={loggedInUser.email} 
                          readOnly 
                          className="bg-gray-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input 
                          value={loggedInUser.phone} 
                          readOnly 
                          className="bg-gray-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any specific concerns or requirements we should know about?"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="confirm-terms" required />
                        <label
                          htmlFor="confirm-terms"
                          className="text-sm text-gray-600 cursor-pointer leading-tight"
                        >
                          I understand the cancellation policy and agree to arrive 10 minutes before my appointment time.
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700" 
                        size="lg"
                      >
                        Confirm Appointment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                // Not logged in - show login/register tabs
                <Card>
                  <CardContent className="p-6">
                    <Tabs defaultValue="register" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="register">Register</TabsTrigger>
                        <TabsTrigger value="login">Login</TabsTrigger>
                      </TabsList>

                      {/* Register Form */}
                      <TabsContent value="register">
                        <div className="mb-4">
                          <h3 className="text-blue-900 mb-2">Create an Account & Book</h3>
                          <p className="text-sm text-gray-600">
                            Register to easily manage your appointments and medical records.
                          </p>
                        </div>
                        <form onSubmit={handleConfirmAppointment} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="register-firstname">First Name</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                  id="register-firstname"
                                  type="text"
                                  placeholder="John"
                                  className="pl-9"
                                  required
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="register-lastname">Last Name</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                  id="register-lastname"
                                  type="text"
                                  placeholder="Doe"
                                  className="pl-9"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-email">Email Address</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="register-email"
                                type="email"
                                placeholder="john.doe@example.com"
                                className="pl-9"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-phone">Phone Number</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="register-phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="pl-9"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-password">Password</Label>
                            <div className="relative">
                              <Input
                                id="register-password"
                                type={showRegisterPassword ? "text" : "password"}
                                placeholder="Create a password"
                                className="pr-9"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              >
                                {showRegisterPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-confirm-password">Confirm Password</Label>
                            <div className="relative">
                              <Input
                                id="register-confirm-password"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Re-enter your password"
                                className="pr-9"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              >
                                {showConfirmPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-notes">Additional Notes (Optional)</Label>
                            <Textarea
                              id="register-notes"
                              placeholder="Any specific concerns or requirements we should know about?"
                              rows={3}
                            />
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox id="register-terms" required />
                            <label
                              htmlFor="register-terms"
                              className="text-sm text-gray-600 cursor-pointer leading-tight"
                            >
                              I understand the cancellation policy and agree to arrive 10 minutes before my appointment time
                            </label>
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700" 
                            size="lg"
                          >
                            Confirm Appointment
                          </Button>
                        </form>
                      </TabsContent>

                      {/* Login Form */}
                      <TabsContent value="login">
                        <div className="mb-4">
                          <h3 className="text-blue-900 mb-2">Login to Your Account</h3>
                          <p className="text-sm text-gray-600">
                            Access your saved information and appointment history.
                          </p>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="login-email">Email Address</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="login-email"
                                type="email"
                                placeholder="john.doe@example.com"
                                className="pl-9"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="login-password">Password</Label>
                            <div className="relative">
                              <Input
                                id="login-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="pr-9"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="remember" />
                              <label
                                htmlFor="remember"
                                className="text-sm text-gray-600 cursor-pointer"
                              >
                                Remember me
                              </label>
                            </div>
                            <button
                              type="button"
                              className="text-sm text-blue-600 hover:text-blue-700"
                            >
                              Forgot password?
                            </button>
                          </div>

                          <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                            Login & Continue
                          </Button>
                        </form>
                      </TabsContent>


                    </Tabs>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
