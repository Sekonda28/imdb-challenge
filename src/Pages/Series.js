import Header from "../components/Header"
import Content from "../components/Content";
import Footer from "../components/Footer";
import data from "../assets/data.json"
import { dataSort } from "../components/Functions/dataSort";

const Series = () => {
  return (
    <div className="w-100 h-screen">
      <Header title = "Popular Series"/>
      <Content data = {dataSort("series")} width = "w-36" height= "h-64"/>
      <Footer />
    </div>
  );
};

export default Series;
