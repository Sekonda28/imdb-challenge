import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ title }) => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate();
  return (
    <div className=" w-screen h-24 md:h-36 text-white relative">
      <div className=" bg-blue-500 h-1/2 drop-shadow-2xl">
        <nav className="flex  h-full items-center justify-between text-white bg-blue-500 mx-6 md:mx-12 w-100">
          <div className="flex text-lg md:text-4xl xl:w-4/5 md:w-3/5">
            <h1
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              DEMO Streaming
            </h1>
          </div>
          <div className="hidden md:flex xl:justify-between  md:justify-around items-center xl:w-1/5 md:w-2/5">
            <span className=" cursor-pointer">Log in</span>
            <button className="bg-gray-700 px-3 py-2 rounded-lg border-none">
              Start your free trial
            </button>
          </div>
          <div
            id="hamburger"
            className="space-y-2 md:hidden cursor-pointer" onClick={()=>{setShowMenu(!showMenu)}}
          >
            <div className="w-8 h-0.5 bg-white rounded-lg"></div>
            <div className="w-8 h-0.5 bg-white rounded-lg"></div>
            <div className="w-8 h-0.5 rounded-lg bg-white"></div>
    
          </div>
        </nav>
  
      </div>
       <div className={`absolute ${!showMenu&&"hidden"} md:hidden top-12 right-0 px-6 w-fit h-fit bg-blue-500 text-right shadow-2xl rounded-bl-lg text-white z-50`}>
        <p className="cursor-pointer my-1">Log In</p>
        <p className="cursor-pointer my-1">Start your free trial</p>
      </div>
      <div className="bg-gray-700 w-100 h-1/2 drop-shadow-2xl">
        <div className="flex h-full items-center max-w-screen-xl mx-6 md:mx-12 -z-0">
          <h2 className="md:text-2xl text-base">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
