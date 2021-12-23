import Header from "../components/Header"
import Content from "../components/Content";
import Footer from "../components/Footer";

const Series = () => {
  return (
    <div className="flex flex-col w-100 h-screen justify-between">
      <Header title = "Popular Series"/>
      <Content />
      <Footer />
    </div>
  );
};

export default Series;
