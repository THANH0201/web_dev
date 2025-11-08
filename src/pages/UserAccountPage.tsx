import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Lock,
  LogOut,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  XCircle,
  FileText,
  Pill,
  Download
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";

export function UserAccountPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const [showPrescriptionDialog, setShowPrescriptionDialog] = useState(false);
  
  // Get user data from localStorage
  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  });

  // Get appointments from localStorage
  const [appointments, setAppointments] = useState(() => {
    const stored = localStorage.getItem("userAppointments");
    const existingAppointments = stored ? JSON.parse(stored) : [];
    
    // Add sample completed appointments if none exist (for demo purposes)
    if (existingAppointments.length === 0) {
      return [
        {
          date: "September 15, 2025",
          time: "10:00 AM",
          service: "Comprehensive Eye Exam",
          doctorName: "Dr. Sarah Mitchell",
          status: "completed",
          notes: "Annual checkup completed. Prescription updated.",
          bookedAt: "2025-09-01T10:00:00Z"
        },
        {
          date: "March 10, 2025",
          time: "2:30 PM",
          service: "Contact Lens Fitting",
          doctorName: "Dr. Emily Rodriguez",
          status: "completed",
          notes: "New contact lenses prescribed and fitted.",
          bookedAt: "2025-03-01T14:30:00Z"
        }
      ];
    }
    return existingAppointments;
  });

  // Mock prescriptions data
  const [prescriptions] = useState([
    {
      id: "RX-2025-001",
      date: "October 25, 2025",
      doctor: "Dr. Sarah Mitchell",
      diagnosis: "Myopia (Nearsightedness)",
      medications: [
        { name: "Artificial Tears", dosage: "2 drops, 3 times daily", duration: "30 days" },
        { name: "Vitamin A Supplement", dosage: "1 tablet daily", duration: "60 days" }
      ],
      eyePrescription: {
        rightEye: { sphere: "-2.50", cylinder: "-0.75", axis: "180" },
        leftEye: { sphere: "-2.25", cylinder: "-0.50", axis: "175" },
        pd: "63mm"
      },
      notes: "Patient should return for follow-up in 6 months. Recommended daily use of prescribed artificial tears.",
      nextVisit: "April 25, 2026"
    },
    {
      id: "RX-2025-002",
      date: "September 15, 2025",
      doctor: "Dr. Michael Chen",
      diagnosis: "Dry Eye Syndrome",
      medications: [
        { name: "Restasis Eye Drops", dosage: "1 drop twice daily", duration: "90 days" },
        { name: "Omega-3 Supplement", dosage: "2 capsules daily", duration: "Ongoing" }
      ],
      eyePrescription: null,
      notes: "Continue current treatment plan. Increase water intake and reduce screen time.",
      nextVisit: "December 15, 2025"
    },
    {
      id: "RX-2024-045",
      date: "March 10, 2025",
      doctor: "Dr. Emily Rodriguez",
      diagnosis: "Regular Check-up",
      medications: [],
      eyePrescription: {
        rightEye: { sphere: "-2.25", cylinder: "-0.50", axis: "180" },
        leftEye: { sphere: "-2.00", cylinder: "-0.50", axis: "175" },
        pd: "63mm"
      },
      notes: "Vision is stable. No significant changes from previous examination.",
      nextVisit: "September 10, 2025"
    }
  ]);

  // Form state
  const [formData, setFormData] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    dateOfBirth: userData?.dateOfBirth || "",
    address: userData?.address || "",
    city: userData?.city || "",
    state: userData?.state || "",
    zipCode: userData?.zipCode || ""
  });

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.hash = "#home";
    window.location.reload();
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      ...userData,
      ...formData
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUserData(updatedUser);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setFormData({
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      email: userData?.email || "",
      phone: userData?.phone || "",
      dateOfBirth: userData?.dateOfBirth || "",
      address: userData?.address || "",
      city: userData?.city || "",
      state: userData?.state || "",
      zipCode: userData?.zipCode || ""
    });
    setIsEditing(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-600"><CheckCircle2 className="h-3 w-3 mr-1" />Confirmed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "cancelled":
        return <Badge className="bg-red-600"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      case "completed":
        return <Badge className="bg-blue-600"><CheckCircle2 className="h-3 w-3 mr-1" />Completed</Badge>;
      default:
        return <Badge className="bg-blue-600">{status}</Badge>;
    }
  };

  const handleViewPrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
    setShowPrescriptionDialog(true);
  };

  if (!userData) {
    return (
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Please Log In</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view this page.</p>
          <Button 
            onClick={() => window.location.hash = "#login"}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-400px)] py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">My Account</h1>
          <p className="text-gray-600">Manage your profile, appointments, and prescriptions</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <User className="h-10 w-10" />
                  </div>
                  <h3 className="text-gray-900">{userData.firstName} {userData.lastName}</h3>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                </div>

                <Separator className="my-4" />

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveSection("profile")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === "profile"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveSection("appointments")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === "appointments"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                    Appointments
                  </button>
                  <button
                    onClick={() => setActiveSection("prescriptions")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === "prescriptions"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    Prescriptions
                  </button>
                  <button
                    onClick={() => setActiveSection("security")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === "security"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Lock className="h-4 w-4" />
                    Security
                  </button>
                </nav>

                <Separator className="my-4" />

                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full text-red-600 border-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Section */}
            {activeSection === "profile" && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-gray-900">Profile Information</h2>
                    {!isEditing && (
                      <Button
                        onClick={() => setIsEditing(true)}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Edit Profile
                      </Button>
                    )}
                  </div>

                  <form onSubmit={handleSaveProfile}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            disabled={!isEditing}
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            disabled={!isEditing}
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            disabled={!isEditing}
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            disabled={!isEditing}
                            className="pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            disabled={!isEditing}
                            className="pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            disabled={!isEditing}
                            className="pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-4 mt-6">
                        <Button
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Save Changes
                        </Button>
                        <Button
                          type="button"
                          onClick={handleCancelEdit}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Appointments Section */}
            {activeSection === "appointments" && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-gray-900 mb-6">My Appointments</h2>

                  {appointments.length === 0 ? (
                    <div className="text-center py-12">
                      <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-gray-900 mb-2">No Appointments Yet</h3>
                      <p className="text-gray-600 mb-6">
                        You haven't booked any appointments yet.
                      </p>
                      <Button
                        onClick={() => window.location.hash = "#appointment"}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Book An Appointment
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appointments.map((appointment: any, index: number) => (
                        <Card key={index} className="border-l-4 border-l-blue-600">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-gray-900 mb-1">{appointment.service}</h4>
                                <p className="text-sm text-gray-600">
                                  {appointment.doctorName}
                                </p>
                              </div>
                              {getStatusBadge(appointment.status)}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span>{appointment.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>{appointment.time}</span>
                              </div>
                            </div>

                            {appointment.notes && (
                              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                  <span className="text-gray-900">Notes:</span> {appointment.notes}
                                </p>
                              </div>
                            )}

                            {appointment.status !== "cancelled" && appointment.status !== "completed" && (
                              <div className="flex gap-3 mt-4">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                >
                                  Reschedule
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-600 hover:bg-red-50"
                                >
                                  Cancel
                                </Button>
                              </div>
                            )}
                            {appointment.status === "completed" && (
                              <div className="flex gap-3 mt-4">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                  onClick={() => window.location.hash = "#appointment"}
                                >
                                  Book Another Appointment
                                </Button>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Prescriptions Section */}
            {activeSection === "prescriptions" && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-gray-900 mb-6">My Prescriptions</h2>

                  {prescriptions.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-gray-900 mb-2">No Prescriptions Yet</h3>
                      <p className="text-gray-600 mb-6">
                        Your prescriptions from doctor visits will appear here.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {prescriptions.map((prescription, index) => (
                        <Card key={index} className="border-l-4 border-l-green-600 hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-gray-900 mb-1">{prescription.diagnosis}</h4>
                                <p className="text-sm text-gray-600">
                                  {prescription.doctor}
                                </p>
                              </div>
                              <Badge className="bg-green-600">
                                <FileText className="h-3 w-3 mr-1" />
                                {prescription.id}
                              </Badge>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span>Issued: {prescription.date}</span>
                              </div>
                              {prescription.nextVisit && (
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Clock className="h-4 w-4" />
                                  <span>Next Visit: {prescription.nextVisit}</span>
                                </div>
                              )}
                            </div>

                            {prescription.medications.length > 0 && (
                              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center gap-2 text-blue-900 mb-2">
                                  <Pill className="h-4 w-4" />
                                  <span className="text-sm">Medications ({prescription.medications.length})</span>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                                  {prescription.medications.slice(0, 2).map((med: any, idx: number) => (
                                    <li key={idx}>• {med.name}</li>
                                  ))}
                                  {prescription.medications.length > 2 && (
                                    <li>• And {prescription.medications.length - 2} more...</li>
                                  )}
                                </ul>
                              </div>
                            )}

                            <div className="flex gap-3">
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                                onClick={() => handleViewPrescription(prescription)}
                              >
                                View Details
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-blue-600 border-blue-600 hover:bg-blue-50"
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Download PDF
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Security Section */}
            {activeSection === "security" && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-gray-900 mb-6">Change Password</h2>

                  <form className="space-y-6 max-w-md">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          className="pl-9 pr-9"
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

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          className="pl-9 pr-9"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirmNewPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          className="pl-9 pr-9"
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

                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Update Password
                    </Button>
                  </form>

                  <Separator className="my-8" />

                  <div>
                    <h3 className="text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-600 mb-4">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <Button variant="outline">
                      Enable 2FA
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Prescription Details Dialog */}
      <Dialog open={showPrescriptionDialog} onOpenChange={setShowPrescriptionDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Prescription Details</DialogTitle>
            <DialogDescription>
              {selectedPrescription && (
                <span>Prescription ID: {selectedPrescription.id}</span>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedPrescription && (
            <div className="space-y-6 mt-4">
              {/* Header Information */}
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Date Issued</p>
                  <p className="text-gray-900">{selectedPrescription.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Prescribed By</p>
                  <p className="text-gray-900">{selectedPrescription.doctor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Diagnosis</p>
                  <p className="text-gray-900">{selectedPrescription.diagnosis}</p>
                </div>
                {selectedPrescription.nextVisit && (
                  <div>
                    <p className="text-sm text-gray-600">Next Visit</p>
                    <p className="text-gray-900">{selectedPrescription.nextVisit}</p>
                  </div>
                )}
              </div>

              {/* Eye Prescription */}
              {selectedPrescription.eyePrescription && (
                <div>
                  <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    Eye Prescription
                  </h4>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-3 text-sm text-gray-600">Eye</th>
                          <th className="text-left p-3 text-sm text-gray-600">Sphere (SPH)</th>
                          <th className="text-left p-3 text-sm text-gray-600">Cylinder (CYL)</th>
                          <th className="text-left p-3 text-sm text-gray-600">Axis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3 text-gray-900">Right Eye (OD)</td>
                          <td className="p-3 text-gray-600">{selectedPrescription.eyePrescription.rightEye.sphere}</td>
                          <td className="p-3 text-gray-600">{selectedPrescription.eyePrescription.rightEye.cylinder}</td>
                          <td className="p-3 text-gray-600">{selectedPrescription.eyePrescription.rightEye.axis}</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 text-gray-900">Left Eye (OS)</td>
                          <td className="p-3 text-gray-600">{selectedPrescription.eyePrescription.leftEye.sphere}</td>
                          <td className="p-3 text-gray-600">{selectedPrescription.eyePrescription.leftEye.cylinder}</td>
                          <td className="p-3 text-gray-600">{selectedPrescription.eyePrescription.leftEye.axis}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="p-3 bg-gray-50 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="text-gray-900">Pupillary Distance (PD):</span> {selectedPrescription.eyePrescription.pd}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Medications */}
              {selectedPrescription.medications.length > 0 && (
                <div>
                  <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                    <Pill className="h-5 w-5 text-blue-600" />
                    Medications
                  </h4>
                  <div className="space-y-3">
                    {selectedPrescription.medications.map((med: any, index: number) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h5 className="text-gray-900 mb-2">{med.name}</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-gray-600">Dosage</p>
                              <p className="text-gray-900">{med.dosage}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Duration</p>
                              <p className="text-gray-900">{med.duration}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {selectedPrescription.notes && (
                <div>
                  <h4 className="text-gray-900 mb-3">Doctor's Notes</h4>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">{selectedPrescription.notes}</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  Print Prescription
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
