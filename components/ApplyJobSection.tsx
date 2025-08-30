"use client";
import api from "@/libs/axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiBook,
  FiLinkedin,
  FiFile,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import FileUpload from "./FileUpload";
import { useRouter } from "next/navigation";

interface Question {
  text: string;
  type: "text" | "textarea" | "select" | "radio" | "checkbox";
  options?: string[];
  required?: boolean;
}

const ApplyJobSection = () => {
  const params = useParams();
  const router = useRouter();
  const jobSlug = params.slug as string;
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newJobId, setNewJobId] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    dob: "",
    education: "",
    linkedInUrl: "",
    resumeUrl: "",
    answers: [] as string[],
  });

  useEffect(() => {
    const fetchJobQuestions = async () => {
      try {
        const res = await api.get(`/api/jobs/slug/${jobSlug}`);

        setQuestions(res.data.singleJob.questions);
        setNewJobId(res.data.singleJob._id);
      } catch (err) {
        toast.error("Failed to load job questions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobQuestions();
  }, [jobSlug]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...formData.answers];
    newAnswers[index] = value;
    setFormData((prev) => ({ ...prev, answers: newAnswers }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number,
    option: string
  ) => {
    const currentAnswers = formData.answers[questionIndex]
      ? formData.answers[questionIndex].split(",")
      : [];
    const newAnswers = [...formData.answers];

    if (e.target.checked) {
      newAnswers[questionIndex] = [...currentAnswers, option].join(",");
    } else {
      newAnswers[questionIndex] = currentAnswers
        .filter((item) => item !== option)
        .join(",");
    }

    setFormData((prev) => ({ ...prev, answers: newAnswers }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.resumeUrl) {
      toast.error("Please upload your resume");
      return;
    }

    if (!newJobId) {
      toast.error("Job information is missing.");
      return;
    }
    setSubmitting(true);
    try {
      // Submit application data
      const applicationData = {
        ...formData,
        dob: new Date(formData.dob).toISOString(),
        jobId: newJobId.toString(),
      };

      await api.post("/api/application", applicationData);
      toast.success("Application Submitted Successfully");
      router.push("/careers");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  const renderQuestionInput = (question: Question, index: number) => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.answers[index] || ""}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            required={question.required}
          />
        );
      case "textarea":
        return (
          <textarea
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            value={formData.answers[index] || ""}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            required={question.required}
          />
        );
      case "select":
        return (
          <select
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.answers[index] || ""}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            required={question.required}
          >
            <option value="">Select an option</option>
            {question.options?.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="space-y-2">
            {question.options?.map((option, i) => (
              <div key={i} className="flex items-center">
                <input
                  type="radio"
                  id={`q${index}-opt${i}`}
                  name={`question-${index}`}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  checked={formData.answers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                  required={question.required && i === 0}
                />
                <label
                  htmlFor={`q${index}-opt${i}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div className="space-y-2">
            {question.options?.map((option, i) => {
              const currentAnswers = formData.answers[index]
                ? formData.answers[index].split(",")
                : [];
              return (
                <div key={i} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`q${index}-opt${i}`}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={currentAnswers.includes(option)}
                    onChange={(e) => handleCheckboxChange(e, index, option)}
                  />
                  <label
                    htmlFor={`q${index}-opt${i}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200 text-center">
            <p>Loading application form...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <div className="flex items-center mb-8">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 1
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              1
            </div>
            <div
              className={`mx-2 h-1 w-8 ${
                step === 2 ? "bg-indigo-600" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              2
            </div>
            <h3 className="ml-4 text-lg font-medium text-gray-900">
              {step === 1
                ? "Personal Information"
                : "Job Application Questions"}
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
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
                      id="name"
                      name="name"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                        name="email"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="phone"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="education"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Education
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBook className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                      value={formData.education}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="linkedInUrl"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    LinkedIn Profile URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLinkedin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="linkedInUrl"
                      name="linkedInUrl"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedInUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Resume (PDF, max 5MB)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiFile className="h-5 w-5 text-gray-400" />
                    </div>
                    <FileUpload
                      fileType="pdf"
                      onSuccess={(uploadResponse) => {
                        setFormData((prev) => ({
                          ...prev,
                          resumeUrl: uploadResponse.url ?? "",
                        }));
                      }}
                      onProgress={(progress) => {
                        console.log(`Upload progress: ${progress}%`);
                      }}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Next Step <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {questions.map((question, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {question.text}
                      {question.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    {renderQuestionInput(question, index)}
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <FiArrowLeft className="mr-2" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl ${
                      submitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyJobSection;
