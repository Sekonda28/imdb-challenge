import Header from "../components/Header"
import Content from "../components/Content";
import Footer from "../components/Footer";
import data from "../assets/data.json"

const Movies = () => {
  console.log(data);
  return <div className="flex flex-col w-100 h-screen justify-between">
    <Header title = "Popular Movies" />
    <Content data = {data.entries} />
    <Footer />
  </div>;
}

export default Movies;