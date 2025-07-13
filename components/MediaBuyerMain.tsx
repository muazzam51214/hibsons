import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiDollarSign,
  FiTarget,
  FiBarChart,
  FiTrendingUp,
  FiEye,
  FiLayers,
} from "react-icons/fi";

const MediaBuyerMain = () => {
  const benefits = [
    {
      icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
      title: "Optimize Ad Spend",
      description: "No wasted budget, just profitable campaigns that scale",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-indigo-600" />,
      title: "High-Converting Targeting",
      description: "Reach the right audience at the right time with precision",
    },
    {
      icon: <FiBarChart className="w-6 h-6 text-indigo-600" />,
      title: "Performance-Driven Strategy",
      description: "Data-backed decisions that improve results continuously",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Scalable Campaigns",
      description: "Turn small wins into exponential growth opportunities",
    },
    {
      icon: <FiEye className="w-6 h-6 text-indigo-600" />,
      title: "Real-Time Monitoring",
      description: "Instant adjustments to stay ahead of market changes",
    },
    {
      icon: <FiLayers className="w-6 h-6 text-indigo-600" />,
      title: "Multi-Platform Expertise",
      description: "Facebook, Google, TikTok, LinkedIn, and more",
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
      title: "ROI-Focused Approach",
      description: "Every decision ties back to your profitability goals",
    },
    {
      icon: <FiCheck className="w-6 h-6 text-indigo-600" />,
      title: "Creative Optimization",
      description: "Test and refine ad creatives for maximum engagement",
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
              <span className="text-indigo-600">Hibsons Media Buyers</span> That Maximize Your Ad Performance
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Media Buyers do more than just run ads—they strategically optimize every dollar to drive the highest ROI. From targeting the right audience to fine-tuning creatives, we ensure your campaigns scale profitably.
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
                src="/images/media-buyer.jpg"
                alt="Media buyer analyzing ad performance"
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
              Why Hire a Hibsons Media Buyer?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Data-Driven <span className="text-indigo-600">Advertising Excellence</span>
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
                src="/images/media-buyer-skills.jpg"
                alt="Media buyer analyzing data"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Our <span className="text-indigo-600">Media Buyers</span> Deliver
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Full-funnel campaign strategy & execution
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Advanced audience targeting & segmentation
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  A/B testing frameworks for creatives & copy
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Real-time bid adjustments & budget optimization
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Cross-platform campaign management (Meta/Google/TikTok)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Detailed performance reporting & insights
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

export default MediaBuyerMain;