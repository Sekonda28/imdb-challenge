import Header from "../components/Header"
import Content from "../components/Content";
import Footer from "../components/Footer";


import { dataSort } from "../components/Functions/dataSort";

const Movies = () => {


  return <div className="w-100 h-screen">
    <Header title = "Popular Movies" />
    <Content data = {dataSort("movie")}  width = "w-36" height= "h-64"/>
    <Footer />
  </div>;
}

export default Movies;