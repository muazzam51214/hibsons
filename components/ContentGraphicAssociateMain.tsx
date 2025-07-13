import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiImage,
  FiPenTool,
  FiLayers,
  FiEye,
  FiTrendingUp,
  FiUser,
  FiFeather
} from "react-icons/fi";

const ContentGraphicAssociateMain = () => {
  const benefits = [
    {
      icon: <FiImage className="w-6 h-6 text-indigo-600" />,
      title: "Engaging Visuals",
      description: "Professionally designed graphics that capture attention"
    },
    {
      icon: <FiPenTool className="w-6 h-6 text-indigo-600" />,
      title: "Impactful Content",
      description: "Persuasive copy and visuals that tell your brand story"
    },
    {
      icon: <FiLayers className="w-6 h-6 text-indigo-600" />,
      title: "Brand Identity",
      description: "Consistent, high-quality designs tailored to your business"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Marketing Assets",
      description: "Eye-catching materials for ads, posts, and campaigns"
    },
    {
      icon: <FiEye className="w-6 h-6 text-indigo-600" />,
      title: "User Experience",
      description: "Clear, compelling visuals that improve engagement"
    },
    {
      icon: <FiUser className="w-6 h-6 text-indigo-600" />,
      title: "Audience Connection",
      description: "Content that resonates with your target customers"
    },
    {
      icon: <FiFeather className="w-6 h-6 text-indigo-600" />,
      title: "Creative Storytelling",
      description: "Narratives that communicate your value proposition"
    },
    {
      icon: <FiCheck className="w-6 h-6 text-indigo-600" />,
      title: "Content Strategy",
      description: "Planned approach for maximum impact and consistency"
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
              <span className="text-indigo-600">Hibsons Content & Graphic Associates</span> That Elevate Your Brand
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our creatives craft compelling brand narratives through stunning visuals and strategic content. From social media graphics to conversion-focused designs, we ensure your brand stands out and connects with your audience.
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
                src="/images/content-graphic.jpg"
                alt="Content and graphic designer at work"
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
              Why Hire a Hibsons Content & Graphic Associate?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Visual <span className="text-indigo-600">Storytelling Excellence</span>
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
                src="/images/content-skills.jpg"
                alt="Content creation and graphic design tools"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Our <span className="text-indigo-600">Content & Graphic Associates</span> Deliver
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Social media graphics (posts, stories, banners)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Blog posts, articles, and website copywriting
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Brand identity materials (logos, style guides)
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Digital ads and marketing collateral
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Email newsletter design and content
                </span>
              </li>
              <li className="flex">
                <FiCheck className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Infographics and data visualization
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

export default ContentGraphicAssociateMain;