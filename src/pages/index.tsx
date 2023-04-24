import Navbar from "@/components/Navbar/Navbar";
import HomeBanner from "@/components/Banner/Banner";
import News from "@/components/News/News";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";

import data from "@/dummyData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <News
        title="Latest on Sustaintability & Energy"
        data={data}
        main={true}
      />
      <News title="Most Trending" data={data} main={true} />
      <News title="Latest on Climate Change" data={data} main={false} />
      <News title="Latest on Energy" data={data} main={false} />
      <News title="Latest on Sustainable Finance" data={data} main={false} />
      <News title="Latest on Sustainable Lifestyle" data={data} main={false} />
      <NewsLetter />
      <Footer />
    </div>
  );
}
