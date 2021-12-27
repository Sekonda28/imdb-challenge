import placeholder from "../assets/placeholder.png";

const PlaceholderImage = () => {
  return (
    <img
      src={placeholder}
      className="h-5/6 w-full bg-gray-900 object-center object-cover"
      alt="program poster"
    />
  );
};

export default PlaceholderImage;
