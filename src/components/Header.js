import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className=" w-screen h-28 text-white">
      <div className=" bg-blue-500 h-1/2 drop-shadow-2xl">
        <nav className="flex  h-full items-center justify-between text-white bg-blue-500 mx-auto max-w-screen-xl">
          <div className="flex text-4xl w-4/5">
            <h1
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              DEMO Streaming
            </h1>
          </div>
          <div className="flex justify-between items-center w-1/5">
            <span>Log in</span>
            <button className="bg-gray-700 px-3 py-2 rounded-lg border-none">
              Start your free trial
            </button>
          </div>
        </nav>
      </div>
      <div className="bg-gray-700 w-100 h-1/2 drop-shadow-2xl">
        <div className="flex h-full items-center mx-auto max-w-screen-xl">
          <h2 className="text-2xl">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
