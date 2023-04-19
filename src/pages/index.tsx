import Navbar from "@/components/Navbar/Navbar";
import HomeBanner from "@/components/Banner/Banner";
import MainNews from "@/components/MainNews/MainNews";
import SecondaryNews from "@/components/SecondaryNews/SecondaryNews";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <MainNews title="Latest on Sustaintability & Energy" />
      <MainNews title="Most Trending" />
      <SecondaryNews title="Latest on Climate Change" />
      <SecondaryNews title="Latest on Energy" />
      <SecondaryNews title="Latest on Sustainable Finance" />
      <SecondaryNews title="Latest on Sustainable Lifestyle" />
      <NewsLetter />
      <Footer />
    </div>
  );
}
