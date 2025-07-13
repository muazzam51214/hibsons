import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiSearch,
  FiTrendingUp,
  FiLink,
  FiGlobe,
  FiBarChart2,
  FiMonitor,
  FiLayers
} from "react-icons/fi";

const SEOSpecialistMain = () => {
  const benefits = [
    {
      icon: <FiSearch className="w-6 h-6 text-indigo-600" />,
      title: "Boost Search Rankings",
      description: "Get found by the right audience on Google and other search engines"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Drive Organic Traffic",
      description: "Attract potential customers actively searching for your services"
    },
    {
      icon: <FiLayers className="w-6 h-6 text-indigo-600" />,
      title: "Comprehensive Optimization",
      description: "On-page, off-page, and technical SEO enhancements"
    },
    {
      icon: <FiMonitor className="w-6 h-6 text-indigo-600" />,
      title: "Technical SEO",
      description: "Improve site speed, mobile-friendliness, and user experience"
    },
    {
      icon: <FiLink className="w-6 h-6 text-indigo-600" />,
      title: "Strategic Link Building",
      description: "High-quality backlinks that boost domain authority"
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-indigo-600" />,
      title: "Local SEO",
      description: "Dominate local search results and Google My Business"
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 text-indigo-600" />,
      title: "Data-Driven Strategies",
      description: "Continuous optimization based on performance metrics"
    },
    {
      icon: <FiCheck className="w-6 h-6 text-indigo-600" />,
      title: "Algorithm Adaptation",
      description: "Stay ahead of Google's evolving search algorithms"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-indigo-600">Hibsons SEO Specialists</span> That Boost Your Online Visibility
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts craft data-driven strategies that enhance search rankings, drive qualified traffic, and maximize conversions. From technical audits to content optimization, we ensure your business stands out in search results.
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
                src="/images/seo-specialist.jpg"
                alt="SEO specialist analyzing website performance"
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
              Why Hire a Hibsons SEO Specialist?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sustainable <span className="text-indigo-600">Organic Growth</span>
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
                src="/images/seo-skills.jpg"
                alt="SEO tools and analytics dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Our <span className="text-indigo-600">SEO Specialists</span> Deliver
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Comprehensive technical SEO audits & fixes
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Keyword research & content optimization strategies
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  On-page optimization (metadata, schema markup, etc.)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  High-quality backlink acquisition & link building
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Local SEO & Google My Business optimization
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Regular performance reporting & analytics
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

export default SEOSpecialistMain;