import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const homeData = [
  {
    title: "Popular Series",
  },
  { title: "Popular Movies" },
];

const Home = () => {
  return (
    <div className="flex flex-col w-100 h-screen justify-between">
      <Header title="Popular Titles" />
      <Content data={homeData} />
      <Footer />
    </div>
  );
};

export default Home;
