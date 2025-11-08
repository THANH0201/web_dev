import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Bell,
  Download,
  Printer,
  Upload,
  Edit,
  Save
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { toast } from "sonner@2.0.3";

interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  service: string;
  status: "scheduled" | "completed" | "cancelled";
  notes?: string;
  visitHistory?: number;
}

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  lastVisit: string;
  totalVisits: number;
  prescriptions: Prescription[];
  medicalHistory: string;
  appointmentHistory: Appointment[];
}

interface Prescription {
  id: string;
  date: string;
  type: "glasses" | "contacts";
  rightEye: {
    sphere: string;
    cylinder: string;
    axis: string;
    add?: string;
  };
  leftEye: {
    sphere: string;
    cylinder: string;
    axis: string;
    add?: string;
  };
  notes: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export function DoctorDashboardPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("appointments");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [diagnosticNotes, setDiagnosticNotes] = useState("");
  const [newPrescription, setNewPrescription] = useState<Partial<Prescription>>({
    type: "glasses",
    rightEye: { sphere: "", cylinder: "", axis: "" },
    leftEye: { sphere: "", cylinder: "", axis: "" },
    notes: ""
  });

  // Mock data for appointments
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "apt-001",
      patientName: "John Smith",
      patientEmail: "john.smith@email.com",
      patientPhone: "(555) 123-4567",
      date: "2025-10-30",
      time: "09:00 AM",
      service: "Comprehensive Eye Exam",
      status: "scheduled",
      visitHistory: 3
    },
    {
      id: "apt-002",
      patientName: "Emily Johnson",
      patientEmail: "emily.j@email.com",
      patientPhone: "(555) 234-5678",
      date: "2025-10-30",
      time: "10:30 AM",
      service: "Contact Lens Fitting",
      status: "scheduled",
      visitHistory: 1
    },
    {
      id: "apt-003",
      patientName: "Michael Brown",
      patientEmail: "m.brown@email.com",
      patientPhone: "(555) 345-6789",
      date: "2025-10-30",
      time: "02:00 PM",
      service: "Follow-up Visit",
      status: "scheduled",
      visitHistory: 5
    },
    {
      id: "apt-004",
      patientName: "Sarah Davis",
      patientEmail: "sarah.d@email.com",
      patientPhone: "(555) 456-7890",
      date: "2025-10-29",
      time: "11:00 AM",
      service: "Comprehensive Eye Exam",
      status: "completed",
      notes: "Patient reported slight difficulty with night vision. Prescribed corrective lenses.",
      visitHistory: 2
    }
  ]);

  // Mock availability schedule
  const [availability, setAvailability] = useState({
    monday: [
      { time: "09:00 AM", available: true },
      { time: "10:30 AM", available: true },
      { time: "02:00 PM", available: true },
      { time: "03:30 PM", available: true }
    ],
    tuesday: [
      { time: "09:00 AM", available: true },
      { time: "10:30 AM", available: false },
      { time: "02:00 PM", available: true },
      { time: "03:30 PM", available: true }
    ],
    wednesday: [
      { time: "09:00 AM", available: true },
      { time: "10:30 AM", available: true },
      { time: "02:00 PM", available: true },
      { time: "03:30 PM", available: true }
    ],
    thursday: [
      { time: "09:00 AM", available: true },
      { time: "10:30 AM", available: true },
      { time: "02:00 PM", available: true },
      { time: "03:30 PM", available: true }
    ],
    friday: [
      { time: "09:00 AM", available: true },
      { time: "10:30 AM", available: true },
      { time: "02:00 PM", available: false },
      { time: "03:30 PM", available: false }
    ]
  });

  // Mock patients data
  const patients: Patient[] = [
    {
      id: "pat-001",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      dateOfBirth: "1985-05-15",
      lastVisit: "2025-10-15",
      totalVisits: 3,
      medicalHistory: "No significant eye conditions. Family history of glaucoma.",
      prescriptions: [
        {
          id: "prx-001",
          date: "2025-10-15",
          type: "glasses",
          rightEye: { sphere: "-2.00", cylinder: "-0.50", axis: "180" },
          leftEye: { sphere: "-2.25", cylinder: "-0.75", axis: "175" },
          notes: "Progressive lenses recommended"
        }
      ],
      appointmentHistory: []
    },
    {
      id: "pat-002",
      name: "Emily Johnson",
      email: "emily.j@email.com",
      phone: "(555) 234-5678",
      dateOfBirth: "1992-08-22",
      lastVisit: "2025-09-20",
      totalVisits: 1,
      medicalHistory: "First time patient. No known allergies.",
      prescriptions: [],
      appointmentHistory: []
    }
  ];

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    } else {
      window.location.hash = "#login";
    }
  }, []);

  const upcomingAppointments = appointments.filter(
    apt => apt.status === "scheduled" && new Date(apt.date) >= new Date()
  ).sort((a, b) => new Date(a.date + " " + a.time).getTime() - new Date(b.date + " " + b.time).getTime());

  const todayAppointments = upcomingAppointments.filter(
    apt => apt.date === new Date().toISOString().split('T')[0]
  );

  const handleMarkCompleted = (appointmentId: string) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId ? { ...apt, status: "completed" as const } : apt
      )
    );
    toast.success("Appointment marked as completed");
  };

  const handleCancelAppointment = (appointmentId: string) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId ? { ...apt, status: "cancelled" as const } : apt
      )
    );
    toast.success("Appointment cancelled");
  };

  const handleSaveDiagnosticNotes = (appointmentId: string) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId ? { ...apt, notes: diagnosticNotes } : apt
      )
    );
    toast.success("Diagnostic notes saved");
    setDiagnosticNotes("");
  };

  const handleSavePrescription = (patientId: string) => {
    toast.success("Prescription saved successfully");
    setNewPrescription({
      type: "glasses",
      rightEye: { sphere: "", cylinder: "", axis: "" },
      leftEye: { sphere: "", cylinder: "", axis: "" },
      notes: ""
    });
  };

  const toggleAvailability = (day: string, timeSlot: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: prev[day as keyof typeof prev].map(slot =>
        slot.time === timeSlot ? { ...slot, available: !slot.available } : slot
      )
    }));
    toast.success("Availability updated");
  };

  const exportPatientRecord = (patient: Patient) => {
    toast.success(`Exporting records for ${patient.name}`);
    // In a real app, this would trigger a download
  };

  const printPatientRecord = (patient: Patient) => {
    toast.success(`Printing records for ${patient.name}`);
    // In a real app, this would open print dialog
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">Doctor Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {currentUser.firstName} {currentUser.lastName}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Today's Appointments</p>
                  <p className="text-blue-900 mt-1">{todayAppointments.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Upcoming</p>
                  <p className="text-blue-900 mt-1">{upcomingAppointments.length}</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Patients</p>
                  <p className="text-blue-900 mt-1">{patients.length}</p>
                </div>
                <User className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">New Notifications</p>
                  <p className="text-blue-900 mt-1">3</p>
                </div>
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Schedule</CardTitle>
                <CardDescription>
                  View and manage your upcoming appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No upcoming appointments</p>
                  ) : (
                    upcomingAppointments.map((appointment) => (
                      <Card key={appointment.id} className="border-l-4 border-l-blue-600">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-gray-900">{appointment.patientName}</h3>
                                <Badge variant={appointment.status === "completed" ? "default" : "secondary"}>
                                  {appointment.status}
                                </Badge>
                                {appointment.visitHistory && (
                                  <span className="text-sm text-gray-500">
                                    Visit #{appointment.visitHistory}
                                  </span>
                                )}
                              </div>
                              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {new Date(appointment.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  {appointment.time}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Eye className="h-4 w-4" />
                                  {appointment.service}
                                </div>
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  {appointment.patientPhone}
                                </div>
                              </div>
                              {appointment.notes && (
                                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                  <p className="text-sm text-gray-700">
                                    <strong>Notes:</strong> {appointment.notes}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-2 ml-4">
                              {appointment.status === "scheduled" && (
                                <>
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button size="sm" variant="outline" onClick={() => setSelectedAppointment(appointment)}>
                                        <FileText className="h-4 w-4 mr-1" />
                                        Add Notes
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>Diagnostic Notes</DialogTitle>
                                        <DialogDescription>
                                          Enter diagnostic notes for {appointment.patientName}
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4">
                                        <Textarea
                                          placeholder="Enter diagnostic findings, observations, and recommendations..."
                                          value={diagnosticNotes}
                                          onChange={(e) => setDiagnosticNotes(e.target.value)}
                                          rows={6}
                                        />
                                      </div>
                                      <DialogFooter>
                                        <Button onClick={() => handleSaveDiagnosticNotes(appointment.id)}>
                                          <Save className="h-4 w-4 mr-2" />
                                          Save Notes
                                        </Button>
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>

                                  <Button
                                    size="sm"
                                    onClick={() => handleMarkCompleted(appointment.id)}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Complete
                                  </Button>

                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => handleCancelAppointment(appointment.id)}
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Cancel
                                  </Button>
                                </>
                              )}
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <User className="h-4 w-4 mr-1" />
                                    View Patient
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Patient Information</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Name</Label>
                                        <p className="text-gray-900">{appointment.patientName}</p>
                                      </div>
                                      <div>
                                        <Label>Email</Label>
                                        <p className="text-gray-900">{appointment.patientEmail}</p>
                                      </div>
                                      <div>
                                        <Label>Phone</Label>
                                        <p className="text-gray-900">{appointment.patientPhone}</p>
                                      </div>
                                      <div>
                                        <Label>Total Visits</Label>
                                        <p className="text-gray-900">{appointment.visitHistory || 0}</p>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Availability Tab */}
          <TabsContent value="availability">
            <Card>
              <CardHeader>
                <CardTitle>Manage Availability</CardTitle>
                <CardDescription>
                  Set your available time slots for patient bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(availability).map(([day, slots]) => (
                    <div key={day} className="border rounded-lg p-4">
                      <h3 className="text-gray-900 mb-4 capitalize">{day}</h3>
                      <div className="grid md:grid-cols-4 gap-3">
                        {slots.map((slot) => (
                          <div
                            key={slot.time}
                            className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              slot.available
                                ? "border-green-500 bg-green-50"
                                : "border-gray-300 bg-gray-100"
                            }`}
                            onClick={() => toggleAvailability(day, slot.time)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm">{slot.time}</span>
                              {slot.available ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <XCircle className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>Patient Records</CardTitle>
                <CardDescription>
                  View patient details, history, and manage prescriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <Card key={patient.id} className="border-l-4 border-l-purple-600">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-2">{patient.name}</h3>
                            <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-600 mb-3">
                              <div>Email: {patient.email}</div>
                              <div>Phone: {patient.phone}</div>
                              <div>Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}</div>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                              <strong>Medical History:</strong> {patient.medicalHistory}
                            </div>
                            {patient.prescriptions.length > 0 && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm mb-2"><strong>Latest Prescription:</strong></p>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div>
                                    <strong>Right Eye:</strong> SPH {patient.prescriptions[0].rightEye.sphere}, 
                                    CYL {patient.prescriptions[0].rightEye.cylinder}, 
                                    AXIS {patient.prescriptions[0].rightEye.axis}
                                  </div>
                                  <div>
                                    <strong>Left Eye:</strong> SPH {patient.prescriptions[0].leftEye.sphere}, 
                                    CYL {patient.prescriptions[0].leftEye.cylinder}, 
                                    AXIS {patient.prescriptions[0].leftEye.axis}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4 mr-1" />
                                  New Prescription
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle>Create Prescription for {patient.name}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label>Prescription Type</Label>
                                    <Select
                                      value={newPrescription.type}
                                      onValueChange={(value: "glasses" | "contacts") =>
                                        setNewPrescription({ ...newPrescription, type: value })
                                      }
                                    >
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="glasses">Glasses</SelectItem>
                                        <SelectItem value="contacts">Contact Lenses</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="mb-3">Right Eye</h4>
                                      <div className="space-y-3">
                                        <div>
                                          <Label>Sphere (SPH)</Label>
                                          <Input placeholder="e.g., -2.00" />
                                        </div>
                                        <div>
                                          <Label>Cylinder (CYL)</Label>
                                          <Input placeholder="e.g., -0.50" />
                                        </div>
                                        <div>
                                          <Label>Axis</Label>
                                          <Input placeholder="e.g., 180" />
                                        </div>
                                        <div>
                                          <Label>Add (Optional)</Label>
                                          <Input placeholder="e.g., +2.00" />
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="mb-3">Left Eye</h4>
                                      <div className="space-y-3">
                                        <div>
                                          <Label>Sphere (SPH)</Label>
                                          <Input placeholder="e.g., -2.25" />
                                        </div>
                                        <div>
                                          <Label>Cylinder (CYL)</Label>
                                          <Input placeholder="e.g., -0.75" />
                                        </div>
                                        <div>
                                          <Label>Axis</Label>
                                          <Input placeholder="e.g., 175" />
                                        </div>
                                        <div>
                                          <Label>Add (Optional)</Label>
                                          <Input placeholder="e.g., +2.00" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <Label>Prescription Notes</Label>
                                    <Textarea
                                      placeholder="Additional notes or recommendations..."
                                      rows={3}
                                    />
                                  </div>

                                  <div>
                                    <Label>Attach Test Results (Optional)</Label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                      <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                                      <p className="text-sm text-gray-600 mb-2">
                                        Upload eye test images or measurements
                                      </p>
                                      <Button variant="outline" size="sm">
                                        Choose Files
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button onClick={() => handleSavePrescription(patient.id)}>
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Prescription
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => exportPatientRecord(patient)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Export
                            </Button>

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => printPatientRecord(patient)}
                            >
                              <Printer className="h-4 w-4 mr-1" />
                              Print
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  New and changed appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border-l-4 border-l-blue-600 bg-blue-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm mb-1">
                          <strong>New Appointment:</strong> Emily Johnson
                        </p>
                        <p className="text-xs text-gray-600">
                          Contact Lens Fitting - Oct 30, 2025 at 10:30 AM
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                      <Bell className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>

                  <div className="p-4 border-l-4 border-l-orange-600 bg-orange-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm mb-1">
                          <strong>Rescheduled:</strong> Michael Brown
                        </p>
                        <p className="text-xs text-gray-600">
                          Changed from Oct 29 to Oct 30, 2025 at 02:00 PM
                        </p>
                        <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                      </div>
                      <Bell className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>

                  <div className="p-4 border-l-4 border-l-green-600 bg-green-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm mb-1">
                          <strong>Reminder:</strong> John Smith appointment tomorrow
                        </p>
                        <p className="text-xs text-gray-600">
                          Comprehensive Eye Exam - Oct 30, 2025 at 09:00 AM
                        </p>
                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                      </div>
                      <Bell className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
