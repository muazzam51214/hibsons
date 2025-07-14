"use client";
import { useState } from "react";
import { FiPlus, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useRouter } from "next/navigation";
import type { JobData, Question } from "@/types/job";

export default function CreateJobForm() {
  const router = useRouter();
  const [jobData, setJobData] = useState<JobData>({
    title: "",
    description: "",
    location: "",
    department: "",
    type: "",
    status: "open",
    experience: "",
    questions: [],
  });

  const [newQuestion, setNewQuestion] = useState<Question>({
    text: "",
    type: "text",
    options: [],
  });

  const [newOption, setNewOption] = useState("");
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const addQuestion = () => {
    if (!newQuestion.text) return;

    setJobData({
      ...jobData,
      questions: [...jobData.questions, newQuestion],
    });

    setNewQuestion({
      text: "",
      type: "text",
      options: [],
    });
    setNewOption("");
    setShowQuestionForm(false);
  };

  const addOption = () => {
    if (!newOption) return;
    setNewQuestion({
      ...newQuestion,
      options: [...newQuestion.options, newOption],
    });
    setNewOption("");
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = [...jobData.questions];
    updatedQuestions.splice(index, 1);
    setJobData({ ...jobData, questions: updatedQuestions });
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...jobData.questions];
    updatedQuestions[questionIndex].options?.splice(optionIndex, 1);
    setJobData({ ...jobData, questions: updatedQuestions });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your API
    console.log("Submitting job:", jobData);
    // router.push("/admin/jobs");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Job Posting
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information Section */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={jobData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Department *
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={jobData.department}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={jobData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Type *
              </label>
              <select
                id="type"
                name="type"
                value={jobData.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Experience Level *
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={jobData.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              value={jobData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        {/* Application Questions Section */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Application Questions
            </h2>
            <button
              type="button"
              onClick={() => setShowQuestionForm(!showQuestionForm)}
              className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
            >
              {showQuestionForm ? (
                <>
                  <FiChevronUp className="mr-1" /> Hide Question Form
                </>
              ) : (
                <>
                  <FiPlus className="mr-1" /> Add Question
                </>
              )}
            </button>
          </div>

          {showQuestionForm && (
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Text *
                </label>
                <input
                  type="text"
                  value={newQuestion.text}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, text: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="What is your experience with...?"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Type *
                </label>
                <select
                  value={newQuestion.type}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      type: e.target.value as any,
                      options:
                        e.target.value === "text" ||
                        e.target.value === "textarea"
                          ? []
                          : newQuestion.options,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="text">Short Answer</option>
                  <option value="textarea">Long Answer</option>
                  <option value="select">Multiple Choice (Select)</option>
                  <option value="radio">Multiple Choice (Radio)</option>
                </select>
              </div>

              {(newQuestion.type === "select" ||
                newQuestion.type === "radio") && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Options *
                  </label>
                  <div className="flex mb-2">
                    <input
                      type="text"
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Add an option"
                    />
                    <button
                      type="button"
                      onClick={addOption}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700"
                    >
                      Add
                    </button>
                  </div>

                  {newQuestion.options.length > 0 && (
                    <div className="space-y-2">
                      {newQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <span className="flex-1 bg-white px-3 py-2 border border-gray-300 rounded-lg">
                            {option}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const updatedOptions = [...newQuestion.options];
                              updatedOptions.splice(index, 1);
                              setNewQuestion({
                                ...newQuestion,
                                options: updatedOptions,
                              });
                            }}
                            className="ml-2 p-2 text-red-600 hover:text-red-800"
                          >
                            <FiX />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={addQuestion}
                  disabled={
                    !newQuestion.text ||
                    ((newQuestion.type === "select" ||
                      newQuestion.type === "radio") &&
                      newQuestion.options.length === 0)
                  }
                  className={`px-4 py-2 rounded-lg ${
                    !newQuestion.text ||
                    ((newQuestion.type === "select" ||
                      newQuestion.type === "radio") &&
                      newQuestion.options.length === 0)
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  Add Question
                </button>
              </div>
            </div>
          )}

          {jobData.questions.length > 0 ? (
            <div className="space-y-4">
              {jobData.questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {question.text}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {question.type}
                      </p>
                      {question.options && question.options.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {question.options.map((option, optIndex) => (
                            <div key={optIndex} className="flex items-center">
                              <span className="text-sm text-gray-700">
                                {option}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeQuestion(index)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No questions added yet.</p>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            + Create Job Posting
          </button>
        </div>
      </form>
    </div>
  );
}
