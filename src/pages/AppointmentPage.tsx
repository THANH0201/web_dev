import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Clock, Calendar as CalendarIcon, Info } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

// Generate time slots for a day (9 AM to 5 PM, 60-minute sessions)
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 17; hour++) {
    const displayHour = hour > 12 ? hour - 12 : hour;
    const period = hour >= 12 ? "PM" : "AM";
    const startTime = `${displayHour}:00 ${period}`;
    const endHour = hour + 1;
    const endDisplayHour = endHour > 12 ? endHour - 12 : endHour;
    const endPeriod = endHour >= 12 ? "PM" : "AM";
    const endTime = `${endDisplayHour}:00 ${endPeriod}`;
    
    slots.push({
      id: hour,
      startTime,
      endTime,
      display: `${startTime} - ${endTime}`,
      available: Math.random() > 0.3, // Random availability for demo
    });
  }
  return slots;
};

export function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [timeSlots] = useState(generateTimeSlots());

  const handleTimeSlotClick = (slot: any) => {
    if (!slot.available) return;
    
    // Format date as YYYY-MM-DD
    const dateStr = selectedDate.toISOString().split('T')[0];
    // Navigate to confirmation page with date and time
    window.location.hash = `#appointment-confirm?date=${dateStr}&time=${encodeURIComponent(slot.display)}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Disable past dates
  const disabledDays = {
    before: new Date(),
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-blue-900 mb-4">Book An Appointment</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a date and time that works best for you. Our expert eye care professionals are ready to help you maintain your vision health.
            </p>
          </div>

          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Appointments are 60 minutes long. Please arrive 10 minutes early to complete any necessary paperwork. If you need to cancel or reschedule, please contact us at least 24 hours in advance.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-blue-600" />
                  Select a Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    disabled={disabledDays}
                    className="rounded-md border"
                  />
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Selected Date:</p>
                  <p className="text-blue-900">{formatDate(selectedDate)}</p>
                  {isToday(selectedDate) && (
                    <Badge className="mt-2 bg-blue-600">Today</Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Time Slots Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Available Time Slots
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  {formatDate(selectedDate)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => handleTimeSlotClick(slot)}
                      disabled={!slot.available}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        slot.available
                          ? "border-gray-200 hover:border-blue-600 hover:bg-blue-50 cursor-pointer"
                          : "border-gray-100 bg-gray-50 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-gray-900">{slot.display}</p>
                            <p className="text-sm text-gray-500">60 minutes</p>
                          </div>
                        </div>
                        {slot.available ? (
                          <Badge variant="outline" className="border-green-600 text-green-600">
                            Available
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-gray-400 text-gray-400">
                            Booked
                          </Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-600"></div>
                      <span className="text-gray-600">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="text-gray-600">Booked</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>What to Expect at Your Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-blue-900 mb-2">Comprehensive Eye Exam</h3>
                  <p className="text-sm text-gray-600">
                    Complete evaluation of your vision and eye health, including retinal imaging and pressure testing.
                  </p>
                </div>
                <div>
                  <h3 className="text-blue-900 mb-2">Expert Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Discuss your vision concerns with our experienced optometrists and receive personalized recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="text-blue-900 mb-2">Prescription & Fitting</h3>
                  <p className="text-sm text-gray-600">
                    If needed, receive updated prescriptions and professional assistance with eyewear selection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
