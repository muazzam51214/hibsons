import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiClock,
  FiInbox,
  FiCalendar,
  FiTarget,
  FiLifeBuoy,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const ExecutiveAssistantMain = () => {
  const painPoints = [
    {
      icon: <FiClock className="w-6 h-6 text-indigo-600" />,
      title: "Never Miss Deadlines",
      description:
        "Your EA will track and manage all important dates and deliverables",
    },
    {
      icon: <FiInbox className="w-6 h-6 text-indigo-600" />,
      title: "End Admin Overload",
      description:
        "Delegate email management, data entry, and document organization",
    },
    {
      icon: <FiCalendar className="w-6 h-6 text-indigo-600" />,
      title: "Simplify Client Follow-Ups",
      description: "Automated reminders and systematic follow-up processes",
    },
    {
      icon: <FiZap className="w-6 h-6 text-indigo-600" />,
      title: "Delegate Tedious Tasks",
      description: "Offload repetitive work that drains your productivity",
    },
    {
      icon: <FiLifeBuoy className="w-6 h-6 text-indigo-600" />,
      title: "Reclaim Work-Life Balance",
      description: "Regain personal time by delegating time-consuming tasks",
    },
    {
      icon: <FiInbox className="w-6 h-6 text-indigo-600" />,
      title: "Stop Inbox Chaos",
      description: "Professional email management and prioritization",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Streamline Scheduling",
      description: "Efficient calendar management and meeting coordination",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-indigo-600" />,
      title: "Focus on Growth",
      description: "Free up mental space for strategic business decisions",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-indigo-600">Executive Assistants</span> That
              Buy Back Your Time
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              They'll handle your scheduling, email management, and
              administrative tasks, letting you focus on vision and growth. We
              ensure perfect matches and provide ongoing training to keep skills
              sharp.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/get-started"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book A Discovery Call
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/executive-assistant.jpg"
                alt="Executive assistant working remotely"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Pain Points Section */}
        <div className="py-12 bg-indigo-50 rounded-xl mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              Pain Points Solved
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Executive Assistants{" "}
              <span className="text-indigo-600">Fix For You</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                  {point.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/ea-skills.jpg"
                alt="Executive assistant skills"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Skills Our{" "}
              <span className="text-indigo-600">Executive Assistants</span>{" "}
              Master
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Calendar & schedule management (Google/Outlook)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Email filtering, prioritization, and response drafting
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Meeting coordination and follow-up systems
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Travel planning and itinerary management
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Document preparation and file organization
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  CRM and task management system expertise
                </span>
              </li>
            </ul>
            <Link
              href="/get-started"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Book A Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveAssistantMain;
