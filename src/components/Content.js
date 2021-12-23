import placeholder from "../assets/placeholder.png";
import PlaceholderImage from "./PlaceholderImage";

const Content = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="flex space-x-6">
        {data.map((item, index) => {
          console.log(item);
          return (
            <div className="flex flex-col h-48 w-36" key={index}>
            <PlaceholderImage title = {item.title}/>
              <h3 className="h-1/6 w-full">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
