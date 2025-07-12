import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
            <div className="max-w-lg">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
                Digital Staffing Redefined
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Effortless Growth with <span className="text-indigo-600">Remote Experts</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We connect businesses with pre-vetted digital professionals. 
                Scale your team without the hiring hassle.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/get-started"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Book A Discovery Call
                </Link>
                <Link
                  href="/careers"
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center"
                >
                  See Careers
                </Link>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  <span className="font-semibold">Pay $0 until you hire</span> - No upfront costs
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-img.jpg"
                alt="Digital team collaborating"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-50 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-50 to-transparent -z-10"></div>
    </section>
  );
};

export default HeroSection;