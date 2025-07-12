import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Virtual Assistants Can Transform Your Marketing Agency",
      excerpt:
        "Discover how specialized VAs can help you scale operations while reducing overhead costs by up to 40%.",
      category: "Agency Growth",
      date: "May 15, 2023",
      readTime: "5 min read",
      author: "Sarah Johnson",
      image: "/images/content-and-graphic-img.jpg"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Hiring Your First Digital Assistant",
      excerpt:
        "Step-by-step process to identify your needs, find the right talent, and onboard successfully.",
      category: "Hiring Tips",
      date: "April 28, 2023",
      readTime: "8 min read",
      author: "Michael Chen",
      image: "/images/content-and-graphic-img.jpg"
    },
    {
      id: 3,
      title: "5 Signs Your Agency Needs Specialized Marketing Support",
      excerpt:
        "Recognize the key indicators that it's time to expand your team with skilled virtual professionals.",
      category: "Agency Operations",
      date: "April 10, 2023",
      readTime: "4 min read",
      author: "Emily Rodriguez",
      image: "/images/content-and-graphic-img.jpg"
    },
    {
      id: 4,
      title: "Comparing Costs: In-House vs Virtual Marketing Teams",
      excerpt:
        "Detailed breakdown showing how VAs can provide better ROI for growing agencies.",
      category: "Cost Analysis",
      date: "March 22, 2023",
      readTime: "6 min read",
      author: "David Wilson",
      image: "/images/content-and-graphic-img.jpg"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Insights & Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice and industry trends to help you grow your marketing
            agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FiUser className="mr-2" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link
            href="/blog"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
