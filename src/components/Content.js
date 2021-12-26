import { useNavigate } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

const Content = ({ data, placeholder }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="flex flex-wrap">
        {data.map((item, index) => {
          console.log(item);
          return (
            <div
              className="flex flex-col h-48 w-28 cursor-pointer mr-6 mt-6"
              key={index}
              onClick={() => {
                navigate(`/${item.title}`);
              }}
            >
              {placeholder ? (
                <PlaceholderImage title={item.title} />
              ) : (
                <img src={item.images["Poster Art"].url} alt="poster" className="h-5/6 w-full  object-center object-contain"/>
              )}

              <h3 className="h-1/6 w-full capitalize">Popular {item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
