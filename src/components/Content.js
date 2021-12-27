import { useNavigate } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

const Content = ({ data, placeholder, width, height }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto w-full flex-1">
      <div className="flex flex-wrap">
        {data.slice(0, 21).map((item, index) => (
          <div
            className={`flex flex-col ${height} ${width} cursor-pointer m-2`}
            key={index}
            onClick={() => {
              navigate(`/${item.title}`);
            }}
          >
            {placeholder ? (
              <PlaceholderImage title={item.title} />
            ) : (
              <img
                src={item.images["Poster Art"].url}
                alt="poster"
                className="h-5/6 w-full  object-center object-contain"
              />
            )}

            <h3 className="h-1/6 w-full capitalize text-sm">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
