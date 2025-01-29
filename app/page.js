import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AuctionsSection from './components/AuctionsSection';
import TextImageSection from './components/TextImageSection';
import SalesSection from './components/SalesSection';
import PopularAuctionsSection from './components/PopularAuctionsSection';
import StatsSection from './components/StatsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AuctionsSection />
      <TextImageSection
        title="Sapien ipsum scelerisque convallis fusce"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="/images/paint.png" // Placeholder image
        buttonText="See More"
      />
      <SalesSection />
      <TextImageSection
        title="Habitant tristique aliquam in vel scelerisque"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="/images/emoji-paperplane.png" // Placeholder image
        buttonText="Explore More"
        reverseOrder // To reverse image and text order
      />
      <PopularAuctionsSection />
      <StatsSection />
      <NewsletterSection />
      <Footer />
      <BottomNav />
    </div>
  );
}