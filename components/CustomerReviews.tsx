import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechStart Inc.",
      rating: 5,
      date: "2 weeks ago",
      content: "Hibsons transformed our hiring process. We found a perfect social media VA within 3 days who has increased our engagement by 40%. The quality of talent is exceptional.",
      avatar: "/images/female.png"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, DigitalGrowth Agency",
      rating: 5,
      date: "1 month ago",
      content: "Our SEO VA from Hibsons has helped us double our organic traffic in just 4 months. The vetting process really shows - we&apos;ve never worked with such knowledgeable professionals.",
      avatar: "/images/male.png"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Boutique Marketing Co.",
      rating: 4,
      date: "3 months ago",
      content: "The PPC management VA we hired has cut our customer acquisition costs by 35% while maintaining conversion rates. We&apos;re expanding our team with two more Hibsons VAs this quarter.",
      avatar: "/images/female.png"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Director of Ops, AdVantage Media",
      rating: 5,
      date: "2 months ago",
      content: "After struggling with freelancers for years, Hibsons was a game-changer. Our content creation VA produces better work than our previous in-house team at half the cost.",
      avatar: "/images/male.png"
    }
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from marketing agencies who&apos;ve transformed their operations with our VAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all h-full">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">{review.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4">&quot;{review.content}&quot;</p>
              
              <div className="flex items-center text-sm">
                <Image 
                  src="/images/google-logo.svg" 
                  alt="Google" 
                  width={24}
                  height={8}
                  className="mr-2"
                />
                <span className="text-gray-500">Google Reviews</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;