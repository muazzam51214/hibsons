import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiZap,
  FiTrendingUp,
  FiPieChart,
  FiUsers,
  FiBarChart2,
  FiCpu,
  FiCode,
} from "react-icons/fi";

const CRMAutomationMain = () => {
  const benefits = [
    {
      icon: <FiZap className="w-6 h-6 text-indigo-600" />,
      title: "Automate & Optimize Workflows",
      description:
        "Eliminate manual tasks and boost efficiency with intelligent automation",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Enhance Lead Nurturing",
      description:
        "AI-driven insights for smarter follow-ups and pipeline management",
    },
    {
      icon: <FiCode className="w-6 h-6 text-indigo-600" />,
      title: "Seamless CRM Integration",
      description: "Tailored solutions that connect all your business tools",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-indigo-600" />,
      title: "Improve Customer Experience",
      description: "Faster responses and personalized interactions at scale",
    },
    {
      icon: <FiPieChart className="w-6 h-6 text-indigo-600" />,
      title: "Scale Without Overhead",
      description: "More productivity with fewer hiring costs",
    },
    {
      icon: <FiCpu className="w-6 h-6 text-indigo-600" />,
      title: "AI-Powered Insights",
      description: "Predictive analytics for smarter business decisions",
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 text-indigo-600" />,
      title: "Real-Time Reporting",
      description: "Custom dashboards with actionable metrics",
    },
    {
      icon: <FiZap className="w-6 h-6 text-indigo-600" />,
      title: "Process Optimization",
      description: "Continuous improvement of your CRM workflows",
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
              <span className="text-indigo-600">
                CRM Automation & AI Experts
              </span>{" "}
              That Transform Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts build intelligent systems that drive growth,
              efficiency, and scalability. From automating repetitive tasks to
              leveraging AI for smarter decision-making, they ensure your
              business operates at peak performance.
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
                src="/images/crm-automation.jpg"
                alt="CRM automation expert at work"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 bg-indigo-50 rounded-xl mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              Why Hire a CRM Automation & AI Expert?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Business Growth Through{" "}
              <span className="text-indigo-600">Intelligent Automation</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {benefits.map((point, index) => (
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
                src="/images/crm-skills.jpg"
                alt="CRM automation skills"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Our <span className="text-indigo-600">CRM Experts</span>{" "}
              Deliver
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Custom workflow automation (Zapier/Make.com/Integromat)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  CRM setup & optimization (HubSpot/Salesforce/Pipedrive)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  AI-powered lead scoring & prioritization
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Custom dashboard & reporting automation
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Email sequence & chatbot integration
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Data migration & system integration
                </span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/get-started"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book A Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAutomationMain;
