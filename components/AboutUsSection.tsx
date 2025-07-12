import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-10">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-us-img.jpg"
                alt="Hibsons team collaborating"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="lg:w-3/5 lg:pl-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Businesses with{" "}
              <span className="text-indigo-600">Remote Talent</span>
            </h2>

            <p className="text-[16px] text-gray-600 mb-6">
              At Hibsons, we specialize in connecting businesses with top-tier
              remote professionals across the globe. As a digital staffing
              agency, our mission is to help companies scale efficiently by
              reducing hiring costs and accelerating team performance. With a
              commitment to quality and innovation, we offer tailored staffing
              solutions that align perfectly with your business goals—delivering
              up to 60% in salary savings without compromising on talent or
              results.
            </p>

            <p className="text-[16px] text-gray-600 mb-6">
              We don’t just fill roles—we build high-performance remote teams
              that integrate seamlessly into your operations. Whether you're a
              startup or an established enterprise, Hibsons is your trusted
              partner in driving growth through smart, scalable staffing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600 text-sm">
                  Access to 50,000+ pre-vetted professionals across 20+
                  countries.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Rigorous Vetting
                </h3>
                <p className="text-gray-600 text-sm">
                  Only 3% of applicants pass our 5-stage screening process.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/get-started"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Book A Discovery Call
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
