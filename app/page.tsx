import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import CustomerReviews from "@/components/CustomerReviews";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import VASection from "@/components/VASection";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutUsSection />
      <CustomerReviews />
      <VASection />
      <CTASection />
      <WhyChooseUs />
      <FaqSection />
      <BlogSection />
    </div>
  )
}

export default Home
