import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const homeData = [
  {
    title: "series",
  },
  { title: "movies" },
];

const Home = () => {
  return (
    <div className=" flex flex-col w-100 min-h-screen justify-between">
      <Header title="Popular Titles" />
      <Content data={homeData} placeholder={true} width="w-36" height="h-64" />
      <Footer />
    </div>
  );
};

export default Home;
