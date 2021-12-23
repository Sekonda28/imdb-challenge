import Header from "../components/Header"
import Content from "../components/Content";
import Footer from "../components/Footer";

const Movies = () => {
  return <div className="flex flex-col w-100 h-screen justify-between">
    <Header title = "Popular Movies" />
    <Content />
    <Footer />
  </div>;
}

export default Movies;