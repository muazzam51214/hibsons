"use client";
import api from "@/libs/axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiBuilding, BiGlobe } from "react-icons/bi";
import {
  FiClock,
  FiUser,
  FiMail,
  FiPhone,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const DiscoveryCallBooking = () => {
  const [submitting, setSubmitting] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<
    Record<string, string[]>
  >({});
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    serviceInterested: [] as string[],
    note: "",
    websiteUrl: "",
  });

  const generateTimeSlots = (
    startHour: number = 8,
    endHour: number = 18,
    intervalMin: number = 30
  ): string[] => {
    const slots: string[] = [];

    for (
      let minutes = startHour * 60;
      minutes <= endHour * 60;
      minutes += intervalMin
    ) {
      const h24 = Math.floor(minutes / 60);
      const m = minutes % 60;

      const period = h24 >= 12 ? "PM" : "AM";
      const h12 = ((h24 + 11) % 12) + 1; // 0‑23 ➜ 1‑12
      const hrStr = h12.toString().padStart(2, "0");
      const minStr = m.toString().padStart(2, "0");

      slots.push(`${hrStr}:${minStr} ${period}`);
    }

    return slots;
  };

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push(date);
    }

    return days;
  };

  // Check if a date is available (sample logic - replace with your API call)
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Only allow future dates and not weekends (sample)
    return date >= today && date.getDay() !== 0 && date.getDay() !== 6;
  };

  // Load available slots for a selected date (mock implementation)
  const loadAvailableSlots = (date: Date) => {
    // In a real app, you would fetch this from your API
    const dateStr = date.toISOString().split("T")[0];
    const slots = generateTimeSlots();

    // Randomly remove some slots to simulate availability
    const available = slots.filter(() => Math.random() > 0.3);
    setAvailableSlots({ ...availableSlots, [dateStr]: available });
  };

const combineDateAndTime = (date: Date, time: string): string => {
  const [t, meridiem] = time.split(" ");
  const [hour, minute] = t.split(":").map(Number);
  let h = hour;
  const m = minute;

  if (meridiem === "PM" && h < 12) h += 12;
  if (meridiem === "AM" && h === 12) h = 0;

  const dt = new Date(date);
  dt.setHours(h, m, 0, 0);
  return dt.toISOString();
};

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
      loadAvailableSlots(date);
    }
  };

  // Handle month navigation
  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + (direction === "prev" ? -1 : 1),
        1
      )
    );
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time.");
      return;
    }

    const payload = {
      prefferedDateTime: combineDateAndTime(selectedDate, selectedTime),
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      serviceInterested: formData.serviceInterested,
      note: formData.note,
      websiteUrl: formData.websiteUrl,
    };

    try {
      await api.post("/api/leads", payload);
      toast.success("Your discovery call has been booked!");
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Failed to submit request");
    } finally {
      setSubmitting(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        serviceInterested: [],
        note: "",
        websiteUrl: "",
      });
    }
  };

  // Calendar days for current view
  const calendarDays = generateCalendarDays();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Offer Content (30%) */}
          <div className="lg:w-3/12 lg:pr-8 mb-10 lg:mb-0">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">
                Limited-Time Offer
              </h3>
              <p className="text-gray-700 mb-6">
                Book a call now for your 100% FREE no-strings-attached
                recruitment strategy session and as a thank you we&apos;ll send you:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    5 Lessons on Building A Winning Team
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">64 Swipe & Deploy Files</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">12+ Agency SOPs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    100+ Templates for Hiring, Onboarding and Training
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Hiring Secrets Book</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Form (70%) */}
          <div className="lg:w-9/12 lg:pl-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Discovery Call
              </h2>
              <p className="text-gray-600 mb-8">
                Select a date and time that works for you
              </p>

              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FiChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentMonth.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <button
                  onClick={() => navigateMonth("next")}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FiChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="mb-8">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium text-gray-500 py-1"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((date, index) => {
                    if (!date) {
                      return (
                        <div key={`empty-${index}`} className="h-10"></div>
                      );
                    }

                    const isAvailable = isDateAvailable(date);
                    const isSelected =
                      selectedDate &&
                      date.toDateString() === selectedDate.toDateString();
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const isToday =
                      date.toDateString() === today.toDateString();

                    return (
                      <button
                        key={date.toISOString()}
                        onClick={() => handleDateSelect(date)}
                        disabled={!isAvailable}
                        className={`h-10 rounded-lg flex items-center justify-center text-sm transition-colors
                          ${
                            isSelected
                              ? "bg-indigo-600 text-white"
                              : isToday
                              ? "border border-indigo-300 bg-indigo-50 text-indigo-700"
                              : isAvailable
                              ? "hover:bg-gray-200 text-gray-700"
                              : "text-gray-400 cursor-not-allowed"
                          }
                        `}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Date Display */}
              {selectedDate && (
                <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
                  <h3 className="font-medium text-indigo-800 mb-1">
                    Selected Date
                  </h3>
                  <p className="text-lg text-gray-900">
                    {formatDate(selectedDate)}
                  </p>
                </div>
              )}

              {/* Time Slot Selection */}
              {selectedDate && (
                <div className="mb-8">
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                    <FiClock className="w-5 h-5 text-indigo-600 mr-2" />
                    Available Time Slots (8 AM - 12 PM)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableSlots[
                      selectedDate.toISOString().split("T")[0]
                    ]?.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg border text-center transition-all ${
                          selectedTime === time
                            ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                            : "border-gray-300 hover:border-indigo-300"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Form */}
              {selectedTime && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <BiBuilding className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="companyName"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Company Name"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              companyName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="contactPerson"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Full Name"
                          value={formData.contactPerson}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contactPerson: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Website Url
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <BiGlobe className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="url"
                          id="websiteUrl"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter Company's Website URL"
                          value={formData.websiteUrl}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              websiteUrl: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What role are you looking to hire first? (Select all
                        that apply)
                      </label>
                      <div className="space-y-2">
                        {[
                          "I want More Leads & Consistency (Marketing Assistant)",
                          "I want Someone to Book Appointments for Me (Sales Development Rep)",
                          "Better Client Delivery Model and Management (Account Manager)",
                          "Inbox & Calendar Management (Executive Assistant)",
                        ].map((service) => (
                          <div key={service} className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name="serviceInterested"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                checked={formData.serviceInterested.includes(
                                  service
                                )}
                                onChange={() => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    serviceInterested:
                                      prev.serviceInterested.includes(service)
                                        ? prev.serviceInterested.filter(
                                            (s) => s !== service
                                          )
                                        : [...prev.serviceInterested, service],
                                  }));
                                  
                                }}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor={service}
                                className="font-medium text-gray-700"
                              >
                                {service}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="note"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Anything else we should know?
                      </label>
                      <textarea
                        id="note"
                        rows={3}
                        className="block w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
                        placeholder="Specific needs, questions, etc."
                        value={formData.note}
                        onChange={(e) =>
                          setFormData({ ...formData, note: e.target.value })
                        }
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl ${
                          submitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {submitting
                          ? "Submitting..."
                          : "Book My Discovery Call"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCallBooking;
